import PersonsIcon from "@material-ui/icons/Apartment";
import OperationsIcon from "@material-ui/icons/Assignment";
import ContractsIcon from "@material-ui/icons/CardTravel";
import ContactsIcon from "@material-ui/icons/Group";
import GroupsIcon from "@material-ui/icons/GroupWork";
import AllocationsIcon from "@material-ui/icons/HowToVote";
import EquipmentsIcon from "@material-ui/icons/Memory";
import MobilesIcon from "@material-ui/icons/Navigation";
import HoldersIcon from "@material-ui/icons/PersonPin";
import ServicesIcon from "@material-ui/icons/Satellite";
import ShopIcon from "@material-ui/icons/Shop";
import ExternalContractIcon from "@material-ui/icons/Shuffle";
import IncomingContractIcon from "@material-ui/icons/CallReceived";
import OutcomingContractIcon from "@material-ui/icons/CallMade";
import React, { useState } from "react";
import { Admin, Resource } from "react-admin";
import authProvider, { keycloakInit } from "../providers/auth";
import dataProvider from "../providers/data";
import i18nProvider from "../providers/i18n";
import AppLayout from "./AppLayout";
import ContactsCreate from "./create/Contacts";
import GroupsCreate from "./create/Groups";
import MobilesCreate from "./create/Mobiles";
import OperationsCreate from "./create/Operations";
import PersonsCreate from "./create/Persons";
import RecipientsCreate from "./create/Recipients";
import SupportRequestCreate from "./create/SupportRequest";
import PurchaseForecastCreate from "./create/PurchaseForecast";
import Login from "./custom/Login";
import Logout from "./custom/Logout";
import Dashboard from "./Dashboard";
import ContactsEdit from "./edit/Contacts";
import MobilesEdit from "./edit/Mobiles";
import PersonsEdit from "./edit/Persons";
import RecipientsEdit from "./edit/Recipients";
import AllocationsList from "./list/Allocations";
import ContactsList from "./list/Contacts";
import EquipmentsList from "./list/Equipments";
import ExternalContractsList from "./list/ExternalContracts";
import GroupsList from "./list/Groups";
import HoldersList from "./list/Holders";
import IncomingContractsList from "./list/IncomingContracts";
import MobilesList from "./list/Mobiles";
import OperationsList from "./list/Operations";
import OutcomingContractsList from "./list/OutcomingContracts";
import PersonsList from "./list/Persons";
import ServicesList from "./list/Services";
import ContactsShow from "./show/Contacts";
import EquipmentsShow from "./show/Equipments";
import GroupsShow from "./show/Groups";
import HoldersShow from "./show/Holders";
import MobilesShow from "./show/Mobiles";
import OperationsShow from "./show/Operations";
import PersonsShow from "./show/Persons";
import ServicesShow from "./show/Services";
import ContractsCreate from "./create/Contracts";
import ContractsShow from "./show/Contracts";
import myTheme from "./custom/MyTheme";


/**
 * Main app component. Renders the Admin component and all the resources.
 *
 * @component
 *
 * @property {Dashboard} dashboard              - Component to render the dashboard
 * @property {Login} loginPage                  - Wrapper for keycloak login page
 * @property {Logout} logoutButton              - Logout button
 * @property {dataProvider} dataProvider        - Component to provide the abstraction layer for the data
 * @property {authProvider} authProvider        - Component to provide the abstraction layer for the authentication
 * @property {i18nProvider} i18nProvider        - Component to provide the abstraction layer for the translations
 *
 * @property {Resource} services                - Allows to manage services (list, show, edit)
 * @property {Resource} equipments              - Allows to manage equipments (list, edit)
 * @property {Resource} mobiles                 - Allows to manage mobiles (list, edit, create)
 * @property {Resource} holders                 - Allows to manage holders (list)
 * @property {Resource} groups                  - Allows to manage groups (list, edit, create)
 * @property {Resource} allocations             - Allows to manage allocations
 * @property {Resource} operations              - Allows to manage operations (list, edit, create)
 * @property {Resource} incomingcontracts       - Allows to manage incoming contracts (list, edit)
 * @property {Resource} outcomingcontracts      - Allows to manage outcoming contracts (list, edit)
 * @property {Resource} externalcontracts       - Allows to manage external contracts (list, edit)
 * @property {Resource} persons           - Allows to manage persons (list, show, edit)
 * @property {Resource} myperson          - Allows to manage 'my person' (show)
 * @property {Resource} contacts                - Allows to manage contacts (list)
 *
 * @returns {Component} - Main ESOP component that will render every other component
 */
const ESOP = () => {
    const [
        isAuthenticated,
        setIsAuthenticated
    ] = useState(false);

    if (!isAuthenticated) {
        keycloakInit().then(() => setIsAuthenticated(true));
    }

    return isAuthenticated ? (
        <Admin title="ESOP"
            layout={AppLayout}
            dashboard={Dashboard}
            loginPage={Login}
            theme={myTheme}
            logoutButton={Logout}
            dataProvider={dataProvider}
            authProvider={authProvider}
            i18nProvider={i18nProvider} >

            <Resource name="services"
                list={ServicesList}
                show={ServicesShow}
                icon={ServicesIcon} />

            <Resource name="equipments"
                list={EquipmentsList}
                show={EquipmentsShow}
                icon={EquipmentsIcon} />

            <Resource name="mobiles"
                show={MobilesShow}
                list={MobilesList}
                edit={MobilesEdit}
                create={MobilesCreate}
                icon={MobilesIcon} />

            <Resource name="holders"
                list={HoldersList}
                show={HoldersShow}
                icon={HoldersIcon} />

            <Resource name="groups"
                list={GroupsList}
                show={GroupsShow}
                create={GroupsCreate}
                icon={GroupsIcon} />

            <Resource name="allocations"
                list={AllocationsList}
                icon={AllocationsIcon} />

            <Resource name="operations"
                list={OperationsList}
                show={OperationsShow}
                create={OperationsCreate}
                icon={OperationsIcon} />

            <Resource name="contracts"
                create={ContractsCreate}
                show={ContractsShow}
                icon={ContractsIcon} />

            <Resource name="incomingcontracts"
                list={IncomingContractsList}
                icon={IncomingContractIcon} />

            <Resource name="outcomingcontracts"
                list={OutcomingContractsList}
                icon={OutcomingContractIcon} />

            <Resource name="externalcontracts"
                list={ExternalContractsList}
                icon={ExternalContractIcon} />

            <Resource name="persons"
                list={PersonsList}
                show={PersonsShow}
                edit={PersonsEdit}
                create={PersonsCreate}
                icon={PersonsIcon} />

            <Resource name="contacts"
                list={ContactsList}
                show={ContactsShow}
                create={ContactsCreate}
                edit={ContactsEdit}
                icon={ContactsIcon} />

            <Resource name="recipients"
                create={RecipientsCreate}
                edit={RecipientsEdit} />

            <Resource name="supportrequests"
                create={SupportRequestCreate}
                icon={OperationsIcon} />

            <Resource name="purchaseforecasts"
                create={PurchaseForecastCreate}
                icon={ShopIcon} />

            <Resource name="purchaseforecast"
                create={PurchaseForecastCreate}
                icon={ShopIcon} />

        </Admin>
    ) : null;
};

export default ESOP;