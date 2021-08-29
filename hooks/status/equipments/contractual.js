import { useState } from "react";
import { httpClient } from "../../../providers/data";

/**
 * Hook to retrieve contractual statuses for equipments
 *
 * @function
 * @returns {Promise} - status[]
 */
const useStatusEquipmentsContractual = () => {
    const [
        datas,
        setDatas
    ] = useState([]);

    const [
        requestInProgress,
        setRequestInProgress
    ] = useState(false);

    if (datas.length === 0 && !requestInProgress) {
        setRequestInProgress(true);
        httpClient(`${window.ESOP.api.url}/status/equipments/contractual`).
        then(({ json }) => {
            const datasMap = [];

            json.map(data => datasMap.push({
                id: data,
                name: data
            }));
            setDatas(datasMap);
        }).
        catch(console.log);
    }

    return datas;
};

export default useStatusEquipmentsContractual;