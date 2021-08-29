import { useState } from "react";
import { httpClient } from "../../providers/data";
import { useTranslate } from "react-admin";

/**
 * Hook to retrieve person profiles
 * @param {Object} props - Properties to be applied to the main filter component
 * @function
 * @returns {Promise} - Person profiles
 */
const useTypesProfiles = props => {
    const translate = useTranslate();
    const [
        profilesTypes,
        setProfilesTypes
    ] = useState([]);

    const [
        requestInProgress,
        setRequestInProgress
    ] = useState(false);

    if (profilesTypes.length === 0 && !requestInProgress) {
        setRequestInProgress(true);
        httpClient(`${window.ESOP.api.url}/${props} `).
        then(({ json }) => setProfilesTypes(json)).
        catch(console.log);
    }

    return profilesTypes.map(profilesType => ({
        id: profilesType,
        name: translate(`resources.persons.types.${profilesType}`)
    }));
};

export default useTypesProfiles;