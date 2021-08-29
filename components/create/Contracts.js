import React, { Fragment, useState } from "react";
import { Create, DateInput, FormTab, required, TabbedForm, ListButton, useTranslate,
    TopToolbar, } from "react-admin";
import Typography from "@material-ui/core/Typography";
import { parse } from "query-string";
import DatagridSelection from "../custom/DatagridSelection";
import EntitySelect from "../custom/EntitySelect";
import { useLayout } from "../custom/GridView";
import RecordCard from "../custom/RecordCard";
import RecordRef from "../custom/RecordRef";
import { PostCreateToolbarContracts } from "../custom/DialogConfirmationButton";
import { EquipmentsFilter } from "../list/Equipments";
import EquipmentsDialogViewList from "../list/EquipmentsDialogView";
import { PersonsFilter } from "../list/Persons";
import PersonsDialogViewList from "../list/PersonsDialogView";
import { ServicesFilter } from "../list/Services";
import ServicesDialogViewList from "../list/ServicesDialogView";
import PropTypes from "prop-types";

/* eslint max-lines: off */
/**
 * This component implements available create actions
 *
 * @component
 * @param {String} props - properties
 * @returns {Component} - Return the toolbar for the actions
 */

const CurrentActions = props => {
    const translate = useTranslate();
    const classes = useLayout();
    const { from } = parse(props.location.search);
    const { title } = props;

    return (
        <TopToolbar>
            <Fragment>
                {
                    title
                    ? <Typography variant="h4" className={classes.mainTitle}>
                        {title}
                    </Typography>
                    : <Typography variant="h4" className={classes.mainTitle} id="react-admin-title" />
                }
            </Fragment>
            <ListButton
                basePath={`/${from || "outcomingcontracts"}`}
                label={translate(`esop.contracts.actions.backToList`)}
            />
        </TopToolbar>
    )
};

CurrentActions.propTypes = {
    location: PropTypes.object,
    title: PropTypes.string
};

/**
 * This component allows to create ESOP contracts
 *
 * @component
 * @param {Object} props - Properties to be applied to the main component of the form
 * @returns {Component} - Return a form to edit an ESOP contracts
 */
