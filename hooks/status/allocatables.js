import { useState } from "react";
import { httpClient } from "../../providers/data";

/**
 * Hook to retrieve allocatables status
 *
 * @function
 * @returns {Promise} - status[]
 */
const useStatusAllocatables = () => {
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
        httpClient(`${window.ESOP.api.url}/status/allocatables`).
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

export default useStatusAllocatables;