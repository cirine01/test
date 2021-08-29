import { Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import DefaultButton from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useTranslate } from "react-admin";
import authProvider from "../../providers/auth";

const useStyles = makeStyles({
    actionBar: {
        justifyContent: "space-between",
        padding: "15px 25px",
        backgroundColor: "rgba(0,0,0,0.05)",
    }
});

/**
 * Display Popin for 498/401 error
 *
 * @component
 * @returns {Component} - Popin component
 */
const UnexpectedDialog = () => {
    const classes = useStyles();
    const translate = useTranslate();
    const [
        open,
        setOpen
    ] = useState(false);

    window.setOpenTokenError = setOpen;

    const logout = () => authProvider.logout();

    return (
        <Dialog
            fullWidth={true}
            maxWidth="xs"
            open={open}
            onClose={logout}
            aria-label={translate("esop.error.token.title")}>
            <DialogTitle>{translate("esop.error.token.title")}</DialogTitle>
            <DialogContent>
                <Typography>
                    {translate("esop.error.token.content")}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.actionBar}>
                <DefaultButton variant="contained" color="primary" onClick={logout}>
                    <span>{translate("esop.dialog.ok")}</span>
                </DefaultButton>
            </DialogActions>
        </Dialog>
    );
}

UnexpectedDialog.propTypes = {
    title: PropTypes.string,
}

export default UnexpectedDialog;