import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Edit, required, TextInput, SimpleForm, TextField, FunctionField,
    SelectInput, useTranslate } from "react-admin";
import { useLayout } from "../custom/GridView";
import RecordCard from "../custom/RecordCard";
import RecordRef from "../custom/RecordRef";
import { CurrentEditActions, CurrentEditToolbar } from "../custom/ToolbarActions";
import useCountries from "../../hooks/types/countries";
import { successHandler } from "../../helpers/handlers";
import { isDisplayed } from "../../helpers/permissions";

const useStyles = makeStyles({
    inline: {
        display: "flex",
        alignItems: "center"
    },
    widthFix: {
        width: "auto"
    },
    inputWidth: {
        "& >*": {
            maxWidth: "256px"
        }
    },
    col: {
        display: "flex",
        flexDirection: "column",
        flex: 1
    },
    row: {
        display: "flex",
        flexDirection: "row",
    },
    typography: {
        fontSize: "0.8rem",
        color: "rgba(0, 0, 0, 0.54)",
        paddingBottom: "6px"
    },
    textfield: {
        marginBottom: "15px"
    }
});

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
            {translate(`resources.persons.nameOne`)} {record ? record.name : ""}
        </span>
    )
};

CurrentTitle.propTypes = {
    record: PropTypes.object
};

/**
 * This component allows to add permissions on the show button
 *
 * @component
 * @param {Object} props - Properties to be applied to the main component of the form
 * @returns {Component} - Return a show button on the edit Top Tool Bar
 */
const PersonsEditActions = props => {
    const { data } = props;

    return data ? <CurrentEditActions {...props}
                editable={isDisplayed(data.permissions, "getPersonById")} />
                : null
}

PersonsEditActions.propTypes = {
    data: PropTypes.object
}

/**
 * This component allows to edit persons
 *
 * @component
 * @param {Object} props - Properties to be applied to the main component of the form
 * @returns {Component} - Return a form to edit an person
 */
const PersonsEdit = props => {
    const translate = useTranslate();
    const classes = {
        ...useLayout(),
        ...useStyles()
    };

    return (
        <Edit {...props}
            actions={<PersonsEditActions />}
            component="div"
            title={<CurrentTitle />}
            undoable={false}
            onSuccess={successHandler("resources.persons.updated", props)}>
            <RecordRef>
                <RecordCard className={classes.mainCard}>
                    <Fragment>
                        <Typography variant="h6" className={classes.cardTitle}>
                            {translate("esop.contacts.show.title_features")}
                        </Typography>
                    </Fragment>
                    <SimpleForm
                        toolbar={<CurrentEditToolbar/>}>
                            <RecordRef className={[
                                classes.grid,
                                classes.widthFix,
                                classes.row
                            ].join(" ")}>
                                <RecordRef className={[
                                    classes.inputWidth,
                                    classes.col
                                ].join(" ")}>
                                    <TextInput source="name"
                                        validate={required()}
                                        inputProps={{
                                            maxLength: 100
                                    }} />
                                    <Typography variant="h6" className={classes.typography}>
                                        {translate("resources.persons.fields.id")}
                                    </Typography>
                                    <TextField source="id" className={classes.textfield} />
                                    <Typography variant="h6" className={classes.typography}>
                                        {translate("resources.persons.fields.profile")}
                                    </Typography>
                                    <FunctionField
                                        source="profile"
                                        render={record => translate(`resources.persons.types.${record.profile}`)}
                                        label={translate("resources.persons.fields.profile")}
                                    />
                                </RecordRef>
                                <RecordRef className={[
                                    classes.inputWidth,
                                    classes.col
                                ].join(" ")}>
                                    <TextInput source="addressStreet1"
                                        validate={required()}
                                        inputProps={{
                                            maxLength: 100
                                        }} />
                                    <TextInput source="addressStreet2"
                                        inputProps={{
                                            maxLength: 100
                                        }} />
                                    <TextInput source="addressStreet3"
                                        inputProps={{
                                            maxLength: 100
                                        }} />
                                    <TextInput source="addressZipCode"
                                        inputProps={{
                                            maxLength: 20
                                        }} />
                                    <TextInput source="addressCity"
                                        validate={required()}
                                        inputProps={{
                                            maxLength: 100
                                        }} />
                                    <SelectInput source="addressCountry"
                                        validate={required()} choices={useCountries()}/>
                                    <TextInput source="addressRegion"
                                        inputProps={{
                                            maxLength: 100
                                        }} />
                                </RecordRef>
                                <RecordRef className={[
                                    classes.inputWidth,
                                    classes.col
                                ].join(" ")}>
                                    <TextInput source="phone"
                                        inputProps={{
                                            maxLength: 20
                                        }}/>
                                    <TextInput source="email"
                                        inputProps={{
                                            maxLength: 100
                                        }} />
                                </RecordRef>
                        </RecordRef>
                    </SimpleForm>
                </RecordCard>
            </RecordRef>
        </Edit>
    )
};

export default PersonsEdit;