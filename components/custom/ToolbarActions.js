import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { Fragment, cloneElement } from "react";
import { CreateButton, EditButton, ListButton, sanitizeListRestProps, SaveButton, ShowButton, Toolbar,
    TopToolbar, useListContext, useTranslate, Button, Link, DeleteWithConfirmButton, useNotify } from "react-admin";
import { useLayout } from "../custom/GridView";
import ExportButton from "./ExportButton";


/**
 * This component implements available list actions
 *
 * @component
 * @param {Object} props - Properties
 * @returns {Component} - Return the toolbar for the actions
 */
export const CurrentListActions = props => {
    const {
        className,
        filters,
        canFilter,
        canExport,
        canCreate,
        exporter,
        ...rest
    } = props;
    const {
        currentSort,
        resource,
        displayedFilters,
        filterValues,
        basePath,
        showFilter,
        total,
        permanentFilter
    } = useListContext();

    return (
        <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
            {(canFilter && filters) && cloneElement(filters, {
                resource,
                showFilter,
                displayedFilters,
                filterValues,
                context: "button",
            })}

            {canCreate && <CreateButton basePath={basePath} />}
            {canExport && <ExportButton
                disabled={total === 0}
                resource={resource}
                sort={currentSort}
                filter={{
                    ...filterValues,
                    ...permanentFilter
                }}
                maxResults="25"
                exporter={exporter}
            />}
        </TopToolbar>
    );
};

CurrentListActions.propTypes = {
    className: PropTypes.string,
    filters: PropTypes.object,
    maxResults: PropTypes.any,
    canFilter: PropTypes.bool,
    canExport: PropTypes.bool,
    canCreate: PropTypes.bool,
    exporter: PropTypes.any
};

CurrentListActions.defaultProps = {
    canFilter: true,
    canExport: true,
    canCreate: false
};

/**
 * This component implements available edit actions
 *
 * @component
 * @param {String} basePath - The basepath of the resource
 * @param {Object} data - Datas
 * @param {String} resource - The resource as a string
 * @param {Boolean} editable - is editable
 * @returns {Component} - Return the toolbar for the actions
 */
export const CurrentEditActions = ({ basePath, data, resource, editable }) => {
    const translate = useTranslate();
    const classes = useLayout();

    return (
        <TopToolbar>
            <Fragment>
                <Typography variant="h4" className={classes.mainTitle} id="react-admin-title" />
            </Fragment>
            <ListButton basePath={basePath} label={translate(`esop.${resource}.actions.backToList`)} />
            {editable && <ShowButton basePath={basePath} record={data} />}
        </TopToolbar>
    )
};

CurrentEditActions.propTypes = {
    basePath: PropTypes.any,
    data: PropTypes.any,
    resource: PropTypes.string,
    editable: PropTypes.bool
};

CurrentEditActions.defaultProps = {
    editable: false
};

/**
 * This component implements available show actions
 *
 * @component
 * @param {Object} props - Properties
 * @returns {Component} - Return the toolbar for the actions
 */
export const CurrentShowActions = props => {
    const { basePath, data, resource, editable,
        listable, purchase, deletable, supportService, supportDevice } = props;
    const translate = useTranslate();
    const classes = useLayout();
    const notify = useNotify();

    const handleClick = () => {
        notify("Group deleted")
    }

    return (
        <TopToolbar>
            <Fragment>
                <Typography variant="h4" className={classes.mainTitle} id="react-admin-title" />
            </Fragment>
            {listable &&
                <ListButton basePath={basePath} label={translate(`esop.${resource}.actions.backToList`)} />
            }
            {editable &&
                <EditButton basePath={basePath} record={data} />
            }
            {purchase &&
                <Link to="/purchaseforecasts/create" >
                    <Button label={translate(`esop.persons.show.purchaseForecast`)} />
                </Link>
            }
            {supportService &&
                <Link
                to={`/supportrequests/create?serviceId=${data.id}`}>
                    <Button label={translate(`esop.supportrequest.create.create`)} />
                </Link>
            }
            {supportDevice &&
                <Link
                to={`/supportrequests/create?deviceId=${data.id}`}>
                    <Button label={translate(`esop.supportrequest.create.create`)} />
                </Link>
            }
            {deletable &&
                <DeleteWithConfirmButton
                    undoable={false}
                    basePath={basePath}
                    record={data}
                    confirmTitle = {translate(`resources.deleteConfirmation.title`)}
                    confirmContent= {translate(`resources.deleteConfirmation.contentGroup`)}
                    resource={resource}
                    onSucess={handleClick}/>
            }
        </TopToolbar>
    )
};

CurrentShowActions.propTypes = {
    basePath: PropTypes.any,
    data: PropTypes.any,
    resource: PropTypes.string,
    editable: PropTypes.bool,
    listable: PropTypes.bool,
    purchase: PropTypes.bool,
    deletable: PropTypes.bool,
    supportService: PropTypes.bool,
    supportDevice: PropTypes.bool
};

CurrentShowActions.defaultProps = {
    editable: false,
    listable: false,
    purchase: false,
    supportService: false,
    supportDevice: false
};

/**
 * This component implements available create actions
 *
 * @component
 * @param {String} basePath - The basepath of the resource
 * @param {String} resource - The resource as a string
 * @param {String} title - The title
 * @returns {Component} - Return the toolbar for the actions
 */
export const CurrentCreateActions = ({ basePath, resource, title, listable }) => {
    const translate = useTranslate();
    const classes = useLayout();

    return (
        <TopToolbar>
            <Fragment>
                {
                    title
                    ? <Typography variant="h4" className={classes.mainTitle}>
                        {title}
                    </Typography>
                    : <Typography variant="h4" className={classes.mainTitle} id="react-admin-title" />
                }
            </Fragment>
            {listable && <ListButton basePath={basePath} label={translate(`esop.${resource}.actions.backToList`)} />}
        </TopToolbar>
    )
};

CurrentCreateActions.propTypes = {
    basePath: PropTypes.string,
    resource: PropTypes.string,
    title: PropTypes.string,
    listable: PropTypes.bool
};

CurrentCreateActions.defaultProps = {
    listable: true
};

/**
 * This component implements available toolbar actions for edit form
 *
 * @component
 * @param {Object} props - Properties
 * @returns {Component} - Return the toolbar for the actions
 */
export const CurrentEditToolbar = props => (
    <Toolbar {...props}>
        <SaveButton />
    </Toolbar>
);

CurrentEditToolbar.propTypes = {
    props: PropTypes.object
};