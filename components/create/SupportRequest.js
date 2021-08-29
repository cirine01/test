import React from "react";
import { Create, TextInput, useTranslate, SelectInput, required, SimpleForm } from "react-admin";
import useTypesSupports from "../../hooks/types/supports";
import { CurrentCreateActions } from "../custom/ToolbarActions";
import RecordRef from "../custom/RecordRef";
import { useLayout } from "../custom/GridView";
import RecordCard from "../custom/RecordCard";
import EntitySelect from "../custom/EntitySelect";
import { ServicesFilter } from "../list/Services";
import ServicesDialogViewList from "../list/ServicesDialogView";
import EquipmentsDialogViewList from "../list/EquipmentsDialogView";
import { EquipmentsFilter } from "../list/Equipments";
import { makeStyles } from "@material-ui/core/styles";
import { PostCreateToolbarSupport } from "../custom/DialogConfirmationButton";
import { parse } from "query-string";
import PropTypes from "prop-types";

const useStyles = makeStyles({
    description: {
        width: "100%",
        "& >*": {
            width: "180%",
        }
    }
});


/**
 * This component allows to create a Support Request
 *
 * @component
 * @param {Object} props - Properties to be applied to the main component of the form
 * @returns {Component} - Return a form to create a Request to the Support
 */
const SupportRequestCreate = props => {
    const translate = useTranslate();
    const classes = {
        ...useLayout(),
        ...useStyles()
    };
    const serviceId = parse(props.location.search);
    const deviceId = parse(props.location.search);

    return (
        <Create {...props}
            component="div"
            actions={ <CurrentCreateActions
                title={translate("esop.supportrequest.create.title")}
                listable={false}
            />}
        >
            <RecordCard className={classes.mainCard}>
                <SimpleForm
                    toolbar={<PostCreateToolbarSupport
                        serviceId={serviceId}
                        deviceId={deviceId}
                        redirect="show"
                        resource="supportrequests"
                        {...props} />}
                    className={classes.grid}>
                        <SelectInput
                            source="type"
                            choices={useTypesSupports()}
                            validate={required()} />
                        <EntitySelect
                            source="serviceId"
                            reference="services"
                            optionText="id"
                            defaultValue={serviceId.serviceId}
                            filters={<ServicesFilter />}
                            component={<ServicesDialogViewList />}
                            label={translate("resources.supports.fields.services")}
                        />
                        <EntitySelect
                            source="equipmentId"
                            reference="equipments"
                            optionText="id"
                            defaultValue={deviceId.deviceId}
                            filters={<EquipmentsFilter />}
                            component={<EquipmentsDialogViewList />}
                            label={translate("resources.supports.fields.equipments")}
                        />
                    <RecordRef >
                        <TextInput className={classes.description}
                            source="description"
                            validate={required()}
                            multiline
                            fullWidth
                            inputProps={{
                                maxLength: 1000
                            }}
                        />
                    </RecordRef>
                </SimpleForm>
            </RecordCard>
        </Create>
    )
}

SupportRequestCreate.propTypes = {
    location: PropTypes.object,
    search: PropTypes.string
}

export default SupportRequestCreate;