import React, { useState } from "react";
import { useTranslate } from "react-admin";
import RecordCard from "./RecordCard";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import { Close } from "@material-ui/icons";
import PropTypes from "prop-types";
import useTypesServices from "../../hooks/types/services";

/**
 * This component allows to show a Card Service Component when you cliked on the button during a Purchase Forecast
 *
 * @component
 * @param {Object} props - Properties to be applied to the main component of the form
 * @returns {Component} - Return a form showing Card Service
 *
 */

const useStyles = makeStyles({
    border: {
        boxShadow: "unset",
        marginTop: 20,
        marginBottom: 20
    },
    textField: {
        marginTop: 20,
        width: "226px !important"
    },
    numberField: {
        marginTop: 20,
        width: "226px !important",
        backgroundColor: "rgba(0, 0, 0, 0.04)",
        borderRadius: "4px",
    }
});

/* eslint max-lines: off */
const useButtons = makeStyles(
    theme => ({
        deleteButton: {
            color: theme.palette.error.main,
            position: "absolute",
            marginLeft: "190px",
            marginTop: "-15px"
        }
    })
);

const CardService = props => {
    const translate = useTranslate();
    const typesServices = useTypesServices();
    const classes = {
        ...useButtons(),
        ...useStyles()
    };
    const { onDelete } = props;
    const [
        serviceCard,
        setServiceCard
    ] = useState({
        "type": "",
        "number": ""
    })

    const handleChange = event => {

        setServiceCard(prevState => {
            prevState[event.target.name] = event.target.value
            return prevState;
        })

        props.onChange(props.index, serviceCard)
    }

    return (
        <RecordCard className={classes.border}>
            <FormControl required>
                <InputLabel id="service-select-label">
                    {translate("resources.services.name")}
                </InputLabel>
                <Select
                    labelId="service-select-label"
                    name="type"
                    value={serviceCard.type}
                    onChange={handleChange}
                >
                    {
                        typesServices.map(serviceType => (
                            <MenuItem key={serviceType.id} value={serviceType.id}>
                                {serviceType.name}
                            </MenuItem>
                        ))
                    }
                </Select>
                {
                    (serviceCard.number < 0 || isNaN(serviceCard.number))
                    ? <TextField className={classes.numberField}
                        error
                        label={translate("resources.purchaseforecasts.serviceNumber")}
                        name="number"
                        value={serviceCard.number}
                        helperText={translate("resources.purchaseforecasts.incorrectEntry")}
                        onChange={handleChange}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    : <TextField className={classes.textField}
                        required
                        label={translate("resources.purchaseforecasts.serviceNumber")}
                        name="number"
                        value={serviceCard.number}
                        onChange={handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                }
                <IconButton aria-label="unlink"
                    onClick={() => onDelete(props.index)}
                    component="span"
                    className={classes.deleteButton}>
                    <Close />
                </IconButton>
            </FormControl>
        </RecordCard>
    )
};

CardService.propTypes = {
    onChange: PropTypes.any,
    index: PropTypes.string,
    typesServices: PropTypes.any,
    onDelete: PropTypes.any
}

export default CardService;