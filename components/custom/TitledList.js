import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { List } from "react-admin";
import { useLayout } from "./GridView";
import Typography from "@material-ui/core/Typography";

/**
 * A <List> component with a title above it
 *
 * @component
 * @param {Object} props - Properties
 * @returns {Component} - <List> with title
 */
const TitledList = props => {
    const classes = useLayout();

    return (
        <Fragment>
            <Fragment>
                <Typography variant="h4" className={classes.listTitle} id="react-admin-title" />
            </Fragment>
            <List {...props} />
        </Fragment>
    )
};

TitledList.propTypes = {
    props: PropTypes.object
};

export default TitledList;