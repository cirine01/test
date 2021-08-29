import PropTypes from "prop-types";
import React from "react";
import Card from "@material-ui/core/Card";

/**
 * Component card passing props to children
 *
 * @component
 * @param {Object} props - Properties
 * @returns {Component} - Card
 */
const RecordCard = props => {
    const { className, children, ...rest } = props;

    return (
        <Card className={className} style={{ flex: "1 1 auto" }}>
            {React.Children.map(children, field => (field
                ? React.cloneElement(field, rest)
                : "")
            )}
        </Card>
    )
};

RecordCard.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default RecordCard;