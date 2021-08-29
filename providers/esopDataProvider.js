import { OPERATIONS_TYPES } from "../helpers/Operations";

export const proxy_entities = {
    "incomingcontracts": "contracts/incoming",
    "externalcontracts": "contracts/external",
    "outcomingcontracts": "contracts/outcoming",
    "supportrequests": "support/supportRequest",
    "purchaseforecasts": "support/purchaseForecast",
    "purchaseforecast": "contracts/purchaseForecast",
};

export const quickConvert = (str, withProxy = false) => {
    const res = {
        holderId: "holders",
        equipmentId: "equipments",
        mobileId: "mobiles",
        serviceId: "services",
        holders: "holderId",
        equipments: "equipmentId",
        mobiles: "mobileId",
        services: "serviceId"
    }[str];

    if (withProxy) {
        return proxy_entities[res] || res;
    }

    return res;
};

export const proxyProvider = (...args) => {
    /* eslint-disable */
    let [ resource, params, methodName ] = args;

    Object.entries(proxy_entities).forEach( ([res, route]) => {
        if(res === resource) {
            resource = route;
        }
    })

    let _proxy;
    if(params.filter && params.filter._proxy) {
        _proxy = {...params.filter._proxy};
        params.filter._proxy = undefined;
    } else if(params._proxy) {
        _proxy = params._proxy;
        params._proxy = undefined;
    }
    if(_proxy) {
        resource = _proxy.resource || resource;
        params = _proxy.params || params;
    }
    /* eslint-enable */

    return {
        resource,
        params
    };
};

export default (dataProvider, proxy = proxyProvider) => {

    const esopProvider = {
        ...dataProvider,

        getManyReference: (resource, params) => {
            const newParams = { ...params };

            if (resource === "allocations") {
                newParams.target = quickConvert(newParams.target) || "equipments";
            }

            if (resource === "contacts") {
                /* eslint-disable id-length */
                newParams.q = newParams.id;

                if (newParams.target === "organizationId") {
                    newParams.target = "byOrganization";
                    newParams.q = "";
                }
                /* eslint-enable id-length */
            }

            if (params.target === "currentContractId" && (
                resource === "services" || resource === "equipments"
            )) {
                newParams.target = "byContract";
            }

            if (params.target === "groupId" && (
                resource === "services" || resource === "equipments" || resource === "mobiles" || resource === "holders"
            )) {
                newParams.target = "groups";
            }

            return dataProvider.getManyReference(resource, newParams);
        },

        create: (resource, params) => {
            const newParams = { ...params };

            if (resource === "persons") {
                newParams.data.type = "ORGANIZATION"
            }

            if (resource === "operations") {
                return dataProvider.create(OPERATIONS_TYPES[newParams.data.type].resource, newParams);
            }

            return dataProvider.create(resource, newParams);
        },

        update: (resource, params) => {
            const newParams = { ...params };

            if (resource === "allocations" && params.data) {
                if (params.data.delete) {
                    const { allocation, source } = params.data;

                    newParams.id = `${allocation[source]}/${params.id}`;
                    newParams.data = allocation;

                    return dataProvider.update(`${resource}/${quickConvert(source)}/${newParams.id}`, newParams);
                }
            }

            return dataProvider.update(resource, newParams);
        },
    };

    Object.keys(esopProvider).forEach(key => {
        const method = esopProvider[key];

        esopProvider[key] = (prResource, prParams) => {
            const { resource, params } = proxy(prResource, prParams, key);

            return method(resource, params);
        }
    })

    return esopProvider;
};