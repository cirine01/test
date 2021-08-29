import { useState } from "react";
import { httpClient } from "../../providers/data";
import { useTranslate } from "react-admin";

/**
 * Hook to retrieve equipment types
 *
 * @function
 * @returns {Promise} - Equipment types
 */
const useTypesEquipments = () => {
    const translate = useTranslate();
    const [
        equipmentsTypes,
        setEquipmentsTypes
    ] = useState([]);

    const [
        requestInProgress,
        setRequestInProgress
    ] = useState(false);

    if (equipmentsTypes.length === 0 && !requestInProgress) {
        setRequestInProgress(true);
        httpClient(`${window.ESOP.api.url}/types/equipments`).
        then(({ json }) => setEquipmentsTypes(json)).
        catch(console.log);
    }

    return equipmentsTypes.map(equipmentsType => ({
        id: equipmentsType,
        name: translate(`resources.equipments.types.${equipmentsType}`)
    }));
};

export default useTypesEquipments;