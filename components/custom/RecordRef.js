import PropTypes from "prop-types";
import React from "react";

/**
 * Component <div> passing props to children
 *
 * @component
 * @param {Object} props - Properties
 * @returns {Component} - <div>
 */
const RecordRef = props => {
    const { className, style, children, ...rest } = props;

    return (
        <div className={className} style={style}>
            {React.Children.map(
                children,
                field => (field
                ? React.cloneElement(field, rest)
                : "")
            )}
        </div>
    )
};

RecordRef.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
};

export default RecordRef;