import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { AppBar, Layout, useTranslate } from "react-admin";
import AppMenu from "./AppMenu";
import EsopNotification from "./EsopNotification";
import MyUserMenu from "./custom/UserMenu";
import Logout from "./custom/Logout";
import UnexpectedDialog from "./custom/UnexpectedDialog";
import logo from "../assets/logo.png";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles({
    title: {
        flex: 1,
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
    },
    spacer: {
        flex: 1,
    },
    main: {
        "& main": {
            position: "relative",
            zIndex: 1
        }
    },
    appBar: {
        backgroundColor: "#0073a9",
        height: "48px"
    },
    logo: {
        maxWidth: "40px",
        marginLeft: -35
    }
});

/**
 * Override default layout to replace the app bar
 *
 * @component
 * @param {Object} props Properties to be applied on the AppBar
 *
 * @returns {Component} Return a custom App bar
 */
const EsopAppBar = props => {
    const classes = useStyles();
    const translate = useTranslate();

    return (<AppBar {...props}
                userMenu={<MyUserMenu/>}
                logout={<Logout/>}
                className={classes.appBar}>
            <Toolbar>
                <img src={logo} alt="logo" className={classes.logo} />
            </Toolbar>
            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}>
                {translate("esop.title")}
            </Typography>
            <UnexpectedDialog />
            <span className={classes.spacer} />
    </AppBar>)
}

/**
 * Override default layout to replace the menu
 *
 * @component
 * @param {Object} props Properties to be applied on the layout
 * @param {AppMenu} AppMenu Custom menu to replace the default one
 * @param {AppBar} AppBar Custom app bar to replace the default one
 *
 * @returns {Component} Return a custom layout with the app menu
 */
const AppLayout = props => {
    const classes = useStyles();

    return (
        <Layout {...props}
            notification={EsopNotification}
            menu={AppMenu}
            appBar={EsopAppBar}
            className={classes.main} />
    )
};

export default AppLayout;