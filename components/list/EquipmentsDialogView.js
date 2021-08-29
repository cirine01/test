import { Checkbox, Radio } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Datagrid, FunctionField, ReferenceField, TextField, useTranslate, Button } from "react-admin";
import { AllocationField } from "../custom/AllocationFields";
import StatusField from "../custom/StatusField";
import TZDateField from "../custom/TZDateField";
import { isDisplayed } from "../../helpers/permissions";
import ControlledRecordRef from "../custom/ControlledRecordRef";
import RecordRef from "../custom/RecordRef";
import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";

const useButtons = makeStyles(
    theme => ({
        deleteButton: {
            color: theme.palette.error.main,
            "&:hover": {
                /* eslint-disable */
                backgroundColor: fade(theme.palette.error.main, 0.12),
                /* eslint-enable */
                "@media (hover: none)": {
                    backgroundColor: "transparent",
                },
            },
        },
    })
);

// Delete button

const RemoveFromSelectionButton = props => {
    const classes = useButtons();
    const translate = useTranslate();
    const { record, onClick } = props;

    return <Button label={translate(`esop.contracts.delete`)}
        className={classes.deleteButton}
        onClick={() => onClick(record.id)}
    />;
}

RemoveFromSelectionButton.propTypes = {
    record: PropTypes.object,
    onClick: PropTypes.any
};

/**
 * This component allows to list equipments
 *
 * @component
 * @param {Object} props - Properties to be applied to the main component of the list
 * @returns {Component} - Return a datagrid to visualize all the equipments
 */
const EquipmentsDialogViewList = props => {
    const translate = useTranslate();
    const { selected, selectable = true, children, permissions, onSelectCount, onDelete,
        ...datagridProps } = props;
    const counterEquipment = datagridProps.selectedIds.length;

    useEffect(() => {
        if (onSelectCount) {
            onSelectCount(counterEquipment)
        }
    }, [counterEquipment])

    return (
        <Datagrid
            permissions={permissions}
            {...datagridProps}>
            {/* eslint no-nested-ternary: off */
                selectable
                ? Array.isArray(selected)
                    ? <FunctionField render={record => (
                        <Checkbox
                            color="primary"
                            checked={(selected.indexOf(record.id) !== -1)}
                            onChange={null}
                            value={record.id}
                        />
                    )}/>
                    : <FunctionField render={record => (
                        <Radio
                            color="primary"
                            checked={record.id === selected}
                            onChange={null}
                            value={record.id}
                        />
                    )}/>
                : ""
            }
            <FunctionField
                render={record => translate(`resources.equipments.types.${record.type}`)}
                label={translate("resources.equipments.fields.type")}/>
            <FunctionField label={translate("resources.equipments.fields.id")}
                source="id" render= {record => <ReferenceField
                    source="id" reference="equipments" record={record} basePath="/equipments"
                    link={isDisplayed(record.permissions, "getEquipmentById", record.id)
                        ? "show"
                        : false
                    }>
                        <TextField source="id" />
                    </ReferenceField>
                }
            />
            <StatusField source="contractualStatus"
                label={translate("resources.equipments.fields.contractualStatus")} />
            <TZDateField source="purchaseDate" addLabel={false}
                label={translate("resources.equipments.fields.purchaseDate")} />
            <TZDateField source="warrantyEndDate" addLabel={false}
                label={translate("resources.equipments.fields.warrantyEndDate")} />
            <FunctionField label={translate("resources.equipments.fields.contract")}
                    source="clsContractId" render={record => <ReferenceField
                        record={record} basePath="/equipments" resource="equipments"
                        source="clsContractId" reference="contracts" link={
                            isDisplayed(record.permissions, "getContractById")
                                ? "show"
                                : false
                    }>
                        <TextField source="erpIdentifier" />
                    </ReferenceField>
                }
            />
            <FunctionField label={translate("resources.equipments.fields.ownerId")}
                    source="ownerId" render={record => <ReferenceField
                        record={record} basePath="/equipments" resource="equipments"
                        source="ownerId" reference="persons" link={
                            isDisplayed(record.permissions, "getPersonById", record.ownerId)
                                ? "show"
                                : false
                    }>
                        <TextField source="name" />
                    </ReferenceField>
                }
            />
            <ControlledRecordRef label={translate("resources.services.fields.links")}
                auth={record => (record && isDisplayed(record.permissions, "getAllocationByEquipmentId"))} >
                <AllocationField target="equipmentId" label={translate("resources.equipments.fields.links")}/>
            </ControlledRecordRef>
            {children}
            {onDelete && <RecordRef>
                <RemoveFromSelectionButton onClick={onDelete}/>
                </RecordRef>
            }
        </Datagrid>
    )
};

EquipmentsDialogViewList.propTypes = {
    selected: PropTypes.any,
    selectable: PropTypes.bool,
    children: PropTypes.node,
    permissions: PropTypes.array,
    onSelectCount: PropTypes.func,
    onDelete: PropTypes.any
};

export default EquipmentsDialogViewList;