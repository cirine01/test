import React, { useState } from "react";
import {
    Create, email, FormDataConsumer, required, SelectInput, SimpleForm, TextInput,
    useTranslate
} from "react-admin";
import useTypesRoles from "../../hooks/types/roles";
import EntitySelect from "../custom/EntitySelect";
import { useLayout } from "../custom/GridView";
import RecordCard from "../custom/RecordCard";
import RecordRef from "../custom/RecordRef";
import { CurrentCreateActions } from "../custom/ToolbarActions";
import { SaveWithConfirmButton } from "../custom/DialogConfirmationButton";
import { PersonsFilter } from "../list/Persons";
import PersonsDialogViewList from "../list/PersonsDialogView";
import useLanguages from "../../hooks/types/languages";
import useTimeZones from "../../hooks/types/timeZones";

/**
 * This component allows to create new Contacts
 *
 * @component
 * @param {Object} props - Properties to be applied to the main component of the form
 * @returns {Component} - Return a form to create a mobile
 */
const ContactsCreate = props => {
    const classes = useLayout();
    const translate = useTranslate();

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
        <Create {...props}
            component="div"
            actions={<CurrentCreateActions
                title={translate("esop.contacts.create.title")}
                listable={true}
            />}>
            <RecordRef>
                <RecordCard className={classes.mainCard}>
                    <SimpleForm
                        toolbar={<SaveWithConfirmButton
                        redirect="show"
                        lastName={lastname}
                        firstName={firstname}
                        resource="contacts"
                        {...props} />}
                        className={classes.grid}>
                        <TextInput source="lastname"
                            onChange={handleChangeLastname}
                            inputProps={{
                                maxLength: 100
                            }}
                            validate={required()} />
                        <TextInput source="firstname"
                            onChange={handleChangeFirstname}
                            inputProps={{
                                maxLength: 100
                            }} />
                        <SelectInput source="role" label={translate("resources.contacts.fields.role")}
                            choices={useTypesRoles()} validate={required()}/>
                        <EntitySelect
                            source="organizationId"
                            reference="persons"
                            route="persons/createContact"
                            filters={<PersonsFilter />}
                            component={<PersonsDialogViewList />}
                            label={translate("resources.contacts.fields.organizationId")}
                            validate={required()}
                        />
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
                            }}/>
                        <FormDataConsumer>
                            {({ formData, ...rest }) => ((formData.role && formData.role !== "Basic")
                                ? <TextInput source="username" {...rest}
                                    validate={required()}
                                    inputProps={{
                                        maxLength: 20
                                    }}/>
                                : null)
                            }
                        </FormDataConsumer>
                        <FormDataConsumer>
                            {({ formData, ...rest }) => ((formData.role && formData.role !== "Basic")
                                ? <SelectInput source="locale"
                                    label={translate(`resources.contacts.fields.locale`)} {...rest}
                                    choices={useLanguages()} validate={required()}/>
                                : null)
                            }
                        </FormDataConsumer>
                        <FormDataConsumer>
                            {({ formData, ...rest }) => ((formData.role && formData.role !== "Basic")
                                ? <SelectInput source="timezoneId"
                                    label={translate("resources.contacts.fields.timezone")} {...rest}
                                    choices={useTimeZones()} validate={required()}/>
                                : null)
                            }
                        </FormDataConsumer>
                    </SimpleForm>
                </RecordCard>
            </RecordRef>
        </Create>
    )
};

export default ContactsCreate;