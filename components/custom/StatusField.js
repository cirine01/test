import React from "react";
import { useTranslate } from "react-admin";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import { CheckCircleOutline, NotInterested, Update, DeleteForever, Link,
    NewReleases, Speed, Store, LocalShipping, Cancel } from "@material-ui/icons";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";

// Common status
export const AVAILABLE = "Available";
export const PROCESSING = "Processing";
export const NEW = "New";

// Status for services
export const ACTIVE = "Active";
export const INACTIVE = "Inactive";
export const CLOSED = "Closed";

// Status for equipments
export const SHIPPING = "Shipping";
export const ALLOCATED = "Allocated";
export const DELETED = "Deleted";
export const PENDING = "Pending";
export const UNAVAILABLE = "Unavailable";

const useStyles = makeStyles({
    oneLine: {
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "center"
    },
    icon: {
        marginRight: "8px"
    }
});

export const ALL_STATUS = {
    [AVAILABLE]: {
        icon: Store,
        color: "#BAA286"
    },
    [PROCESSING]: {
        icon: Speed,
        color: "#5D9CEC"
    },
    [NEW]: {
        icon: NewReleases,
        color: "#FFCE54"
    },
    [ACTIVE]: {
        icon: CheckCircleOutline,
        color: "#2ECC71"
    },
    [INACTIVE]: {
        icon: Update,
        color: "#FC6E51"
    },
    [CLOSED]: {
        icon: NotInterested,
        color: "#D8334A"
    },
    [SHIPPING]: {
        icon: LocalShipping,
        color: "#4FC1E9"
    },
    [ALLOCATED]: {
        icon: Link,
        color: "#A0CECB"
    },
    [DELETED]: {
        icon: DeleteForever,
        color: "#D8334A"
    },
    [PENDING]: {
        icon: HourglassEmptyIcon,
        color: "#T8934H"
    },
    [UNAVAILABLE]: {
        icon: Cancel,
        color: " #FF5733 "
    },
}

/**
 * A custom field to display the status of a resource with an icon on its left
 *
 * @component
 * @param {String} source - Info name that the field is supposed to handle (status here)
 * @param {Boolean} short - Short mode
 * @param {Object} record - Instance of the resource
 * @returns {Component} - A text field with an icon on the left
 */
const StatusField = ({ source, short = false, record = {} }) => {
    const translate = useTranslate();
    const classes = useStyles();

    let icon = null;

    if (record[source] && ALL_STATUS[record[source]]) {
        const Icon = ALL_STATUS[record[source]]

        icon = <Icon.icon className={classes.icon} style={{ color: Icon.color || "inherit" }}/>
    }

    if (!record[source]) {
        return "";
    }

    return (
        <span className={classes.oneLine}>
            {short
                ? <Tooltip title={translate(`esop.status.${record[source].toLowerCase()}`)}>
                    {icon}
                </Tooltip>
                : icon
            }
            {!short && translate(`esop.status.${record[source].toLowerCase()}`)}
        </span>
    );
};

StatusField.propTypes = {
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
    short: PropTypes.bool
};

export default StatusField;