import { makeStyles } from "@material-ui/core/styles";
import React, { createElement, useState, Fragment, useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { MenuItemLink, getResources, useTranslate, useSetLocale } from "react-admin";

import PropTypes from "prop-types";

import { useMediaQuery, Collapse } from "@material-ui/core";

import Apps from "@material-ui/icons/Apps";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import ShopIcon from "@material-ui/icons/Shop";
import useClient from "../hooks/client";
import { isDisplayed } from "../helpers/permissions";

const useStyles = makeStyles({
    menu: {
        "& .MuiCollapse-wrapperInner": {
            paddingLeft: "30px"
        }
    },
    colorTest: {
        color: "black"
    },
    colorOff: {
        color: "grey"
    }
});

/**
 * Implements the application's menu
 *
 * @component
 * @param {Object} props Pass required methods
 * @returns {Component} Return the component that will be passed to ESOP as its custom menu
 */
/* eslint-disable */
const AppMenu = props => {
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down("xs"));
    const open = useSelector(state => state.admin.ui.sidebarOpen);
    const resources = useSelector(getResources);
    const translate = useTranslate();
    const location = useLocation();
    const classes = useStyles();
    const client = useClient();
    const setLocale = useSetLocale();

    const [
        openAssets,
        setOpenAssets
    ] = useState(false);

    const [
        openCustomers,
        setOpenCustomers
    ] = useState(false);

    const [
        openContracts,
        setOpenContracts
    ] = useState(false);

    const getCollapsibleHeader = (name, isOpen, setIsOpen) => (
        <MenuItemLink
            to={location.pathname}
            primaryText={translate(`esop.menu.categories.${name}`)}
            leftIcon={isOpen ? <ArrowDropUp /> : <ArrowDropDown />}
            onClick={() => setIsOpen(!isOpen)}
            sidebarIsOpen={open}
            className={isOpen ? classes.colorTest : classes.colorOff}
            exact
        />
    );

    const getLinkFromResource = resource => (
            <MenuItemLink
                key={resource.name}
                to={`/${resource.name}`}
                primaryText={translate(`resources.${resource.name}.name`)}
                leftIcon={createElement(resource.icon)}
                onClick={props.onMenuClick}
                sidebarIsOpen={open}
                exact
                />
    );

    const getLinksFromResource = resourcesList => resources.
        filter(resource => resourcesList.includes(resource.name)).
        map(getLinkFromResource);

    const getCollapsibleSection = (name, isOpen, setIsOpen, resourcesList) => (
        <Fragment>
            {getCollapsibleHeader(
                name,
                isOpen,
                setIsOpen
            )}
            <Collapse in={isOpen}>
                {getLinksFromResource(resourcesList)}
            </Collapse>
        </Fragment>
    );

    useEffect(() => {
        if (client) {
            const { attributes } = client;
            const { locale } = attributes;

            setLocale(locale);
        }
    }, [client]);

    return (

        <div className={open ? classes.menu : null}>
            {client && <>
                <MenuItemLink
                to="/"
                primaryText={translate("esop.dashboard.name")}
                leftIcon={<Apps />}
                onClick={props.onMenuClick}
                sidebarIsOpen={open}
                exact
                />

                {getCollapsibleSection(
                    "assets",
                    openAssets,
                    setOpenAssets,
                    [
                        isDisplayed(client.permissions, "getServices") ? "services" : null,
                        isDisplayed(client.permissions, "getEquipments") ? "equipments" : null,
                        isDisplayed(client.permissions, "getMobiles") ? "mobiles" : null,
                        isDisplayed(client.permissions, "getHolders") ? "holders" : null,
                        isDisplayed(client.permissions, "getGroups") ? "groups" : null
                    ]
                )}

                {getLinksFromResource([
                    isDisplayed(client.permissions, "getAllocations") ? "allocations" : null,
                    isDisplayed(client.permissions, "getOperations") ? "operations" : null
                ])}

                {(isDisplayed(client.permissions, "getPersons") ||
                isDisplayed(client.permissions, "getContacts"))
                    ?getCollapsibleSection(
                        "customers",
                        openCustomers,
                        setOpenCustomers,
                        [
                            isDisplayed(client.permissions, "getPersons") ? "persons" : null,
                            isDisplayed(client.permissions, "getContacts") ? "contacts" : null
                        ]
                    )
                    : null
                }

                {isDisplayed(client.permissions, "getOutcomingContracts") &&
                    (client.permissions, "getIncomingContracts") &&
                    (client.permissions, "getExternalContracts")
                        ? getCollapsibleSection(
                            "contracts",
                            openContracts,
                            setOpenContracts,
                            [
                                isDisplayed(client.permissions, "getOutcomingContracts") ? "outcomingcontracts" : null,
                                isDisplayed(client.permissions, "getIncomingContracts") ? "incomingcontracts" : null,
                                isDisplayed(client.permissions, "getExternalContracts") ? "externalcontracts" : null
                            ]
                        )
                        : null
                }

                {isDisplayed(client.permissions, "supportRequestForEntity") &&
                    <MenuItemLink
                        to="/supportrequests/create"
                        primaryText={translate("resources.supports.name")}
                        leftIcon={<ContactSupportIcon />}
                        onClick={props.onMenuClick}
                        sidebarIsOpen={open}
                    />
                }

                {isDisplayed(client.permissions, "purchaseForecast") &&
                    <MenuItemLink
                        to="/purchaseforecasts/create"
                        primaryText={translate("resources.purchaseforecasts.name")}
                        leftIcon={<ShopIcon />}
                        onClick={props.onMenuClick}
                        sidebarIsOpen={open}
                    />
                }

                {getLinksFromResource(["myperson"])}

                {isXSmall && props.logout}
            </>}
        </div>
    );
};

AppMenu.propTypes = {
    onMenuClick: PropTypes.func,
    logout: PropTypes.object
};

export default withRouter(AppMenu);