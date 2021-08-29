import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { Fragment, cloneElement, useState } from "react";
import { useSelector } from "react-redux";
import {
    Datagrid, DateInput, Filter,
    FunctionField, ReferenceField, SelectInput, TextField, TextInput,
    useTranslate, TopToolbar
} from "react-admin";
import { isDisplayed } from "../../helpers/permissions";
import useListPermissions from "../../hooks/permissions/list";
import useContractualStatus from "../../hooks/status/equipments/contractual";
import useTypesEquipments from "../../hooks/types/equipments";
import AllocateMultipleButton from "../bulk/AllocateMultipleButton";
import AORButton from "../bulk/AORButton";
import { AddMultipleToGroupButton } from "../bulk/GroupsActions";
import { AllocationField } from "../custom/AllocationFields";
import { useLayout } from "../custom/GridView";
import StatusField from "../custom/StatusField";
import StatusInput from "../custom/StatusInput";
import TitledList from "../custom/TitledList";
import TZDateField from "../custom/TZDateField";
import GroupsDialogViewList from "./GroupsDialogView";
import { HoldersFilter } from "./Holders";
import HoldersDialogViewList from "./HoldersDialogView";
import { MobilesFilter } from "./Mobiles";
import MobilesDialogViewList from "./MobilesDialogView";
import { ServicesFilter } from "./Services";
import ServicesDialogViewList from "./ServicesDialogView";
import ControlledRecordRef from "../custom/ControlledRecordRef";
import ExportButton from "../custom/ExportButton";

/**
 * This component implements the bulk actions available
 *
 * @component
 * @param {Object} props - Properties to be applied to the bluckActions
 * @returns {Component} - Return the buttons for the bulk actions
 */
export const EquipmentsBulkActionButtons = props => {
    const translate = useTranslate();
    const { listPerms } = props;
    const [
        count,
        setCount
    ] = useState(0)

    const onSelectCount = event => {
        setCount(event)
    }

    return (
        <Fragment>
            {isDisplayed(listPerms, "addEntitiesToGroup") &&
                <AddMultipleToGroupButton {...props}
                    label={translate("esop.services.bulk.addToGroup")}
                    reference="groups"
                    filters={false}
                    component={<GroupsDialogViewList />}
                />
            }
            {isDisplayed(listPerms, "createAorOperationsList") &&
                <AORButton {...props} label={translate("esop.equipments.bulk.AOR")} />
            }
            {isDisplayed(listPerms, "getServicesLinkableToEntities") &&
                <AllocateMultipleButton {...props}
                    dialogActions={ (count > 0)
                        ? <Typography>{translate(`resources.services.selected`,
                                { smart_count: count })}
                            </Typography>
                        : ""
                    }
                    label={translate("esop.equipments.bulk.linkToServices")}
                    reference="services"
                    route="services/allocations/linkable"
                    filter={{ entityType: "EQUIPMENT" }}
                    filters={<ServicesFilter />}
                    component={<ServicesDialogViewList onSelectCount={onSelectCount} />}
                />
            }
            {isDisplayed(listPerms, "getHoldersLinkableToEntities") &&
                <AllocateMultipleButton {...props}
                    dialogActions={ (count > 0)
                        ? <Typography>{translate(`resources.holders.selected`,
                                { smart_count: count })}
                            </Typography>
                        : ""
                    }
                    label={translate("esop.equipments.bulk.linkToHolders")}
                    reference="holders"
                    route="holders/allocations/linkable"
                    filter={{ entityType: "EQUIPMENT" }}
                    filters={<HoldersFilter />}
                    component={<HoldersDialogViewList onSelectCount={onSelectCount} />}
                />
            }
            {isDisplayed(listPerms, "getMobilesLinkableToEntities") &&
                <AllocateMultipleButton {...props}
                    dialogActions={ (count > 0)
                        ? <Typography>{translate(`resources.mobiles.selected`,
                                { smart_count: count })}
                            </Typography>
                        : ""
                    }
                    label={translate("esop.equipments.bulk.linkToMobiles")}
                    reference="mobiles"
                    route="mobiles/allocations/linkable"
                    filter={{ entityType: "EQUIPMENT" }}
                    filters={<MobilesFilter />}
                    component={<MobilesDialogViewList onSelectCount={onSelectCount} />}
                />
            }
        </Fragment>
    )
};

EquipmentsBulkActionButtons.propTypes = {
    listPerms: PropTypes.array
}

/**
 * This component implements the available filters
 *
 * @component
 * @param {Object} props - Properties to be applied to the main filter component
 * @returns {Component} - Return the fields to filter in a convenient widget
 */
