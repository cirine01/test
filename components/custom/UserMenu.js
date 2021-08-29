import UserIcon from "@material-ui/icons/PermIdentity";
import React from "react";
import { MenuItemLink, UserMenu, useTranslate } from "react-admin";
import useClient from "../../hooks/client";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    test: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer"
    }
});

/**
 * User menu component
 *
 * @component
 * @param {Object} props - Properties
 * @returns {Component} - User menu
 */
const MyUserMenu = props => {
    const client = useClient();
    const classes = useStyles();
    const translate = useTranslate();

    return client
        ? <label className={classes.test}>
            <UserMenu {...props}>
                <MenuItemLink
                    to={`/contacts/${client.uuid}/show`}
                    primaryText={translate("resources.login.profile")}
                    leftIcon={<UserIcon />}
                />
            </UserMenu>
            {client
                ? <Typography >
                    {client.attributes.firstname
                        ? `${client.attributes.firstname} ${client.attributes.lastname}`
                        : `${client.attributes.lastname}`
                    }
                </Typography>
                : null
            }
            </label>
        : null;
};

export default MyUserMenu;