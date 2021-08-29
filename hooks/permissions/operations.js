import { proxy_entities } from "../../providers/esopDataProvider";
import { httpClient } from "../../providers/data";
import { useState } from "react";

const useOperationsPermissions = props => {
    const [
        perms,
        setPerms
    ] = useState([]);

    const resource = proxy_entities[props.resource] || props.resource;
    const { id } = props;

    const url = `${window.ESOP.api.url}/${resource}/${id}`;

    if (perms.length === 0) {
        httpClient(url).
        then(response => setPerms(response.json.data[0].permissions)).
        catch(console.log);
    }

    return perms;
};

export default useOperationsPermissions;