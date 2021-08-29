import { useState } from "react";
import { httpClient } from "../../providers/data";
import { stringify } from "query-string";
import { proxy_entities } from "../../providers/esopDataProvider";

/**
 * Hook to permissions on a list
 *
 * @function
 * @param {Object} props - Props
 * @returns {Promise} - Permissions[]
 */
const useListPermissions = props => {
    const [
        datas,
        setDatas
    ] = useState([]);

    let { resource } = props;
    const { filterValues } = props;

    resource = proxy_entities[resource] || resource;

    const query = {
        ...filterValues,
        pageNumber: 1,
        pageSize: 1,
    };
    const url = `${window.ESOP.api.url}/${resource}?${stringify(query)}`;

    const [
        requestInProgress,
        setRequestInProgress
    ] = useState(false);

    if (datas.length === 0 && !requestInProgress) {
        setRequestInProgress(true);
        httpClient(url).
        then(({ json }) => {
            if (json && json.meta && json.meta.permissions) {
                setDatas(json.meta.permissions);
            }
        }).
        catch(console.log);
    }

    return datas;
};

export default useListPermissions;