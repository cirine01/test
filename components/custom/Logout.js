import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import ExitIcon from "@material-ui/icons/PowerSettingsNew";
import React, { forwardRef } from "react";
import { useLogout, useTranslate } from "react-admin";

const useStyles = makeStyles({
    logoutRow: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        color: "red"
    },
    logoutIcon: {
        color: "red",
        marginRight: "16px"
    }
});

/**
 * Logout button component
 *
 * @component
 * @param {Object} props - Properties
 * @param {String} ref - Reference
 * @returns {Component} - Logout button
 */
const Logout = forwardRef((props, ref) => {
    const logout = useLogout();
    const classes = useStyles();
    const translate = useTranslate();

    return (
        <MenuItem
            onClick={logout}
            ref={ref}>
            <span className={classes.logoutRow}>
                <ExitIcon className={classes.logoutIcon}/>
                {translate("resources.login.logout")}
            </span>
        </MenuItem>
    );
});

Logout.displayName = "Logout"

export default Logout;