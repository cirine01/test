import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import { FunctionField, ReferenceField, ReferenceManyField, TextField, useTranslate } from "react-admin";
import { isDisplayed } from "../../helpers/permissions";
import LinksField from "../custom/LinksField";
import LinksGrid from "../custom/LinksGrid";
import StatusField from "./StatusField";

const useStyles = makeStyles({
    oneLine: {
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "center"
    }
});

/**
 * Display references of the Allocation in a field
 *
 * @component
 * @param {Object} props - Association properties
 * @returns {Component} - Reference component
 */
export const AllocationField = props => {
    const { record, permissions } = props;
    const display = {
        equipment: (props.target !== "equipmentId"),
        service: (props.target !== "serviceId"),
        holder: (props.target !== "holderId"),
        mobile: (props.target !== "mobileId")
    };

    return (
        record
            ? <ReferenceManyField {...props} reference="allocations">
            <LinksField record={record}>
                    {display.equipment && <EquipmentField permissions={
                        permissions || record.permissions
                    } />}
                    {display.service && <ServiceField permissions={
                        permissions || record.permissions
                    } />}
                    {display.holder && <HolderField permissions={
                        permissions || record.permissions
                    } />}
                    {display.mobile && <MobileField permissions={
                        permissions || record.permissions
                    } />}
                </LinksField>
            </ReferenceManyField>
            : null
    );
}

AllocationField.propTypes = {
    basePath: PropTypes.string,
    children: PropTypes.node,
    record: PropTypes.object,
    resource: PropTypes.string,
    className: PropTypes.string,
    target: PropTypes.string.isRequired,
    permissions: PropTypes.array
};


/**
 * Display references of the Allocation in a grid
 *
 * @component
 * @param {Object} props - Association properties
 * @returns {Component} - Reference component
 */
export const AllocationGrid = props => {
    const { record, permissions } = props;
    const display = {
        equipment: (props.target !== "equipmentId"),
        service: (props.target !== "serviceId"),
        holder: (props.target !== "holderId"),
        mobile: (props.target !== "mobileId")
    };

    return (
        <ReferenceManyField {...props} reference="allocations" addLabel={false}>
            <LinksGrid record={record} target={props.target}>
                {display.equipment && <EquipmentField permissions={
                    permissions || record.permissions
                } />}
                {display.service && <ServiceField permissions={
                    permissions || record.permissions
                } />}
                {display.holder && <HolderField permissions={
                    permissions || record.permissions
                } />}
                {display.mobile && <MobileField permissions={
                    permissions || record.permissions
                } />}
            </LinksGrid>
        </ReferenceManyField>
    );
};

AllocationGrid.propTypes = {
    basePath: PropTypes.string,
    children: PropTypes.node,
    record: PropTypes.object,
    resource: PropTypes.string,
    className: PropTypes.string,
    target: PropTypes.string.isRequired,
    permissions: PropTypes.array
};

/**
 * Display Equipment reference of an association
 *
 * @component
 * @param {Object} props - Association properties
 * @returns {Component} - Reference component
 */
export const EquipmentField = ({ short, permissions, ...props }) => {
    const classes = useStyles();
    const translate = useTranslate();
    const { record } = props;

    return (
        (short)
        ? <ReferenceField {...props}
                link={(rec, ref) => (isDisplayed(
                record.permissions || permissions,
                "getEquipmentById",
                record.equipmentId
            ) ? `/${ref}/${rec.equipmentId}/show` : false)}>
            <TextField source="id" />
        </ReferenceField>
        : <ReferenceField {...props}
            link={(rec, ref) => (isDisplayed(
                record.permissions || permissions,
                "getEquipmentById",
                record.equipmentId
            ) ? `/${ref}/${rec.equipmentId}/show` : false)}>
            <FunctionField render={equipment => <div className={classes.oneLine}>
                <StatusField record={equipment} source="contractualStatus" short={true}/>
                <span>{translate(`resources.equipments.types.${equipment.type}`)}</span>
                &nbsp;
                <span>{equipment.id}</span>
            </div>}/>
        </ReferenceField>
    )
};

