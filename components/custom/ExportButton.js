import React, { useCallback } from "react";
import { Button } from "react-admin";
import PropTypes from "prop-types";
import DownloadIcon from "@material-ui/icons/GetApp";
import {
    fetchRelatedRecords,
    useDataProvider,
    useNotify,
    useListContext,
    useResourceContext,
} from "ra-core";

const defaultIcon = <DownloadIcon />;

/* eslint no-unused-vars: "off" */
const sanitizeRestProps = ({
    basePath,
    filterValues,
    resource,
    ...rest
}) => rest;

const ExportButton = props => {
    const {
        maxResults = 1000,
        onClick,
        label = "ra.action.export",
        icon = defaultIcon,
        exporter: customExporter,
        sort,
        ...rest
    } = props;
    const {
        filter,
        filterValues,
        currentSort,
        exporter: exporterFromContext,
        total,
    } = useListContext(props);

    const resource = useResourceContext(props);
    const exporter = customExporter || exporterFromContext;
    const dataProvider = useDataProvider();
    const notify = useNotify();
    const handleClick = useCallback(
        event => {
            dataProvider.
                getList(resource, {
                    sort: currentSort || sort,
                    filter: filter
                        ? {
                            ...filterValues,
                            ...filter,
                            forExport: true,
                        } : {
                            ...filterValues,
                            forExport: true,
                        },
                    pagination: {
                        page: 1,
                        perPage: maxResults
                    },
                }).
                then(
                    ({ data }) => exporter &&
                        exporter(
                            data,
                            fetchRelatedRecords(dataProvider),
                            dataProvider,
                            resource
                        )
                ).
                catch(error => {
                    console.error(error);
                    notify("ra.notification.http_error", "warning");
                });
            if (typeof onClick === "function") {
                onClick(event);
            }
        },
        [
            currentSort,
            dataProvider,
            exporter,
            filter,
            filterValues,
            maxResults,
            notify,
            onClick,
            resource,
            sort,
        ]
    );

    return (
        <Button
            onClick={handleClick}
            label={label}
            disabled={total === 0}
            {...sanitizeRestProps(rest)}
        >
            {icon}
        </Button>
    );
};

ExportButton.propTypes = {
    basePath: PropTypes.string,
    exporter: PropTypes.func,
    filterValues: PropTypes.object,
    label: PropTypes.string,
    maxResults: PropTypes.number,
    resource: PropTypes.string,
    onClick: PropTypes.func,
    sort: PropTypes.exact({
        field: PropTypes.string,
        order: PropTypes.string,
    }),
    icon: PropTypes.element,
};

export default ExportButton;