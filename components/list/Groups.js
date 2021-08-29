import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import {
    Datagrid, Filter, DateInput,
    FunctionField, ReferenceField, TextField, TextInput, useTranslate
} from "react-admin";
import { isDisplayed } from "../../helpers/permissions";
import useListPermissions from "../../hooks/permissions/list";
import EmptyField from "../custom/EmptyField";
import { useLayout } from "../custom/GridView";
import TitledList from "../custom/TitledList";
import { CurrentListActions } from "../custom/ToolbarActions";
import TZDateField from "../custom/TZDateField";
import UngroupButton from "../custom/UngroupButton";

/**
 * This component implements available filters
 *
 * @component
 * @param {Object} props - Properties to be applied to the main filter component
 * @returns {Component} - Return the fields to filter in a convenient widget
 */
const GroupsFilter = props => {
    const translate = useTranslate();
    const classes = useLayout();

    return (
        <Filter {...props}>
            <TextInput source="q" alwaysOn label={translate("resources.groups.fields.query")} />
            <DateInput source="creationDate_gte" className={classes.dateWidth}
                label={translate("resources.operations.fields.creationDate_gte")}/>
            <DateInput source="creationDate_lte" className={classes.dateWidth}
                label={translate("resources.operations.fields.creationDate_lte")}/>
        </Filter>
    )
};


//   Display this component if no groups in the database
const EmptyGroup = props => {
    const classes = useLayout();
    const listPerms = useListPermissions(props);
    const translate = useTranslate();

    return (
        <Fragment>
                <div className={classes.emptyFlex}>
                <GroupsFilter className={classes.emptyResearch} />
                <CurrentListActions canCreate={isDisplayed(listPerms, "createGroup")} />
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
 * This component allows to list groups
 *
 * @component
 * @param {Object} props - Properties to be applied to the main component of the list
 * @returns {Component} - Return a datagrid to visualize all the groups
 */
const GroupsList = props => {
    const translate = useTranslate();
    const listPerms = useListPermissions(props);
    const loading = useSelector(state => state.admin.loading > 0);

    return (
        <TitledList {...props}
            empty={<EmptyGroup />}
            filters={<GroupsFilter />}
            bulkActionButtons={false}
            title={translate("esop.groups.list.title")}
            actions={<CurrentListActions canCreate={isDisplayed(listPerms, "createGroup")} />} >
            <Datagrid rowClick={loading ? "" : "show"}>
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
                    source="sharedWith"render={record => <ReferenceField
                        record={record} basePath="/groups" resource="groups"
                        source="sharedWith" reference="persons" link={
                            isDisplayed(record.permissions, "getPersonById", record.sharedWith)
                                ? "show"
                                : false
                    }>
                        <TextField source="name" />
                    </ReferenceField>
                } />
                <FunctionField label={translate("resources.groups.fields.createdByOrganization")}
                    source="createdByOrganization" render={record => <ReferenceField
                        record={record} basePath="/groups" resource="groups"
                        source="createdByOrganization" reference="persons" link={
                            isDisplayed(record.permissions, "getPersonById", record.createdByOrganization)
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
                <TZDateField source="creationDate" addLabel={false}/>
                <TextField source="id" />
            </Datagrid>
        </TitledList>
    )
};

export const TabGroupsList = props => {
    const { parentRecord, ...dataProps } = props;
    const { total } = dataProps;
    const translate = useTranslate();

    return (
        total > 0
        ? <Datagrid {...dataProps}>
            <FunctionField label={translate("resources.groups.fields.sharedBy")}
                render={record => <ReferenceField
                    record={record} basePath="/groups" resource="groups"
                    source="sharedBy" reference="persons" link={
                        isDisplayed(parentRecord.permissions, "getPersonById",
                        record.sharedBy)
                            ? "show"
                            : false
                }>
                    <TextField source="name" />
                </ReferenceField>
            } />
            <FunctionField
                label={translate("resources.groups.fields.sharedWith")}
                render={record => <ReferenceField
                    record={record} basePath="/groups" resource="groups"
                    source="sharedWith" reference="persons" link={
                            isDisplayed(parentRecord.permissions, "getPersonById",
                                record.sharedWith)
                                ? "show"
                                : false
                    }>
                        <TextField source="name" />
                    </ReferenceField>
            } />
            <FunctionField
                label={translate("resources.groups.fields.createdByOrganization")}
                    render={record => <ReferenceField
                        record={record} basePath="/groups" resource="groups"
                        source="createdByOrganization" reference="persons" link={
                            isDisplayed(parentRecord.permissions, "getPersonById",
                                record.createdByOrganization)
                                ? "show"
                                : false
                    }>
                        <TextField source="name" />
                    </ReferenceField>
            } />
            <TZDateField source="creationDate" addLabel={false}/>
            {isDisplayed(parentRecord.permissions, "removeEntitiesFromGroup") &&
                <UngroupButton target={parentRecord} />
            }
        </Datagrid>
        : <EmptyField text={translate("esop.groups.empty")} />
    )
}

TabGroupsList.propTypes = {
    parentRecord: PropTypes.object,
}

export default GroupsList;