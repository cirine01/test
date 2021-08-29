import { Checkbox, Radio } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { Datagrid, FunctionField, ReferenceField, TextField, useTranslate } from "react-admin";
import TZDateField from "../custom/TZDateField";
import { isDisplayed } from "../../helpers/permissions";

/**
 * This component allows to list groups
 *
 * @component
 * @param {Object} props - Properties to be applied to the main component of the list
 * @returns {Component} - Return a datagrid to visualize all the groups
 */
const GroupsDialogViewList = props => {
    const translate = useTranslate();
    const { selected, selectable = true, children, permissions, ...datagridProps } = props;

    return (
        <Datagrid
            permissions={permissions}
            {...datagridProps}>
            {/* eslint no-nested-ternary: off */
                selectable
                ? Array.isArray(selected)
                    ? <FunctionField render={record => (
                        <Checkbox
                            color="primary"
                            checked={(selected.indexOf(record.id) !== -1)}
                            onChange={null}
                            value={record.id}
                        />
                    )}/>
                    : <FunctionField render={record => (
                        <Radio
                            color="primary"
                            checked={record.id === selected}
                            onChange={null}
                            value={record.id}
                        />
                    )}/>
                : ""
            }
            <FunctionField label={translate("resources.groups.fields.sharedBy")}
                source="sharedBy" render={record => <ReferenceField
                    record={record} basePath="/groups" resource="groups"
                    source="sharedBy" reference="persons" link={
                        isDisplayed(record.permissions, "getPersonById", record.sharedBy)
                            ? "show"
                            : false
                }>
                    <TextField source="name" />
                </ReferenceField>
            } />
            <FunctionField label={translate("resources.groups.fields.sharedWith")}
                source="sharedWith" render={record => <ReferenceField
                    record={record} basePath="/groups" resource="groups"
                    source="sharedWith" reference="persons" link={
                        isDisplayed(record.permissions, "getPersonById", record.sharedWith)
                            ? "show"
                            : false
                }>
                    <TextField source="name" />
                </ReferenceField>
            } />
            <FunctionField
                label={translate("resources.groups.fields.createdByOrganization")}
                    source="createdByOrganization" render={record => <ReferenceField
                        record={record} basePath="/groups" resource="groups"
                        source="createdByOrganization" reference="persons" link={
                            isDisplayed(record.permissions, "getPersonById",
                                record.createdByOrganization)
                                ? "show"
                                : false
                    }>
                        <TextField source="name" />
                    </ReferenceField>
            } />
            <FunctionField label={translate("resources.groups.fields.createdByContact")}
                source="createdByContact" render={record => <ReferenceField
                    record={record} basePath="/groups" resource="groups"
                    source="createdByContact" reference="contacts" link={
                        isDisplayed(record.permissions, "getContactById")
                            ? "show"
                            : false
                }>
                    <FunctionField render={rec => (rec.firstname
                        ? `${rec.firstname} ${rec.lastname}`
                        : `${rec.lastname}`)}/>
                </ReferenceField>
            } />
            <TZDateField source="creationDate" addLabel={false}
                label={translate("resources.groups.fields.creationDate")}/>
            <TextField source="id" label={translate("resources.groups.fields.id")}/>
            {children}
        </Datagrid>
    )
};

GroupsDialogViewList.propTypes = {
    selected: PropTypes.any,
    selectable: PropTypes.bool,
    children: PropTypes.node,
    permissions: PropTypes.array
};

export default GroupsDialogViewList;