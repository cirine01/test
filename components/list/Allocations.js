import React, { Fragment, cloneElement } from "react";
import { Datagrid, Filter, FunctionField, ReferenceField,
    TextInput, useTranslate, TopToolbar } from "react-admin";
import TitledList from "../custom/TitledList";
import { isDisplayed } from "../../helpers/permissions";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import { useLayout } from "../custom/GridView";
import PropTypes from "prop-types";
import ExportButton from "../custom/ExportButton";

const useStyles = makeStyles({
    oneLine: {
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "center"
    }
});

/**
 * This component implements available filters
 *
 * @component
 * @param {Object} props - Properties to be applied to the main filter component
 * @returns {Component} - Return the fields to filter in a convenient widget
 */
const AllocationsFilter = props => {
    const translate = useTranslate();

    return (
        <Filter {...props}>
            <TextInput label={translate("resources.allocations.fields.query")} source="q" alwaysOn />
        </Filter>
    )
};

//   Display this component if no allocations in the database
const EmptyAllocation = () => {
    const classes = useLayout();
    const translate = useTranslate();

    return (
        <Fragment>
            <div className={classes.emptyFlex}>
                <AllocationsFilter className={classes.emptyResearch} />
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
 const AllocationsListActions = ({
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

AllocationsListActions.propTypes = {
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
 * This component allows to list contracts
 *
 * @component
 * @param {Object} props - Properties to be applied to the main component of the list
 * @returns {Component} - Return a datagrid to visualize all the allocations
 */
const AllocationsList = props => {
    const translate = useTranslate();
    const classes = useStyles();


    return (
        <TitledList {...props}
            empty={<EmptyAllocation />}
            actions={<AllocationsListActions />}
            filters={<AllocationsFilter />}
            bulkActionButtons={false}
            title={translate("esop.allocations.list.title")}>
            <Datagrid>
                <FunctionField label={translate("resources.allocations.fields.serviceId")}
                    source="serviceId" render={record => <ReferenceField
                        record={record} basePath="/allocations" resource="allocations"
                        source="serviceId" reference="services"
                        link= {isDisplayed(record.permissions, "getServiceById", record.serviceId)
                        ? "show"
                        : false}>
                        <FunctionField render={service => <div className={classes.oneLine}>
                            <span>{translate(`resources.services.types.${service.type}`)}</span>
                            &nbsp;
                            <span>{service.id}</span>
                        </div>}/>
                    </ReferenceField>
                } />
                <FunctionField label={translate("resources.allocations.fields.equipmentId")}
                    source="equipmentId" render={record => <ReferenceField
                        record={record} basePath="/allocations" resource="allocations"
                        source="equipmentId" reference="equipments"
                        link= {isDisplayed(record.permissions, "getEquipmentById", record.equipmentId)
                        ? "show"
                        : false}>
                        <FunctionField render={equipment => <div className={classes.oneLine}>
                            <span>{translate(`resources.equipments.types.${equipment.type}`)}</span>
                            &nbsp;
                            <span>{equipment.id}</span>
                        </div>}/>
                    </ReferenceField>
                } />
                <FunctionField label={translate("resources.allocations.fields.mobileId")}
                    source="mobileId" render={record => <ReferenceField
                        record={record} basePath="/allocations" resource="allocations"
                        source="mobileId" reference="mobiles"
                        link= {isDisplayed(record.permissions, "getMobileById", record.mobileId)
                        ? "show"
                        : false}>
                        <FunctionField render={mobile => (`${mobile.name}${mobile.rc ? ` (${mobile.rc})` : ""}`)}/>
                </ReferenceField>
                } />
                <FunctionField label={translate("resources.allocations.fields.holderId")}
                    source="holderId" render={record => <ReferenceField
                        record={record} basePath="/allocations" resource="allocations"
                        source="holderId" reference="holders"
                        link={isDisplayed(record.permissions, "getHolderById", record.holderId)
                        ? "show"
                        : false}>
                        <FunctionField
                            render={name => (` ${name.firstname ? `${name.firstname}` : ""} ${name.lastname}`)}/>
                    </ReferenceField>
                } />
            </Datagrid>
        </TitledList>
    )
};

export default AllocationsList;