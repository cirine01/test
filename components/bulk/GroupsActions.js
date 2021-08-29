import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button, useTranslate, useDataProvider, useNotify, useRefresh, Confirm } from "react-admin";
import EntityDialog from "../custom/EntityDialog";
import { mapToType } from "../../helpers/entities";
import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";

const useButtons = makeStyles(
    theme => ({
        deleteButton: {
            color: theme.palette.error.main,
            "&:hover": {
                /* eslint-disable */
                backgroundColor: fade(theme.palette.error.main, 0.12),
                /* eslint-enable */
                "@media (hover: none)": {
                    backgroundColor: "transparent",
                },
            },
        },
    })
);


export const AddMultipleToGroupButton = props => {
    const translate = useTranslate();
    const notify = useNotify();
    const refresh = useRefresh();
    const dataProvider = useDataProvider();
    const { label, resource, reference, filters, component, selectedIds } = props;

    const handleGroupSelected = id => {
        dataProvider.update("groups/entities/add", {
            id,
            data: {
                id,
                type: "groups",
                entityType: mapToType(resource),
                entityId: selectedIds
            }
        }).
        then(() => {
            refresh();
            notify(`resources.groups.added.${resource}`, "info", {
                smart_count: selectedIds.length
            });
        }).
        catch(err => {
            if (err.body.nbErrors) {
                if (err.body.nbSuccess === 0) {
                    notify("resources.issues.multipleActionsError", "warning", {
                        nbSuccess: err.body.nbSuccess,
                        nbErrors: err.body.nbErrors,
                        entityType: translate(`resources.issues.types.${err.body.entityType}`),
                        entityIds: err.body.entityIds
                    })
                } else {
                    notify("resources.issues.aorError", "warning", {
                        nbSuccess: err.body.nbSuccess,
                        nbErrors: err.body.nbErrors,
                        entityType: translate(`resources.issues.types.${err.body.entityType}`),
                        entityIds: err.body.entityIds
                    })
                }
            } else {
                notify(err.message, "warning");
            }
        })
    }

    const title = translate(`esop.groups.adding`, {
        resource: translate(`resources.${resource}.name`).toLowerCase()
    });

    return (
        <EntityDialog {...{
                reference,
                filters,
                component,
                label,
                title,
                max: 1
            }} onChoose={handleGroupSelected}
            button={ <Button label={label} /> }
        />
    );
}

AddMultipleToGroupButton.propTypes = {
    basePath: PropTypes.string,
    resource: PropTypes.string,
    selectedIds: PropTypes.array,
    reference: PropTypes.string,
    label: PropTypes.string,
    component: PropTypes.node,
    filters: PropTypes.node
};


export const AddSingleToGroupButton = props => {
    const translate = useTranslate();
    const notify = useNotify();
    const refresh = useRefresh();
    const dataProvider = useDataProvider();

    const { label, resource, reference, filters, component, route, record, filter } = props;

    const handleGroupSelected = id => {
        dataProvider.update("groups/entities/add", {
            id,
            data: {
                id,
                type: "groups",
                entityType: mapToType(resource),
                entityId: [record.id]
            }
        }).
        then(() => {
            refresh();
            notify(`resources.groups.added.${resource}`, "info", {
                smart_count: 1
            });
        }).
        catch(err => {
            notify(err.message, "warning");
        })
    }

    const title = translate(`esop.groups.adding`, {
        resource
    });

    return (
        <EntityDialog {...{
                reference,
                filters,
                component,
                label,
                title,
                route: route || `${reference}`,
                filter: {
                    entityType: mapToType(resource),
                    ...filter
                },
                max: 1
            }} onChoose={handleGroupSelected}
            button={ <Button label={label} /> }
        />
    );
}

AddSingleToGroupButton.propTypes = {
    basePath: PropTypes.string,
    resource: PropTypes.string,
    record: PropTypes.object,
    reference: PropTypes.string,
    label: PropTypes.string,
    component: PropTypes.node,
    filters: PropTypes.node,
    filter: PropTypes.object,
    route: PropTypes.string
};


export const RemoveMultipleFromGroupButton = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const dataProvider = useDataProvider();
    const classes = useButtons();
    const translate = useTranslate();

    const { label, reference, selectedIds, record } = props;

    const [
        open,
        setOpen
    ] = useState(false);

    const handleDialogClick = () => {
        setOpen(true);
    };

    const handleDialogClose = evt => {
        setOpen(false);
        evt.stopPropagation();
    };

    const handleDeletion = () => {
        dataProvider.update("groups/entities/remove", {
            id: record.id,
            data: {
                id: record.id,
                type: "groups",
                entityType: mapToType(reference),
                entityId: selectedIds
            }
        }).
        then(() => {
            refresh();
            notify(`resources.groups.removed.${reference}`, "info", {
                smart_count: selectedIds.length
            });
        }).
        catch(err => {
            notify(err.message, "warning");
        })
    }

    return (
        <>
            <Button label={label}
                className={classes.deleteButton}
                onClick={handleDialogClick}
            />
            <Confirm
                isOpen={open}
                title={translate(`resources.dialogConfirmation.title`)}
                content={translate(`resources.deleteConfirmation.content`,
                { type: translate(`resources.${reference}.name`).toLowerCase() })}
                onConfirm={handleDeletion}
                confirm={translate(`resources.dialogConfirmation.confirm`)}
                onClose={handleDialogClose}
                cancel={translate(`resources.dialogConfirmation.cancel`)}
            />
        </>
    );
}

RemoveMultipleFromGroupButton.propTypes = {
    reference: PropTypes.string,
    selectedIds: PropTypes.array,
    label: PropTypes.string,
    record: PropTypes.object
};
