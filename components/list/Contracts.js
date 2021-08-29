import PropTypes from "prop-types";
import React, { cloneElement } from "react";
import ContentAdd from "@material-ui/icons/Add";
import { sanitizeListRestProps,
    TopToolbar, useListContext, Button } from "react-admin";
import { Link } from "react-router-dom";
import ExportButton from "../custom/ExportButton";

/**
 * This component implements available list actions
 *
 * @component
 * @param {Object} props - Properties
 * @returns {Component} - Return the toolbar for the actions
 */
export const ContractsListActions = props => {
    const {
        className,
        filters,
        permanentFilter,
        canCreate,
        exporter,
        ...rest
    } = props;
    const {
        currentSort,
        resource,
        displayedFilters,
        filterValues,
        showFilter,
        total,
    } = useListContext();

    return (
        <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
            {filters && cloneElement(filters, {
                resource,
                showFilter,
                displayedFilters,
                filterValues,
                context: "button",
            })}
            {canCreate && <Button
                component={Link}
                to={`contracts/create?from=${resource}`}
                label="ra.action.create"
            >
                <ContentAdd/>
            </Button>}
            <ExportButton
                disabled={total === 0}
                resource={resource}
                sort={"true"}
                currentSort={currentSort}
                filter={{
                    ...filterValues,
                    ...permanentFilter
                }}
                exporter={exporter}
                maxResults="25"
            />
        </TopToolbar>
    );
};

ContractsListActions.propTypes = {
    className: PropTypes.string,
    filters: PropTypes.object,
    permanentFilter: PropTypes.object,
    maxResults: PropTypes.any,
    canCreate: PropTypes.bool,
    exporter: PropTypes.any
};

ContractsListActions.defaultProps = {
    canCreate: false
}