EquipmentField.propTypes = {
    permissions: PropTypes.array,
    short: PropTypes.bool,
    record: PropTypes.object
};

EquipmentField.defaultProps = {
    source: "equipmentId",
    reference: "equipments"
};

/**
 * Display Holder reference of an association
 *
 * @component
 * @param {Object} props - Association properties
 * @returns {Component} - Reference component
 */
export const HolderField = ({ short, permissions, ...props }) => {
    const { record } = props;

    return (
        (short)
        ? <ReferenceField {...props}
            link={(rec, ref) => (isDisplayed(
                record.permissions || permissions,
                "getHolderById",
                record.holderId
            ) ? `/${ref}/${rec.holderId}/show` : false)}>
            <FunctionField render={holder => <span>{holder.firstname} {holder.lastname}</span>}/>
        </ReferenceField>
        : <ReferenceField {...props}
            link={(rec, ref) => (isDisplayed(
                record.permissions || permissions,
                "getHolderById",
                record.holderId
            ) ? `/${ref}/${rec.holderId}/show` : false)}>
            <FunctionField render={holder => <div>
                <span>{holder.firstname} {holder.lastname}</span>
                &nbsp;
                (<ReferenceField record={holder} basePath={props.basePath}
                    source="organizationId" reference="persons" link={false}>
                    <TextField source="name" />
                </ReferenceField>)
            </div>}/>
        </ReferenceField>
    )
};

HolderField.propTypes = {
    basePath: PropTypes.string,
    permissions: PropTypes.array,
    short: PropTypes.bool,
    record: PropTypes.object
};

HolderField.defaultProps = {
    source: "holderId",
    reference: "holders"
};

/**
 * Display Mobile reference of an association
 *
 * @component
 * @param {Object} props - Association properties
 * @returns {Component} - Reference component
 */
export const MobileField = ({ short, permissions, ...props }) => {
    const { record } = props;

    return (
        (short || !short) && <ReferenceField {...props}
            link={(rec, ref) => (isDisplayed(
                record.permissions || permissions,
                "getMobileById",
                record.mobileId
            ) ? `/${ref}/${rec.mobileId}/show` : false)}>
            <FunctionField render={mobile => (`${mobile.name}${mobile.rc ? ` (${mobile.rc})` : ""}`)}/>
        </ReferenceField>
    )
};

MobileField.propTypes = {
    permissions: PropTypes.array,
    short: PropTypes.bool,
    record: PropTypes.object
};

MobileField.defaultProps = {
    source: "mobileId",
    reference: "mobiles"
};

/**
 * Display Service reference of an association
 *
 * @component
 * @param {Object} props - Association properties
 * @returns {Component} - Reference component
 */
export const ServiceField = ({ short, permissions, ...props }) => {
    const classes = useStyles();
    const translate = useTranslate();
    const { record } = props;

    return (
        (short)
        ? <ReferenceField {...props}
            link={(rec, ref) => (isDisplayed(
                record.permissions || permissions,
                "getServiceById",
                record.serviceId
            ) ? `/${ref}/${rec.serviceId}/show` : false)}>
            <TextField source="id" />
        </ReferenceField>
        : <ReferenceField {...props}
            link={(rec, ref) => (isDisplayed(
                record.permissions,
                "getServiceById",
                record.serviceId
            ) ? `/${ref}/${rec.serviceId}/show` : false)}>
            <FunctionField render={service => <div className={classes.oneLine}>
                <StatusField record={service} source="status" short={true}/>
                <span>{translate(`resources.services.types.${service.type}`)}</span>
                &nbsp;
                <span>{service.id}</span>
            </div>}/>
        </ReferenceField>
    )
};

ServiceField.propTypes = {
    permissions: PropTypes.array,
    short: PropTypes.bool,
    record: PropTypes.object
};

ServiceField.defaultProps = {
    source: "serviceId",
    reference: "services"
};