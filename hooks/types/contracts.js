import { useState } from "react";
import { httpClient } from "../../providers/data";
import { useTranslate } from "react-admin";

/**
 * Hook to retrieve contracts types
 *
 * @function
 * @returns {Promise} - contracts types
 */
const useTypesContracts = () => {
    const translate = useTranslate();
    const [
        contractsTypes,
        setContractsTypes
    ] = useState([]);

    const [
        requestInProgress,
        setRequestInProgress
    ] = useState(false);

    if (contractsTypes.length === 0 && !requestInProgress) {
        setRequestInProgress(true);
        httpClient(`${window.ESOP.api.url}/types/contracts`).
        then(({ json }) => setContractsTypes(json)).
        catch(console.log);
    }

    return contractsTypes.map(contractsType => ({
        id: contractsType,
        name: translate(`resources.outcomingcontracts.types.${contractsType}`)
    }));
};

export default useTypesContracts;