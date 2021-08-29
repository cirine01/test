import React from "react";
import { SelectInput, useTranslate } from "react-admin";
import StatusField from "./StatusField";
import PropTypes from "prop-types";

/**
 * Options renderer for each status
 *
 * @component
 * @param {Object} record - Instance of the resource
 * @returns {Component} - Option of status
 */
const StatusFieldOption = ({ record }) => <StatusField source="name" record={record}/>;

StatusFieldOption.propTypes = {
    record: PropTypes.any
}

/**
 * A custom field to display the status of a resource with an icon on its left
 *
 * @component
 * @param {String} source - The source field
 * @param {Array} choices - Array of choices
 * @returns {Component} - Select input for the status
 */
const StatusInput = ({ source, choices }) => {
    const translate = useTranslate();

    return (
        <SelectInput source={source} choices={choices}
            allowEmpty emptyValue={null} translateChoice={false}
            optionValue="id" optionText={<StatusFieldOption />}
            helperText="" label={translate("resources.equipments.fields.contractualStatus")}/>
    );

}


StatusInput.propTypes = {
    source: PropTypes.string,
    choices: PropTypes.array
}

export default StatusInput;