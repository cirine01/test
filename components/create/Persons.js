import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { Create, required, SelectInput, SimpleForm, TextInput, useTranslate, email } from "react-admin";
import { useLayout } from "../custom/GridView";
import RecordCard from "../custom/RecordCard";
import RecordRef from "../custom/RecordRef";
import { CurrentCreateActions } from "../custom/ToolbarActions";
import { PostCreateToolbarPersons } from "../custom/DialogConfirmationButton";
import useCountries from "../../hooks/types/countries";
import useTypesProfiles from "../../hooks/types/profiles";

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
    }
});

/**
 * This component allows to create persons
 *
 * @component
 * @param {Object} props - Properties to be applied to the main component of the form
 * @returns {Component} - Return a form to create a person
 */
const PersonsCreate = props => {
    const translate = useTranslate();
    const classes = {
        ...useLayout(),
        ...useStyles()
    };
    const [
        name,
        setName
    ] = useState("");

    const [
        profile,
        setProfile
    ] = useState("")

    const handleChangeName = event => {
        setName({ value: event.target.value })
    }
    const handleChangeProfile = event => {
        setProfile({ value: event.target.value })
    }

    return (
        <Create {...props}
            component="div"
            actions={<CurrentCreateActions
                title={translate("esop.persons.create.title")}
                listable={true}
            />}
            >
            <RecordRef>
                <RecordCard className={classes.mainCard}>
                    <SimpleForm
                        toolbar= {<PostCreateToolbarPersons
                        resource="/persons"
                        name={name}
                        profile={profile}
                        redirect="show"
                        {...props} /> }>
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
                                    onChange={handleChangeName}
                                    validate={required()}
                                    inputProps={{
                                        maxLength: 100
                                    }} />
                                <SelectInput
                                    label={translate("resources.persons.fields.profile")}
                                    source="profile"
                                    onChange={handleChangeProfile}
                                    choices={useTypesProfiles("types/profiles/organizationCreation")}
                                    validate={required()} />
                            </RecordRef>
                            <RecordRef className={[
                                classes.inputWidth,
                                classes.col
                            ].join(" ")}>
                                <TextInput source="addressStreet1" validate={required()}
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
                                    validate={required()}
                                    choices={useCountries()} />
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
                                    }} />
                                <TextInput source="email"
                                    validate={email()}
                                    inputProps={{
                                        maxLength: 100
                                    }} />
                            </RecordRef>
                        </RecordRef>
                    </SimpleForm>
                </RecordCard>
            </RecordRef>
        </Create>
    )
};

export default PersonsCreate;