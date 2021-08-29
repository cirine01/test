import PropTypes from "prop-types";
import React from "react";

/**
 * Component <div> passing props to children
 *
 * @component
 * @param {Object} props - Properties
 * @returns {Component} - <div>
 */
const DatagridContainer = props => {
    const { children, ...rest } = props;

    return (props.total || !props.loaded) ? React.Children.map(
        children,
        field => (field
        ? React.cloneElement(field, rest)
        : "")
    ) : React.cloneElement(props.empty, rest)
};

DatagridContainer.propTypes = {
    children: PropTypes.node,
    empty: PropTypes.node.isRequired
};

export default DatagridContainer;