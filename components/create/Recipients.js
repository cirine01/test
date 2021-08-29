import React, { Fragment, useState } from "react";
import {
    SimpleForm, TextInput, required, Create, useTranslate, email, ListButton, TopToolbar, CreateButton
    } from "react-admin";
import { successHandler } from "../../helpers/handlers";
import { useLayout } from "../custom/GridView";
import RecordCard from "../custom/RecordCard";
import RecordRef from "../custom/RecordRef";
import { CurrentCreateActions } from "../custom/ToolbarActions";
import { parse } from "query-string";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { SaveWithConfirmButton } from "../custom/DialogConfirmationButton";

/**
 * This component implements available create actions
 *
 * @component
 * @param {String} basePath - The basepath of the resource
 * @param {String} resource - The resource as a string
 * @param {String} title - The title
 * @returns {Component} - Return the toolbar for the actions
 */
export const CurrentActions = ({ data }) => {
    const translate = useTranslate();
    const classes = useLayout();

    return (
        <TopToolbar>
            <Fragment>
                <Typography variant="h4" className={classes.mainTitle} id="react-admin-title" />
            </Fragment>
            <ListButton
                basePath={"/services"}
                label={translate(`esop.recipients.actions.backToList`)} />
            {data && <CreateButton basePath={"/services"} record={{ id: data.id }} />}
        </TopToolbar>
    )
};

CurrentActions.propTypes = {
    data: PropTypes.any
};

/**
 * This component allows to create new Beneficiaries
 *
 * @component
 * @param {Object} props - Properties to be applied to the main component of the form
 * @returns {Component} - Return a form to create a Beneficiaries
 */

const RecipientsCreate = props => {
    const classes = useLayout();
    const translate = useTranslate();
    const { serviceId } = parse(props.location.search);

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
                basePath={`/services/${serviceId}/show/recipients`}
                title={translate("esop.recipients.create.title")}
            />}
            onSuccess={successHandler("resources.recipients.created", props)}>
            <RecordRef>
                <RecordCard className={classes.mainCard}>
                    <SimpleForm
                        toolbar={<SaveWithConfirmButton
                            redirect="show"
                            lastName={lastname}
                            firstName={firstname}
                            resource="recipients"
                            {...props} />}
                        defaultValue={{ serviceId }}>
                        <TextInput source="lastname"
                            label={translate("resources.recipients.fields.lastname")}
                            onChange={handleChangeLastname}
                            inputProps={{
                                maxLength: 100
                            }}
                            validate={required()} />
                        <TextInput
                            source="firstname"
                            label={translate("resources.recipients.fields.firstname")}
                            onChange={handleChangeFirstname}
                            inputProps={{
                                maxLength: 100
                            }} />
                        <TextInput
                            type="email"
                            source="email"
                            validate={[
                                required(),
                                email()
                            ]}
                            inputProps={{
                                maxLength: 100
                            }} />
                    </SimpleForm>
                </RecordCard>
            </RecordRef>
        </Create>
    )
}

RecipientsCreate.propTypes = {
    location: PropTypes.object
};


export default RecipientsCreate;