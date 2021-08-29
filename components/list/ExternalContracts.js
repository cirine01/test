import React from "react";
import {
    Datagrid, DateInput, Filter,
    FunctionField, ReferenceField, SelectInput, TextField, TextInput,
    useTranslate
} from "react-admin";
import { isDisplayed } from "../../helpers/permissions";
import useStatusContracts from "../../hooks/status/contracts";
import useTypesContracts from "../../hooks/types/contracts";
import StatusField from "../custom/StatusField";
import StatusInput from "../custom/StatusInput";
import TitledList from "../custom/TitledList";
import TZDateField from "../custom/TZDateField";
import { ContractsListActions } from "./Contracts";
import { useLayout } from "../custom/GridView";

/**
 * This component implements available filters
 *
 * @component
 * @param {Object} props - Properties to be applied to the main filter component
 * @returns {Component} - Return the fields to filter in a convenient widget
 */
const ExternalContractsFilter = props => {
    const translate = useTranslate();
    const classes = useLayout();

    return (
        <Filter {...props}>
            <TextInput label={translate("resources.externalcontracts.fields.query")} source="q" alwaysOn />
            <StatusInput source="status" choices={useStatusContracts()}
                label={translate("resources.externalcontracts.fields.status")} />
            <SelectInput source="type" allowEmpty emptyValue={null} choices={useTypesContracts()}
                label={translate("resources.externalcontracts.fields.type")} />
            <DateInput source="startDate_gte" className={classes.dateWidthLarge}
                label={translate("resources.externalcontracts.fields.startDate_gte")}/>
            <DateInput source="startDate_lte" className={classes.dateWidth}
                label={translate("resources.externalcontracts.fields.startDate_lte")}/>
        </Filter>
    )
};

/**
 * This component allows to list external contracts
 *
 * @component
 * @param {Object} props - Properties to be applied to the main component of the list
 * @returns {Component} - Return a datagrid to visualize all the external services
 */
const ExternalContractsList = props => {
    const translate = useTranslate();

    return (
        <TitledList {...props}
            filters={<ExternalContractsFilter />}
            bulkActionButtons={false}
            title={translate("esop.externalcontracts.list.title")}
            actions={<ContractsListActions />}>
            <Datagrid rowClick={id => `/contracts/${id}/show`}>
                <FunctionField
                    source="type"
                    render={record => translate(`resources.externalcontracts.types.${record.type}`)}
                    label={translate("resources.externalcontracts.fields.type")}/>
                <TextField source="erpIdentifier" />
                <StatusField source="status" />
                <FunctionField label={translate("resources.externalcontracts.fields.vendorId")}
                    source="vendorId" render={record => <ReferenceField
                        record={record} basePath="/persons" resource="externalContracts"
                        source="vendorId" reference="persons" link={
                            isDisplayed(record.permissions, "getPersonById", record.vendorId)
                                ? "show"
                                : false
                    }>
                        <TextField source="name" />
                    </ReferenceField>
                } />
                <FunctionField label={translate("resources.externalcontracts.fields.buyerId")}
                    source="buyerId" render={record => <ReferenceField
                        record={record} basePath="/persons" resource="externalContracts"
                        source="buyerId" reference="persons" link={
                            isDisplayed(record.permissions, "getPersonById", record.buyerId)
                                ? "show"
                                : false
                    }>
                        <TextField source="name" />
                    </ReferenceField>
                } />
                <TZDateField source="startDate" addLabel={false}/>
                <TextField source="id" />
            </Datagrid>
        </TitledList>
    )
};

export default ExternalContractsList;