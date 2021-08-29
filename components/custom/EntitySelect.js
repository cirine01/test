import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import EntityDialog from "./EntityDialog";
import { ReferenceInput, ReferenceArrayInput, SelectInput, SelectArrayInput, useInput,
    useTranslate } from "react-admin";
import IconButton from "@material-ui/core/IconButton";
import { Close, FindReplace } from "@material-ui/icons";
import Tooltip from "@material-ui/core/Tooltip";
import { mapToType } from "../../helpers/entities";

/* eslint id-length: off */

const useStyles = makeStyles({
    row: {
        display: "inline-flex",
        flexDirection: "row",
        width: "256px",
        "& .MuiSelect-iconFilled": {
            display: "none"
        },
        "& .MuiFormControl-marginDense": {
            flex: 1
        }
    },
    icon: {
        display: "inline-flex",
        height: "48px",
        marginTop: "8px"
    }
});

/**
 * Display Popin to select an entity
 *
 * @component
 * @param {Object} props - Component properties
 * @returns {Component} - Popin component
 */
const EntitySelect = props => {
    const translate = useTranslate();
    const styles = useStyles();
    const {
        reference,
        filters,
        component,
        filter,
        route,
        resource,
        max,
        ...rest
    } = props;
    const { label, defaultValue } = rest;
    const {
        input: { onChange },
        meta: { touched, error },
        isRequired
    } = useInput(rest);

    let defVal = "";

    if (max === 1) {
        defVal = defaultValue ? defaultValue : "";
    } else {
        defVal = defaultValue ? defaultValue : [];
    }

    const [
        value,
        setValue
    ] = useState(defVal);

    useEffect(() => {
        onChange(value)
    }, [value]);

    let filterToQuery = null;

    switch (props.route) {
        case "persons/createMobile":
            filterToQuery = () => ({ createMobile: true });
        break;
        case "persons/createContact":
            filterToQuery = () => ({ createContact: true });
        break;
        case "persons/createContract":
            filterToQuery = () => ({ createContract: true });
        break;
        default:
            filterToQuery = () => ({});
    }

    const title = translate("esop.contracts.title", {
        reference: translate(`resources.${reference}.nameOne`).toLowerCase()
    });

    return (
        <span className={styles.row}>
            {(max === 1 || (
                max !== 1 && !value.length
            ))
                ? <ReferenceInput
                    reference={reference}
                    {...rest}
                    perPage={1}
                    value={value}
                    error={Boolean(touched && error)}
                    helperText={touched && error}
                    filterToQuery={filterToQuery}>
                    <SelectInput {...rest} disabled/>
                </ReferenceInput>
                : <ReferenceArrayInput
                    reference={reference}
                    {...rest}
                    perPage={1}
                    value={value}
                    error={Boolean(touched && error)}
                    helperText={touched && error}>
                    <SelectArrayInput {...rest} disabled/>
                </ReferenceArrayInput>
            }
            <span className={styles.icon}>
                {(value && !isRequired)
                    ? <Tooltip title={translate("ra.action.clear_input_value")}
                        aria-label={translate("ra.action.clear_input_value")}>
                        <IconButton aria-label="select" onClick={() => setValue("")}>
                            <Close />
                        </IconButton>
                    </Tooltip>
                    : <EntityDialog {...{
                        reference,
                        filters,
                        component,
                        filter: {
                            entityType: mapToType(resource),
                            ...filter
                        },
                        route: route || `${reference}`,
                        label,
                        title,
                        max
                    }} onChoose={setValue}
                    button={
                        <Tooltip title={translate("ra.action.select")}
                            aria-label={translate("ra.action.select")}>
                            <IconButton aria-label="select">
                                <FindReplace />
                            </IconButton>
                        </Tooltip>
                    }/>
                }
            </span>
        </span>
    );
}

EntitySelect.propTypes = {
    label: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    reference: PropTypes.string.isRequired,
    filters: PropTypes.node,
    component: PropTypes.node,
    optionText: PropTypes.string,
    max: PropTypes.any,
    filter: PropTypes.object,
    route: PropTypes.string,
    resource: PropTypes.string
};

EntitySelect.defaultProps = {
    max: 1
};

export default EntitySelect;