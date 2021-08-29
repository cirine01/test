import PropTypes from "prop-types";
import React from "react";

/**
 * Component <div> passing props to children
 *
 * @component
 * @param {Object} props - Properties
 * @returns {Component} - <div>
 */
const ControlledRecordRef = props => {
    const { className, style, children, auth, ...rest } = props;
    const { record } = rest;

    return (record && auth(record))
    ? <div className={className} style={style}>
            {React.Children.map(
                children,
                field => (field
                ? React.cloneElement(field, rest)
                : "")
            )}
        </div>
    : null
};

ControlledRecordRef.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
    auth: PropTypes.any,
};

export default ControlledRecordRef;