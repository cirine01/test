import PropTypes from "prop-types";
import { useListContext } from "ra-core";
import React, { Fragment } from "react";
import { BulkActionsToolbar } from "react-admin";

/**
 * Bulk action wrapper for datagrid
 *
 * @component
 * @param {Object} props - Component properties
 * @returns {Component} - BulkWrapper component
 */
const BulkWrapper = props => {
    /* eslint no-unused-vars: off */
    const { children, bulkActionButtons, className, ...rest } = props;
    const { selectedIds } = useListContext(props);

    return (
        <Fragment>
            {(selectedIds.length > 0) &&
                <BulkActionsToolbar {...rest} selectedIds={selectedIds}>
                    {bulkActionButtons}
                </BulkActionsToolbar>
            }
            {React.cloneElement(
                children,
                {
                    ...rest,
                    hasBulkActions: true,
                    isRowSelectable: () => true
                }
            )}
        </Fragment>
    );
}

BulkWrapper.propTypes = {
    children: PropTypes.node,
    className: PropTypes.any,
    bulkActionButtons: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.element
    ])
};

export default BulkWrapper;