import React from "react";
import { Create, required, SimpleForm, useTranslate } from "react-admin";
import EntitySelect from "../custom/EntitySelect";
import { useLayout } from "../custom/GridView";
import RecordCard from "../custom/RecordCard";
import RecordRef from "../custom/RecordRef";
import { CurrentCreateActions } from "../custom/ToolbarActions";
import { PersonsFilter } from "../list/Persons";
import PersonsDialogViewList from "../list/PersonsDialogView";
import { successHandler } from "../../helpers/handlers";
import { PostCreateToolbarContracts } from "../custom/DialogConfirmationButton";

/**
 * This component allows to create new groups
 *
 * @component
 * @param {Object} props - Properties to be applied to the main component of the form
 * @returns {Component} - Return a form to create a group
 */
const GroupsCreate = props => {
    const translate = useTranslate()
    const classes = useLayout()

    return (
        <Create {...props}
            component="div"
            actions={<CurrentCreateActions
                title={translate("esop.groups.create.title")}
                listable={true}
            />}
            onSuccess={successHandler("resources.groups.created", props)}>
            <RecordRef>
                <RecordCard className={classes.mainCard}>
                    <SimpleForm
                        toolbar={<PostCreateToolbarContracts
                            redirect="show"
                            resource="groups"
                            {...props} />}
                        className={classes.grid}>
                        <EntitySelect
                            source="sharedBy"
                            reference="persons"
                            filters={<PersonsFilter />}
                            component={<PersonsDialogViewList />}
                            label={translate("resources.groups.fields.sharedBy")}
                            validate={required()}
                        />
                        <EntitySelect
                            source="sharedWith"
                            reference="persons"
                            filters={<PersonsFilter />}
                            component={<PersonsDialogViewList />}
                            label={translate("resources.groups.fields.sharedWith")}
                            validate={required()}
                        />
                    </SimpleForm>
                </RecordCard>
            </RecordRef>
        </Create>
    );
};

export default GroupsCreate;