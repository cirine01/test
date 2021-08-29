import PropTypes from "prop-types";
import React from "react";
import { Button, useRefresh, useNotify, useDataProvider, useTranslate, useUnselectAll } from "react-admin";

const AORButton = props => {
    const refresh = useRefresh();
    const notify = useNotify();
    const dataProvider = useDataProvider();
    const translate = useTranslate();
    const unselectAll = useUnselectAll();
    const { label, selectedIds, resource } = props;

    const handleClick = () => {
        dataProvider.create("operations/aor/bulk", {
            data: {
                "type": "AOR",
                equipmentIds: selectedIds
            }
        }).
        then(() => {
            notify("resources.operations.bulkAOR", "info", {
                smart_count: selectedIds.length
            });
            refresh();
            unselectAll(resource);
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
        });
    }

    return <Button label={label} onClick={handleClick}/>;
}

AORButton.propTypes = {
    label: PropTypes.string,
    selectedIds: PropTypes.array,
    resource: PropTypes.string
};

export default AORButton;