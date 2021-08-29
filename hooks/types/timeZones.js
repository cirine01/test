import { useState } from "react";
import { httpClient } from "../../providers/data";

/**
 * Hook to retrieve Time zones
 *
 * @function
 * @returns {Promise} - time zones
 */
const useTimeZones = () => {
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
        httpClient(`${window.ESOP.api.url}/i18n/timezones?sort=id`).
        then(({ json }) => {
            setDatas(json.data);
        }).
        catch(console.log);
    }
    return datas;
};

export default useTimeZones;