import { Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import DefaultButton from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Button, useTranslate } from "react-admin";
import EntitySelectList from "./EntitySelectList";
import EntitiesSelectList from "./EntitiesSelectList";
/* eslint max-lines: off */

const useStyles = makeStyles({
    actionBar: {
        justifyContent: "space-between",
        padding: "15px 25px",
        backgroundColor: "rgba(0,0,0,0.05)",
    }
});

/**
 * Display Popin to select an entity
 *
 * @component
 * @param {Object} props - Component properties
 * @returns {Component} - Popin component
 */
const EntityDialog = props => {
    /* eslint-disable */
    const { onChoose, label, title, button, max, open, value, disabled, dialogActions } = props;

    const classes = useStyles();
    const translate = useTranslate();
    const [ showDialog, setShowDialog ] = useState(open || false);
    const [ selectedEntity, setSelectedEntity ] = useState(value || "");
    /* eslint-enable */

    const handleClick = () => setShowDialog(true);
    const handleCloseClick = () => {
        setSelectedEntity("");
        setShowDialog(false);
    }
    const handleSaveClick = () => {
        if (onChoose) {
            onChoose(selectedEntity);
        }
        setSelectedEntity("");
        setShowDialog(false);
    }

    return (
        <Fragment>
            {button
                ? React.cloneElement(
                    button,
                    { onClick: handleClick }
                )
                : <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                    label={label}
                    disabled={disabled} />
            }

            <Dialog
                fullWidth={true}
                maxWidth="xl"
                open={showDialog}
                onClose={handleCloseClick}
                aria-label={title || ""}>
                {title && <DialogTitle>{title}</DialogTitle>}
                <DialogContent>
                    {max === 1
                        ? <EntitySelectList {...props}
                            onChange={val => setSelectedEntity(val)}
                            value={selectedEntity} />
                        : <EntitiesSelectList {...props}
                            onChange={val => setSelectedEntity(val)}
                            values={selectedEntity} />
                    }
                </DialogContent>
                <DialogActions className={classes.actionBar}>
                    <DefaultButton variant="contained" onClick={handleCloseClick}>
                        <span>{translate("esop.dialog.cancel")}</span>
                    </DefaultButton>
                    {dialogActions}
                    {(selectedEntity === "" || selectedEntity.length === 0)
                    ? <DefaultButton variant="contained" color="primary"
                        disabled
                        onClick={handleSaveClick}>
                        <span>{translate("esop.dialog.select")}</span>
                    </DefaultButton>
                    : <DefaultButton variant="contained" color="primary"
                        onClick={handleSaveClick}>
                        <span>{translate("esop.dialog.select")}</span>
                    </DefaultButton>
                    }
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}

EntityDialog.propTypes = {
    label: PropTypes.string.isRequired,
    field: PropTypes.string,
    title: PropTypes.string,
    translate: PropTypes.any,
    classes: PropTypes.any,
    onChoose: PropTypes.func,
    target: PropTypes.string,
    component: PropTypes.node,
    filter: PropTypes.object,
    filters: PropTypes.node,
    route: PropTypes.string,
    reference: PropTypes.string,
    open: PropTypes.bool,
    disabled: PropTypes.any,
    dialogActions: PropTypes.node
}

EntityDialog.defaultProps = {
    label: "",
}

export default EntityDialog;