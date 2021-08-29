import { useState } from "react";
import { httpClient } from "../providers/data";
import { dataMapping } from "../providers/jsonProvider";

/**
 * Hook to retrieve allocations reserved
 *
 * @function
 * @returns {Promise} - allocations[]
 */
const usePreAllocated = ({ resource, reference, leftIds, rightIds }) => {
    const [
        datas,
        setDatas
    ] = useState([]);

    const [
        error,
        setError
    ] = useState(false);

    const [
        requestInProgress,
        setRequestInProgress
    ] = useState(false);

    const [
        loaded,
        setLoaded
    ] = useState(false);

    if (datas.length === 0 && !requestInProgress) {
        setRequestInProgress(true);
        httpClient(`${window.ESOP.api.url}/allocations/bulk?${
            resource.slice(0, -1)
        }Ids=${
            leftIds.join(",")
        }&${
            reference.slice(0, -1)
        }Ids=${
            rightIds.join(",")
        }`).
        then(res => {
            const { json } = res;

            setLoaded(true);

            if (json && json.data) {
                setDatas(dataMapping(json.data));
            }
        }).
        catch(err => {
            setLoaded(true);
            setError(err);
        });
    }

    return [
        datas,
        loaded,
        error
    ];
};

export default usePreAllocated;