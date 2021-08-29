import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { Close } from "@material-ui/icons";
import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Confirm, useDataProvider, useNotify, useRefresh, useTranslate } from "react-admin";
import { mapToType } from "../../helpers/entities";

/* eslint max-lines: off */

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

/**
 * A custom button to ungroup entity from group
 *
 * @component
 * @param {Object} props - Properties
 * @returns {Component} - A html element displaying the button
 */
const UngroupButton = props => {
    const { record, target, resource } = props;

    const classes = useButtons()
    const [
        open,
        setOpen
    ] = useState(false);

    const dataProvider = useDataProvider();
    const translate = useTranslate();
    const notify = useNotify();
    const refresh = useRefresh();

    const update = () => dataProvider.update("groups/entities/remove", {
        id: "",
        data: {
            id: record.id,
            entityType: mapToType(resource),
            entityId: [target.id]
        }
    }).
    then(() => {
        refresh();
        notify(`esop.groups.ungrouped`);
    }).
    catch(err => notify(`${err.message}`, "warning"))

    const handleConfirm = () => {
        update();
        setOpen(false);
    };
    const handleClick = () => setOpen(true);
    const handleDialogClose = () => setOpen(false);

    return <Fragment>
        <IconButton aria-label="ungroup" component="span" className={classes.deleteButton}
            onClick={handleClick}>
            <Close />
        </IconButton>
        {(record && target) &&
            <Confirm
                isOpen={open}
                loading={false}
                title={translate("esop.groups.ungroupTitle")}
                content={translate("esop.groups.ungroupContent")}
                onConfirm={handleConfirm}
                onClose={handleDialogClose}
            />
        }
    </Fragment>
};

UngroupButton.propTypes = {
    target: PropTypes.object,
    record: PropTypes.object,
    resource: PropTypes.string
};

export default UngroupButton;