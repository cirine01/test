import React, { useState } from "react";
import MuiPhoneNumber from "material-ui-phone-number";
import { useInput } from "react-admin";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
    countriesList: {
        maxHeight: "400px"
    },
    errTooltip: {
        color: theme.palette.error.main
    }
}));

/**
 * Component to input a phone number
 *
 * @component
 * @param {Object} props - Properties
 * @returns {Component} - Phone input
 */
const PhoneInput = props => {
    const classes = useStyles();
    const [
        formatError,
        // SetFormatError
    ] = useState(false);
    const {
        input: {
            name,
            onChange
        },
        meta: {
            touched,
            error
        },
        isRequired
    } = useInput(props);

    /* eslint-disable */
    const { basePath, ...rest } = props;
    /* eslint-enable */

    const input = <MuiPhoneNumber
        inputClass={props.className}
        name={name}
        label={props.label}
        onChange={onChange}
        error={Boolean(touched && error) || formatError}
        helperText={touched && error}
        required={isRequired}
        dropdownClass={classes.countriesList}
        {...rest}
    />

    return (formatError)
        ? <Tooltip title="Wrong format for phone number" arrow className={classes.errTooltip}>
            {input}
        </Tooltip>
        : input;
};

PhoneInput.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string
};

export default PhoneInput;