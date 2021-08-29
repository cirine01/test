import { useState } from "react";
import { httpClient } from "../../providers/data";
import { useTranslate } from "react-admin";

/**
 * Hook to retrieve user roles
 *
 * @function
 * @returns {Promise} - User roles
 */
const useTypesRoles = () => {
    const translate = useTranslate();
    const [
        rolesTypes,
        setRolesTypes
    ] = useState([]);

    const [
        requestInProgress,
        setRequestInProgress
    ] = useState(false);

    if (rolesTypes.length === 0 && !requestInProgress) {
        setRequestInProgress(true);
        httpClient(`${window.ESOP.api.url}/types/roles/contactCreation`).
        then(({ json }) => setRolesTypes(json)).
        catch(console.log);
    }

    return rolesTypes.map(rolesType => ({
        id: rolesType,
        name: translate(`resources.contacts.types.${rolesType}`)
    }));
};

export default useTypesRoles;