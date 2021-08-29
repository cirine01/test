import { useState } from "react";
import { httpClient } from "../../providers/data";
import { useTranslate } from "react-admin";

/**
 * Hook to retrieve service types
 *
 * @function
 * @returns {Promise} - Service types
 */
const useTypesServices = () => {
    const translate = useTranslate();
    const [
        servicesTypes,
        setServicesTypes
    ] = useState([]);

    const [
        requestInProgress,
        setRequestInProgress
    ] = useState(false);

    if (servicesTypes.length === 0 && !requestInProgress) {
        setRequestInProgress(true);
        httpClient(`${window.ESOP.api.url}/types/services`).
        then(({ json }) => setServicesTypes(json)).
        catch(console.log);
    }

    return servicesTypes.map(servicesType => ({
        id: servicesType,
        name: translate(`resources.services.types.${servicesType}`)
    }));
};

export default useTypesServices;