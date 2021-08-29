import { useState } from "react";
import { httpClient } from "../../providers/data";
import { useTranslate } from "react-admin";

/**
 * Hook to retrieve mobile types
 *
 * @function
 * @returns {Promise} - Mobile types
 */
const useTypesMobiles = () => {
    const translate = useTranslate();
    const [
        mobileTypes,
        setMobileTypes
    ] = useState([]);

    const [
        requestInProgress,
        setRequestInProgress
    ] = useState(false);

    if (mobileTypes.length === 0 && !requestInProgress) {
        setRequestInProgress(true);
        httpClient(`${window.ESOP.api.url}/types/mobiles`).
        then(({ json }) => setMobileTypes(json)).
        catch(console.log);
    }

    return mobileTypes.map(mobileType => ({
        id: mobileType,
        name: translate(`resources.mobiles.types.${mobileType}`)
    }));
};

export default useTypesMobiles;