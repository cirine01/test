import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import {
    Edit, email, SaveButton, DeleteWithConfirmButton, Toolbar, FormDataConsumer, ReferenceField, required,
    SelectInput, SimpleForm, TextField, TextInput, useTranslate, useNotify, useRedirect, useRefresh
} from "react-admin";
import { successHandler } from "../../helpers/handlers";
import useTypesRoles from "../../hooks/types/roles";
import useLanguages from "../../hooks/types/languages";
import useTimeZones from "../../hooks/types/timeZones";
import { useLayout } from "../custom/GridView";
import RecordCard from "../custom/RecordCard";
import RecordRef from "../custom/RecordRef";
import { CurrentEditActions } from "../custom/ToolbarActions";
import { isDisplayed } from "../../helpers/permissions";
import { makeStyles } from "@material-ui/core/styles";

/**
 * This component displays the current title of the view
 *
 * @component
 * @param {Object} record - Record used to build title
 * @returns {Component} - Return the title
 */
const CurrentTitle = ({ record = {} }) => {
    const translate = useTranslate();

    return (
        <span>
            {translate("resources.contacts.nameOne")} {record.firstname === null
                ? `${record.lastname}`
                : `${record.firstname} ${record.lastname}`
            }
        </span>
    )
};

CurrentTitle.propTypes = {
    record: PropTypes.object
}

/**
 * This component allows to add permissions on the show button
 *
 * @component
 * @param {Object} props - Properties to be applied to the main component of the form
 * @returns {Component} - Return a show button on the edit Top Tool Bar
 */
const ContactsEditActions = props => {
    const { data } = props;

    return data ? <CurrentEditActions {...props}
                editable={isDisplayed(data.permissions, "getContactById")} />
                : null
}

ContactsEditActions.propTypes = {
    data: PropTypes.object
}

const useStyles = makeStyles({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
});

const CustomToolbar = props => {
    const { record, lastName, firstName } = props;
    const translate = useTranslate();
    const classes = useStyles();
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    let test = "";

    if (firstName.value === "" || record.firstname === null) {
        test = translate("resources.contacts.deletedContact",
            { lastname: lastName.value || record.lastname,
            firstname: " " })
    } else {
        test = translate("resources.contacts.deletedContact",
            { lastname: lastName.value || record.lastname,
            firstname: firstName.value || record.firstname })
    }


    const onSuccess = () => {
        if (firstName.value === "" || record.firstname === null) {
            notify(`resources.contacts.updated`, "info",
                {
                    lastname: lastName.value || record.lastname,
                    firstname: " "
                }
            )
        } else {
            notify(`resources.contacts.updated`, "info",
                {
                    lastname: lastName.value || record.lastname,
                    firstname: firstName.value || record.firstname
                }
            )
        }

        if (isDisplayed(record.permissions, "getContacts")) {
            redirect("/contacts");
            refresh();
        } else {
            redirect(`/contacts/${record.id}/show`)
            refresh();
        }

    };

    return (record
        ? <Toolbar {...props} className={classes.toolbar}>
            <SaveButton undoable={false} onSuccess={onSuccess} />
            {isDisplayed(record.permissions, "deleteContactById") &&
                <DeleteWithConfirmButton
                    undoable={false}
                    confirmTitle = {translate(`resources.deleteConfirmation.title`)}
                    confirmContent={test}/>
            }
        </Toolbar>
        : null
    )
};

CustomToolbar.propTypes = {
    record: PropTypes.object,
    lastName: PropTypes.any,
    firstName: PropTypes.any
}


/**
 * This component allows to edit contacts
 *
 * @component
 * @param {Object} props - Properties to be applied to the main component of the form
 * @returns {Component} - Return a form to edit an contact
 */
const ContactsEdit = props => {
    const translate = useTranslate();
    const classes = useLayout();

    const [
        lastname,
        setLastname
    ] = useState("")
    const [
        firstname,
        setFirstname
    ] = useState("")

    const handleChangeLastname = event => {
        setLastname({ value: event.target.value })
    }
    const handleChangeFirstname = event => {
        setFirstname({ value: event.target.value })
    }

    return (
        <Edit {...props}
            actions={<ContactsEditActions />}
            component="div"
            title={<CurrentTitle />}
            undoable={false}
            onSuccess={successHandler("resources.contacts.updated", props)}>
            <RecordRef>
                <RecordCard className={classes.mainCard}>
                    <Fragment>
                        <Typography variant="h6" className={classes.cardTitle}>
                            {translate("esop.contacts.show.title_features")}
                        </Typography>
                    </Fragment>
                    <SimpleForm className={classes.grid}
                        toolbar={<CustomToolbar
                        lastName={lastname}
                        firstName={firstname} />}>
                        <TextField source="id" />
                        <ReferenceField source="organizationId" reference="persons" link={false}>
                            <TextField source="name"/>
                        </ReferenceField>
                        <FormDataConsumer>
                            {({ formData }) => {
                                if (formData.canUpdateRole && formData.canUpdateRole) {
                                    return <SelectInput source="role"
                                    choices={useTypesRoles()} validate={required()}
                                    label={translate("resources.contacts.fields.role")} />;
                                }
                                return <SelectInput source="role" disabled
                                choices={useTypesRoles()} validate={required()}
                                label={translate("resources.contacts.fields.role")} />;
                            }}
                        </FormDataConsumer>
                        <TextInput source="lastname"
                            onChange={handleChangeLastname}
                            validate={required()}
                            inputProps={{
                                maxLength: 100
                            }} />
                        <TextInput source="firstname"
                            onChange={handleChangeFirstname}
                            inputProps={{
                                maxLength: 100
                            }} />
                        <TextInput source="email"
                            inputProps={{
                                maxLength: 100
                            }}
                            validate={[
                                required(),
                                email()
                            ]} />
                        <TextInput source="phone"
                            inputProps={{
                                maxLength: 20
                            }} />
                        <FormDataConsumer>
                            {({ formData, record, ...rest }) => {
                                if (formData.role && formData.role !== "Basic") {
                                    if (record.username) {
                                        return <TextInput source="username" {...rest} disabled/>;
                                    }
                                    return <TextInput source="username" {...rest} validate={required()}/>;
                                }
                                return null;
                            }}
                        </FormDataConsumer>
                        <FormDataConsumer>
                            {({ formData, ...rest }) => {
                                if (formData.role && formData.role !== "Basic") {
                                    return <SelectInput source="locale" label="Languages" { ...rest }
                                    choices={useLanguages()} validate={required()} />;
                                }
                                return null;
                            }}
                        </FormDataConsumer>
                        <FormDataConsumer>
                            {({ formData, ...rest }) => {
                                if (formData.role && formData.role !== "Basic") {
                                    return <SelectInput source="timezoneId" { ...rest }
                                    choices={useTimeZones()} validate={required()} />;
                                }
                                return null;
                            }}
                        </FormDataConsumer>
                    </SimpleForm>
                </RecordCard>
            </RecordRef>
        </Edit>
    )
};

export default ContactsEdit;