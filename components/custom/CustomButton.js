import * as React from "react";
import { Button } from "react-admin";
import PropTypes from "prop-types";

/**
 * This component is used for purchase Forecast to called cardEquiment and CardService
 * @component
 * @param {Object} props - Properties to be applied to the main component of the form
 * @returns {Component} - Return a form showing button
 *
 */

const CustomButton = ({ onClick, name }) => (
        <Button onClick={onClick} label={name} />
    )

CustomButton.propTypes = {
    onClick: PropTypes.any,
    name: PropTypes.string
};

export default CustomButton;