export const EquipmentsFilter = props => {
    const translate = useTranslate();
    const classes = useLayout();

    return (
        <Filter {...props}>
            <TextInput label={translate("resources.equipments.fields.query")} source="q" alwaysOn />
            <SelectInput source="type" allowEmpty emptyValue={null} choices={useTypesEquipments()}
                label={translate("resources.equipments.fields.type")} />
            <StatusInput source="contractualStatus" choices={useContractualStatus()}
                label={translate("resources.equipments.fields.contractualStatus")} />
            <DateInput source="purchaseDate_gte" className={classes.dateWidth}
                label={translate("resources.equipments.fields.purchaseDate_gte")}/>
            <DateInput source="purchaseDate_lte" className={classes.dateWidth}
                label={translate("resources.equipments.fields.purchaseDate_lte")}/>
            <DateInput source="warrantyEndDate_gte" className={classes.dateWidth}
                label={translate("resources.equipments.fields.warrantyEndDate_gte")}/>
            <DateInput source="warrantyEndDate_lte" className={classes.dateWidth}
                label={translate("resources.equipments.fields.warrantyEndDate_lte")}/>
        </Filter>
    )
};

//   Display this component if no Equipments in the database
const EmptyEquipment = () => {
    const classes = useLayout();
    const translate = useTranslate();

    return (
        <Fragment>
                <div className={classes.emptyFlex}>
                <EquipmentsFilter className={classes.emptyResearch} />
                </div>
            <Card>
                <CardContent>
                    <Typography className={classes.emptyList}>
                    {translate("esop.empty")}
                    </Typography>
                </CardContent>
            </Card>
        </Fragment>
    )
}

/**
 * This component display actions (filters and export)
 *
 * @component
 * @param {Object} props - Properties to be applied to the main filter component
 * @returns {Component} - Return the fields to filter in a convenient widget
 */
 const EquipmentsListActions = ({
    total,
    resource,
    currentSort,
    filterValues,
    permanentFilter,
    exporter,
    filters,
    showFilter,
    displayedFilters
}) => (
    <TopToolbar>
        {filters && cloneElement(filters, {
            resource,
            showFilter,
            displayedFilters,
            filterValues,
            context: "button",
        })}
        <ExportButton
            disabled={total === 0}
            resource={resource}
            sort={"true"}
            currentSort={currentSort}
            filter={{
                ...filterValues,
                ...permanentFilter
            }}
            exporter={exporter}
            maxResults="25"
        />
    </TopToolbar>
);

EquipmentsListActions.propTypes = {
    total: PropTypes.any,
    resource: PropTypes.any,
    currentSort: PropTypes.any,
    filterValues: PropTypes.any,
    permanentFilter: PropTypes.any,
    exporter: PropTypes.any,
    filters: PropTypes.any,
    showFilter: PropTypes.any,
    displayedFilters: PropTypes.any
};

/**
 * This component allows to list equipments
 *
 * @component
 * @param {Object} props - Properties to be applied to the main component of the list
 * @returns {Component} - Return a datagrid to visualize all the equipments
 */
const EquipmentsList = props => {
    const translate = useTranslate();
    const listPerms = useListPermissions(props);
    const loading = useSelector(state => state.admin.loading > 0);

    return (
        <TitledList {...props}
            empty={<EmptyEquipment />}
            actions={<EquipmentsListActions/>}
            filters={<EquipmentsFilter />}
            bulkActionButtons={<EquipmentsBulkActionButtons listPerms={listPerms} />}
            title={translate("esop.equipments.list.title")}>
            <Datagrid rowClick={loading ? "" : "show"}>
                <FunctionField
                    source="type"
                    render={record => translate(`resources.equipments.types.${record.type}`)}
                    label={translate("resources.equipments.fields.type")}/>
                <TextField source="id" />
                <StatusField source="contractualStatus" />
                <TZDateField source="purchaseDate" addLabel={false}/>
                <TZDateField source="warrantyEndDate" addLabel={false}/>
                <FunctionField label={translate("resources.equipments.fields.contract")}
                    source="clsContractId" render={record => <ReferenceField
                        record={record} basePath="/equipments" resource="equipments"
                        source="clsContractId" reference="contracts" link={
                            isDisplayed(record.permissions, "getContractById")
                                ? "show"
                                : false
                    }>
                        <TextField source="erpIdentifier" />
                    </ReferenceField>
                } />
                <FunctionField label={translate("resources.equipments.fields.ownerId")} source="ownerId"
                    render={record => <ReferenceField
                        record={record} basePath="/equipments" resource="equipments"
                        source="ownerId" reference="persons" link={
                            isDisplayed(record.permissions, "getPersonById", record.ownerId)
                                ? "show"
                                : false
                    }>
                        <TextField source="name" />
                    </ReferenceField>
                } />
                <ControlledRecordRef label={translate("resources.services.fields.links")}
                    auth={record => isDisplayed(record.permissions, "getAllocationByEquipmentId")} >
                    <AllocationField target="equipmentId" label={translate("resources.equipments.fields.links")}/>
                </ControlledRecordRef>
            </Datagrid>
        </TitledList>
    )
};

export default EquipmentsList;