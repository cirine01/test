import { useState } from "react";
import { httpClient } from "../../providers/data";

/**
 * Hook to retrieve languages
 *
 * @function
 * @returns {Promise} - languages
 */
const useLanguages = () => {
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
        httpClient(`${window.ESOP.api.url}/i18n/languages?sort=name`).
        then(({ json }) => setDatas(json.data)).
        catch(console.log);
    }

    return datas;
};

export default useLanguages;