const ContractsCreate = props => {
    const translate = useTranslate();
    const classes = useLayout();
    const [
        vendorId,
        setVendorId
    ] = useState("");
    const [
        buyerId,
        setBuyerId
    ] = useState("")
    const [
        serviceId,
        setServiceId
    ] = useState("")
    const [
        equipmentId,
        setEquipmentId
    ] = useState("")
    const [
        count,
        setCount
    ] = useState(0)

    const handleChangeVendor = event => {
        setVendorId(event)
    }
    const handleChangeBuyer = event => {
        setBuyerId(event)
    }

    const handleChangeService = event => {
        setServiceId(event)
    }
    const handleChangeEquipment = event => {
        setEquipmentId(event)
    }

    const onSelectCount = event => {
        setCount(event)
    }
        /* eslint no-nested-ternary: "off" */

    return (
        <Create {...props}
            component="div"
            actions={<CurrentActions {...props}
                title={translate(`esop.contracts.create.title`)}
            />}>
            <RecordRef>
                <RecordCard className={classes.mainCard}>
                    <TabbedForm
                        toolbar={<PostCreateToolbarContracts
                        redirect="show"
                        resource="contracts"
                        {...props} />}>
                        <FormTab label={translate(`esop.contracts.tabs.summary`)}
                            contentClassName={classes.gridChild}>
                            {buyerId
                                ? <EntitySelect
                                    source="vendorId"
                                    onChange={handleChangeVendor}
                                    reference="persons"
                                    route="persons/createContract"
                                    filter= {{ entityType: "VENDOR",
                                        entityId: buyerId }}
                                    filters={<PersonsFilter />}
                                    component={<PersonsDialogViewList />}
                                    label={translate(`resources.contracts.fields.vendorId`)}
                                    validate={required()}
                                />
                                : <EntitySelect
                                    source="vendorId"
                                    onChange={handleChangeVendor}
                                    reference="persons"
                                    route="persons/createContract"
                                    filter= {{ entityType: "VENDOR" }}
                                    filters={<PersonsFilter />}
                                    component={<PersonsDialogViewList />}
                                    label={translate(`resources.contracts.fields.vendorId`)}
                                    validate={required()}
                                />
                            }
                            {vendorId
                                ? <EntitySelect
                                    onChange={handleChangeBuyer}
                                    source="buyerId"
                                    reference="persons"
                                    route="persons/createContract"
                                    filter= {{ entityType: "BUYER",
                                        entityId: vendorId }}
                                    filters={<PersonsFilter />}
                                    component={<PersonsDialogViewList />}
                                    label={translate(`resources.contracts.fields.buyerId`)}
                                    validate={required()}
                                />
                                : <EntitySelect
                                    onChange={handleChangeBuyer}
                                    source="buyerId"
                                    reference="persons"
                                    route="persons/createContract"
                                    filter= {{ entityType: "BUYER" }}
                                    filters={<PersonsFilter />}
                                    component={<PersonsDialogViewList />}
                                    label={translate(`resources.contracts.fields.buyerId`)}
                                    validate={required()}
                                />
                            }

                            <DateInput source="startDate"
                                validate={required()}
                            />
                        </FormTab>
                        { vendorId
                            ? equipmentId || serviceId
                                ? <FormTab label={translate(`esop.contracts.tabs.services`)}
                                    style={{ color: "black" }}>
                                    <DatagridSelection
                                        dialogActions={ (count > 0)
                                            ? <Typography>{translate(`resources.services.selected`,
                                                    { smart_count: count })}
                                                </Typography>
                                            : ""
                                        }
                                        source="serviceIds"
                                        reference="services"
                                        route="services/contractable"
                                        filter= {{ entityId: vendorId }}
                                        filters={<ServicesFilter />}
                                        component={<ServicesDialogViewList onSelectCount={onSelectCount}/>}
                                        label={translate(`resources.contracts.fields.services`)}
                                    />
                                </FormTab>
                                : <FormTab label={translate(`esop.contracts.tabs.services`)}
                                    style={{ color: "red" }}>
                                    <DatagridSelection
                                        dialogActions={ (count > 0)
                                            ? <Typography>{translate(`resources.services.selected`,
                                                    { smart_count: count })}
                                                </Typography>
                                            : ""
                                        }
                                        onChange={handleChangeService}
                                        source="serviceIds"
                                        reference="services"
                                        route="services/contractable"
                                        filter= {{ entityId: vendorId }}
                                        filters={<ServicesFilter />}
                                        component={<ServicesDialogViewList onSelectCount={onSelectCount}/>}
                                        label={translate(`resources.contracts.fields.services`)}
                                    />
                                </FormTab>
                            : <FormTab label={translate(`esop.contracts.tabs.services`)}
                                disabled>
                                    <DatagridSelection
                                    dialogActions={ (count > 0)
                                        ? <Typography>{translate(`resources.services.selected`,
                                                { smart_count: count })}
                                            </Typography>
                                        : ""
                                    }
                                    source="serviceIds"
                                    reference="services"
                                    route="services/contractable"
                                    filter= {{ entityId: vendorId }}
                                    filters={<ServicesFilter />}
                                    component={<ServicesDialogViewList onSelectCount={onSelectCount} />}
                                    label={translate(`resources.contracts.fields.services`)}
                                    />
                            </FormTab>
                        }
                        { vendorId
                            ? serviceId || equipmentId
                                ? <FormTab label={translate(`esop.contracts.tabs.equipments`)}>
                                    <DatagridSelection
                                        dialogActions={ (count > 0)
                                            ? <Typography>{translate(`resources.equipments.selected`,
                                                    { smart_count: count })}
                                                </Typography>
                                            : ""
                                        }
                                        source="equipmentIds"
                                        reference="equipments"
                                        route="equipments/contractable"
                                        filter= {{ entityId: vendorId }}
                                        filters={<EquipmentsFilter />}
                                        component={<EquipmentsDialogViewList onSelectCount={onSelectCount}/>}
                                        label={translate(`resources.contracts.fields.equipments`)}
                                    />
                                </FormTab>
                                : <FormTab label={translate(`esop.contracts.tabs.equipments`)}
                                    style={{ color: "red" }}>
                                    <DatagridSelection
                                        dialogActions={ (count > 0)
                                            ? <Typography>{translate(`resources.equipments.selected`,
                                                    { smart_count: count })}
                                                </Typography>
                                            : ""
                                        }
                                        onChange= {handleChangeEquipment}
                                        source="equipmentIds"
                                        reference="equipments"
                                        route="equipments/contractable"
                                        filter= {{ entityId: vendorId }}
                                        filters={<EquipmentsFilter />}
                                        component={<EquipmentsDialogViewList onSelectCount={onSelectCount}/>}
                                        label={translate(`resources.contracts.fields.equipments`)}
                                    />
                                </FormTab>
                            : <FormTab label={translate(`esop.contracts.tabs.equipments`)}
                                disabled>
                                <DatagridSelection
                                    dialogActions={ (count > 0)
                                        ? <Typography>{translate(`resources.equipments.selected`,
                                                { smart_count: count })}
                                            </Typography>
                                        : ""
                                    }
                                    source="equipmentIds"
                                    reference="equipments"
                                    route="equipments/contractable"
                                    filter= {{ entityId: vendorId }}
                                    filters={<EquipmentsFilter />}
                                    component={<EquipmentsDialogViewList onSelectCount={onSelectCount}/>}
                                    label={translate(`resources.contracts.fields.equipments`)}
                                />
                            </FormTab>
                        }
                    </TabbedForm>
                </RecordCard>
            </RecordRef>
        </Create>
    );
};

export default ContractsCreate;