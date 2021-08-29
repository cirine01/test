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
import useTypesEquipments from "../../hooks/types/equipments";

/**
 * This component allows to show a Card Equipment Component when you cliked on the button during a Purchase Forecast
 *
 * @component
 * @param {Object} props - Properties to be applied to the main component of the form
 * @returns {Component} - Return a form showing Equipment Service
 *
 */

const useStyles = makeStyles({
    border: {
        boxShadow: "unset",
        marginTop: 20,
        marginBottom: 20
    },
    textField: {
        marginTop: 20
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

const CardEquipment = props => {
    const translate = useTranslate();
    const typesEquipments = useTypesEquipments();
    const classes = {
        ...useButtons(),
        ...useStyles()
    };
    const { onDelete } = props;
    const [
        equipmentCard,
        setEquipmentCard
    ] = useState({
        "type": "",
        "number": ""
    })

/*eslint-disable */

    const handleChange = event => {

        setEquipmentCard(prevState => {
            prevState[event.target.name] = event.target.value
            return prevState;
        })

        props.onChange(props.index, equipmentCard)
    }

    return (
        <RecordCard className={classes.border}>
            <FormControl required>
                <InputLabel id="equipment-select-label">
                    {translate("resources.equipments.name")}
                </InputLabel>
                <Select
                    labelId="equipment-select-label"
                    name="type"
                    value={equipmentCard.type}
                    onChange={handleChange}
                >
                    {
                        typesEquipments.map(equipmentType => (
                            <MenuItem key={equipmentType.id} value={equipmentType.id}>
                                {equipmentType.name}
                            </MenuItem>
                        ))
                    }
                </Select>
                {
                    (equipmentCard.number < 0 || isNaN(equipmentCard.number))
                    ? <TextField className={classes.numberField}
                        error
                        label={translate("resources.purchaseforecasts.equipmentNumber")}
                        name="number"
                        value={equipmentCard.number}
                        helperText={translate("resources.purchaseforecasts.incorrectEntry")}
                        onChange={handleChange}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    : <TextField className={classes.textField}
                        required
                        label={translate("resources.purchaseforecasts.equipmentNumber")}
                        name="number"
                        value={equipmentCard.number}
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

CardEquipment.propTypes = {
    onChange: PropTypes.any,
    index: PropTypes.string,
    typesEquipments: PropTypes.any,
    onDelete: PropTypes.any
}

export default CardEquipment;