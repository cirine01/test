import Typography from "@material-ui/core/Typography";
import { PriorityHigh } from "@material-ui/icons";
import PropTypes from "prop-types";
import React from "react";
import { useLayout } from "./GridView";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
    emptyText: {
        opacity: "0.5",
        padding: "4px"
    },
    clear: {
        clear: "both",
        "&:not(:first-child)": {
            display: "none"
        }
    }
});

/**
 * A custom empty field
 *
 * @component
 * @param {String} text - The text to display
 * @returns {Component} - A field saying that its empty
 */
const EmptyField = ({ text = "Empty" }) => {

    const classes = {
        ...useLayout(),
        ...useStyles()
    }

    return (
        <div className={classes.clear}>
            <Divider />
            <Typography className={[
                classes.center,
                classes.emptyText
            ].join(" ")}>
                <PriorityHigh style={{ marginRight: "10px" }}/>
                {text}
            </Typography>
            <Divider />
        </div>
    );
};

EmptyField.propTypes = {
    text: PropTypes.string
};

export default EmptyField;