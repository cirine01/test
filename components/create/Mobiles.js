import React, { useState } from "react";
import { Create, required, SelectInput, SimpleForm, TextInput, useTranslate, FormDataConsumer } from "react-admin";
import useTypesMobiles from "../../hooks/types/mobiles";
import EntitySelect from "../custom/EntitySelect";
import { useLayout } from "../custom/GridView";
import RecordCard from "../custom/RecordCard";
import RecordRef from "../custom/RecordRef";
import { CurrentCreateActions } from "../custom/ToolbarActions";
import { PostCreateToolbarMobiles } from "../custom/DialogConfirmationButton";
import { PersonsFilter } from "../list/Persons";
import PersonsDialogViewList from "../list/PersonsDialogView";
import useClient from "../../hooks/client";

/**
 * This component allows to create new Mobile
 *
 * @component
 * @param {Object} props - Properties to be applied to the main component of the form
 * @returns {Component} - Return a form to create a mobile
 */
const MobilesCreate = props => {
    const classes = useLayout();
    const translate = useTranslate();
    const client = useClient();
    const defaultOwnerId = client
        ? client.attributes.organizationId
        : "";

    const [
        name,
        setName
    ] = useState("")

    const handleChangeName = event => {
        setName({ value: event.target.value })
    }

    return (
        <Create {...props}
            component="div"
            actions={<CurrentCreateActions
                title={translate("esop.mobiles.create.title")}
                listable={true}/>}
            >
            <RecordRef>
                <RecordCard className={classes.mainCard}>
                    <SimpleForm className={classes.grid}
                        toolbar= {<PostCreateToolbarMobiles
                        name={name}
                        redirect="show"
                        resource="mobiles"
                        {...props} /> }>
                        <SelectInput source="type" choices={useTypesMobiles()} validate={required()} />
                        <TextInput source="name"
                            onChange={handleChangeName}
                            validate={required()}
                            inputProps={{
                                maxLength: 100
                            }}/>
                        <TextInput source="ir"
                            inputProps={{
                                maxLength: 20
                            }}/>
                        <TextInput source="xr"
                            inputProps={{
                                maxLength: 20
                            }} />
                        <TextInput source="rc"
                            inputProps={{
                                maxLength: 20
                            }}/>
                        <TextInput source="flag"
                            inputProps={{
                                maxLength: 3
                            }} />
                        <FormDataConsumer>
                            {() => (client
                                ? <EntitySelect
                                    source="ownerId"
                                    reference="persons"
                                    route="persons/createMobile"
                                    filters={<PersonsFilter />}
                                    component={<PersonsDialogViewList />}
                                    label={translate("resources.mobiles.fields.ownerId")}
                                    defaultValue={defaultOwnerId}
                                    validate={required()}
                                />
                                : null)
                            }
                        </FormDataConsumer>
                    </SimpleForm>
                </RecordCard>
            </RecordRef>
        </Create>
    )
};

export default MobilesCreate;