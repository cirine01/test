import { useState } from "react";
import { httpClient } from "../../providers/data";
import { useTranslate } from "react-admin";

/**
 * Hook to retrieve Supports types
 *
 * @function
 * @returns {Promise} - Supports types
 */
const useTypesSupports = () => {
    const translate = useTranslate();
    const [
        supportsTypes,
        setSupportsTypes
    ] = useState([]);

    const [
        requestInProgress,
        setRequestInProgress
    ] = useState(false);

    if (supportsTypes.length === 0 && !requestInProgress) {
        setRequestInProgress(true);
        httpClient(`${window.ESOP.api.url}/types/supports`).
        then(({ json }) => setSupportsTypes(json)).
        catch(console.log);
    }

    return supportsTypes.map(supportsType => ({
        id: supportsType,
        name: translate(`resources.supports.types.${supportsType}`)
    }));
};

export default useTypesSupports;