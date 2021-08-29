import { stringify } from "query-string";
import { fetchUtils } from "ra-core";

/* eslint comma-spacing: ["error", { "before": false, "after": true }]*/

/**
 * Function to transform json data from SpringBoot to usable js object
 * @param {Object} data The data entity received by API
 * @param {Boolean} revert If true returns API's object architecture
 * @returns {Object} formatted data
 */
const dataFormat = (data, revert = false) => {
    if (revert) {
        const { id, type, ...attrs } = data;

        Reflect.deleteProperty(attrs, "uuid");
        const newData = {
            uuid: id,
            type,
        };

        if (attrs && Object.keys(attrs).length) {
            newData.attributes = {
                ...attrs
            };
        }

        return newData;
    }
    if (data.uuid) {
        data.id = `${data.uuid}`;
    }
    if (data.attributes) {
        Object.assign(data, data.attributes);
        Reflect.deleteProperty(data, "attributes");
        Reflect.deleteProperty(data, "relationships");
        Reflect.deleteProperty(data, "uuid");
    }
    return data;
};

const stringFilter = filter => {

    if (!filter) {
        return "";
    }

    return Object.entries(filter).
        /* eslint-disable */
        filter(([key , val]) => (val || val === 0)).
        map(([key , val]) => [key, val.toString()].join(":")).
        /* eslint-enable */
        join(",");
};

const objectFilter = objFilter => {
    /* eslint-disable */
    const {
        entityType,
        entityId,
        forExport,
        q,
        _proxy,
        ...props
    } = objFilter;
    const newParams = {
        entityType,
        entityId,
        forExport,
        q
    };
    /* eslint-enable */
    const newFilter = { ...props };

    if (Object.keys(newFilter).length) {
        const strFilter = stringFilter(newFilter);

        if (strFilter) {
            newParams.filter = strFilter;
        }
    }

    return Object.keys(newParams).length ? newParams : null;
}

/**
 * Function to format object or array of objects
 * @param {*} data The data entity.ies received by API
 * @param {Boolean} revert If true returns API's object architecture
 * @returns {Object} formatted data
 */
export const dataMapping = (data, revert = false) => {
    if (Array.isArray(data)) {
        return data.map(item => dataFormat(item, revert));
    }
    return dataFormat(data, revert);
};

/**
 * Maps react-admin queries to a springBoot-server powered REST API
 * @param {String} apiUrl url of API
 * @param {HttpClient} httpClient the httpClient used to call API
 *
 * @returns {DataProvider} Object-like dataProvider
 */
export default (apiUrl, httpClient = fetchUtils.fetchJson) => ({
    getList: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            ...objectFilter(params.filter),
            sort: `${order === "ASC" ? "" : "-"}${field}`,
            pageNumber: page,
            pageSize: perPage,
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ json }) => {
            if (!json || !json.data) {
                return {
                    data: [],
                    total: 0
                }
            }

            return {
                data: dataMapping(json.data),
                total: (json.meta ? json.meta.totalEntities : json.data.length),
                permissions: (json.meta ? json.meta.permissions : [])
            };
        });
    },

    getOne: (resource, params) => httpClient(`${apiUrl}/${resource}/${params.id}`).
        then(({ json }) => {
            if (!json || !json.data) {
                return { data: null }
            }

            return {
                data: dataMapping(json.data[0]),
            };
        }),

    getMany: (resource, params) => Promise.all(
            params.ids.map(id => {
                const query = params.filter ? `?${stringify(objectFilter(params.filter))}` : ""

                return httpClient(`${apiUrl}/${resource}/${id}${query}`);
            })
        ).then(responses => ({
            data: responses.map(({ json }) => dataMapping(json.data[0])),
            total: responses.length
        })),

    getManyReference: (resource, params) => {
        let url = `${apiUrl}/${resource}/${params.target}/${params.id}`;

        let queryString = null;

        if (params.q) {
            url = `${apiUrl}/${resource}`
            queryString = {
                ...queryString,
                "q": params.q
            };
        }

        if (params.filter && Object.keys(params.filter).length) {
            queryString = {
                ...queryString,
                ...objectFilter(params.filter)
            };
        }

        if (params.pagination) {
            const { page, perPage } = params.pagination;

            queryString = {
                ...queryString,
                pageNumber: page,
                pageSize: perPage
            };
        }

        if (queryString) {
            url += `?${stringify(queryString)}`;
        }

        return httpClient(url).then(({ json }) => {
                if (!json || !json.data) {
                    return {
                        data: [],
                        total: 0
                    }
                }

                return {
                    data: dataMapping(json.data),
                    total: (json.meta ? json.meta.totalEntities : json.data.length)
                };
            });
    },

    update: (resource, params) => httpClient(`${apiUrl}/${resource}`, {
            method: "PATCH",
            body: JSON.stringify({
                data: [dataMapping(params.data, true)]
            }),
        }).then(({ json }) => {
            if (!json || !json.data) {
                return {
                    data: [],
                    total: 0
                }
            }

            return {
                data: dataMapping(json.data),
                total: (json.meta ? json.meta.totalEntities : json.data.length)
            };
        }),

    updateMany: (resource, params) => Promise.all(
            params.ids.map(id => httpClient(`${apiUrl}/${resource}/${id}`, {
                    method: "PATCH",
                    body: JSON.stringify(dataMapping(params.data, true)),
                })
            )
        ).then(responses => ({
            data: responses.map(({ json }) => dataMapping(json.data[0]))
        })),

    create: (resource, params) => {
        const datas = dataMapping(params.data, true);

        return httpClient(`${apiUrl}/${resource}`, {
            method: "POST",
            body: JSON.stringify({
                data: Array.isArray(datas) ? datas : [datas]
            }),
        }).
        then(({ json }) => ({
            data: dataMapping(json.data[0])
        }))
    },

    delete: (resource, params) => httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: "DELETE",
        }).
        then(() => ({ data: params.id })),

    deleteMany: (resource, params) => Promise.all(
            params.ids.map(id => httpClient(`${apiUrl}/${resource}/${id}`, {
                    method: "DELETE",
                })
            )
        ).then(responses => ({
            data: responses.map(({ json }) => dataMapping(json.data[0]))
        }))
});