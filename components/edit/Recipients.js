import React, { Fragment, useState } from "react";
import { Edit, TextInput, required, email, SimpleForm,
    useTranslate, useRefresh, useNotify, Labeled,
    useRedirect, ListButton, TopToolbar, DeleteWithConfirmButton, SaveButton, Toolbar } from "react-admin";
import { useLayout } from "../custom/GridView";
import RecordCard from "../custom/RecordCard";
import RecordRef from "../custom/RecordRef";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const CurrentActions = props => {
    const translate = useTranslate();
    const classes = useLayout();
    const { resource, data } = props;

    return (data
        ? <TopToolbar >
            <Fragment>
                <Typography variant="h4" className={classes.mainTitle} id="react-admin-title" />
            </Fragment>
            <ListButton basePath={`/services/${data.serviceId}/show/recipients`}
                label={translate(`esop.${resource}.actions.backToList`)} />
        </TopToolbar>
        : null
    )
};

CurrentActions.propTypes = {
    resource: PropTypes.string,
    data: PropTypes.object
};


/**
 * This component displays the current Toolbar fot the Edit
 *
 * @component
 * @returns {Component} - Return the toolbar
 */
const useStyles = makeStyles({
    inline: {
        display: "flex",
        justifyContent: "space-between"
    }
});

const EditToolbar = props => {
    const classes = useStyles();
    const translate = useTranslate();
    const { record, lastName, firstName } = props;
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    let test = "";

    if (firstName.value === "" || record.firstname === null) {
        test = translate("resources.deleteConfirmation.contentRecipients",
            { lastname: lastName.value || record.lastname,
            firstname: " " || firstName.value })
    } else {
        test = translate("resources.deleteConfirmation.contentRecipients",
            { lastname: lastName.value || record.lastname,
            firstname: firstName.value || record.firstname })
    }

    const onSuccess = () => {
        if (firstName.value === "" || record.firstname === null) {
            notify(`resources.recipients.updated`, "info",
                {
                    lastname: lastName.value || record.lastname,
                    firstname: " "
                }
            )
        } else {
            notify(`resources.recipients.updated`, "info",
                {
                    lastname: lastName.value || record.lastname,
                    firstname: firstName.value || record.firstname
                }
            )
        }
        redirect(`/services/${record.serviceId}/show/recipients`);
        refresh();

    };

    return (record
        ? <Toolbar {...props} className={classes.inline} >
            <SaveButton onSuccess={onSuccess}/>
            <DeleteWithConfirmButton
                redirect={`/services/${record.serviceId}/show/recipients`}
                undoable={false}
                confirmTitle={translate(`resources.deleteConfirmation.title`)}
                confirmContent={test}
            />
        </Toolbar>
        : null
    )
};

EditToolbar.propTypes = {
    record: PropTypes.object,
    lastName: PropTypes.any,
    firstName: PropTypes.any
}

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
            {translate("resources.recipients.nameOne")} {record.firstname === null
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
 * This component allows to edit beneficiaries
 *
 * @component
 * @param {Object} props - Properties to be applied to the main component of the form
 * @returns {Component} - Return a form to edit an beneficiary
 */
const RecipientsEdit = props => {
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
        <Edit
            actions={<CurrentActions />}
            component="div"
            title={<CurrentTitle />}
            undoable={false} {...props}>
                <RecordRef>
                    <RecordCard className={classes.mainCard}>
                        <SimpleForm toolbar={<EditToolbar
                            lastName={lastname}
                            firstName={firstname}/>} >
                            <Labeled label={translate("resources.recipients.fields.id")}>
                                <Fragment>
                                    <Typography>{props.id}</Typography>
                                </Fragment>
                            </Labeled>
                            <TextInput
                                source="lastname"
                                onChange={handleChangeLastname}
                                validate={required()}
                                inputProps={{
                                    maxLength: 100
                                }} />
                            <TextInput
                                source="firstname"
                                onChange={handleChangeFirstname}
                                inputProps={{
                                    maxLength: 100
                                }} />
                            <TextInput
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
        </Edit>
    )
}

RecipientsEdit.propTypes = {
    id: PropTypes.string,
};

export default RecipientsEdit;