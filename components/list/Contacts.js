import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { Datagrid, TextField, EmailField, ReferenceField, useTranslate, Filter, TextInput, SelectInput, SelectField,
    FunctionField, useSetLocale } from "react-admin";
import TitledList from "../custom/TitledList";
import { CurrentListActions } from "../custom/ToolbarActions";
import useTypesRoles from "../../hooks/types/roles";
import useCountries from "../../hooks/types/countries";
import useListPermissions from "../../hooks/permissions/list";
import { isDisplayed } from "../../helpers/permissions";
import { useLayout } from "../custom/GridView";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import useClient from "../../hooks/client";
import Typography from "@material-ui/core/Typography";

/**
 * This component implements available filters
 *
 * @component
 * @param {Object} props - Properties to be applied to the main filter component
 * @returns {Component} - Return the fields to filter in a convenient widget
 */
const ContactsFilter = props => {
    const translate = useTranslate();

    return (
        <Filter {...props}>
            <TextInput label={translate("resources.contacts.fields.query")} source="q" alwaysOn />
            <SelectInput label={translate("resources.contacts.fields.role")} source="role"
                allowEmpty emptyValue={null} choices={useTypesRoles()} />
            <SelectInput label={translate("resources.contacts.fields.country")} source="country"
                allowEmpty emptyValue={null} choices={useCountries()} />
        </Filter>
    )
};

//   Display this component if no contacts in the database
const EmptyContact = props => {
    const classes = useLayout();
    const listPerms = useListPermissions(props);
    const translate = useTranslate();

    return (
        <Fragment>
                <div className={classes.emptyFlex}>
                <ContactsFilter className={classes.emptyResearch} />
                <CurrentListActions canCreate={isDisplayed(listPerms, "createContact")} />
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
 * This component allows to list contracts
 *
 * @component
 * @param {Object} props - Properties to be applied to the main component of the list
 * @returns {Component} - Return a datagrid to visualize all the contacts
 */
const ContactsList = props => {
    const translate = useTranslate();
    const listPerms = useListPermissions(props);
    const client = useClient();
    const setLocale = useSetLocale();
    const loading = useSelector(state => state.admin.loading > 0);

    useEffect(() => {
        if (client) {
            const { attributes } = client;
            const { locale } = attributes;

            setLocale(locale);
        }
    }, [client]);

    return (
        <TitledList {...props}
            empty={<EmptyContact />}
            filters={<ContactsFilter />}
            bulkActionButtons={false}
            title={translate("esop.contacts.list.title")}
            actions={<CurrentListActions canCreate={isDisplayed(listPerms, "createContact")} />}>
            <Datagrid rowClick={loading ? "" : "show"}>
                <TextField source="id" />
                <TextField source="firstname" />
                <TextField source="lastname" />
                <FunctionField label={translate("resources.contacts.fields.organizationId")}
                    source="organizationId" render={record => <ReferenceField
                    record={record} basePath="/contacts" resource="contacts"
                    source="organizationId" reference="persons" link={
                        isDisplayed(record.permissions, "getPersonById")
                            ? "show"
                            : false
                    }>
                        <TextField source="name" />
                    </ReferenceField>
                } />
                <SelectField source="country" choices={useCountries()}/>
                <FunctionField
                    source="role"
                    render={record => translate(`resources.contacts.types.${record.role}`)}
                    label={translate("resources.contacts.fields.role")}/>
                <TextField source="username" />
                <EmailField source="email" />
                <TextField source="phone" />
            </Datagrid>
        </TitledList>
    )
};

export default ContactsList;