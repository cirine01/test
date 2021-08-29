import React from "react";
import { Create, SimpleForm, useTranslate, required, DateInput, useNotify,
    useRedirect, useRefresh } from "react-admin";
import EntitySelect from "../custom/EntitySelect";
import { CurrentCreateActions } from "../custom/ToolbarActions";
import RecordRef from "../custom/RecordRef";
import { useLayout } from "../custom/GridView";
import RecordCard from "../custom/RecordCard";
import PurchaseEntities from "../custom/PurchaseEntities";
import { makeStyles } from "@material-ui/core/styles";
import { IncomingContractsFilter } from "../list/IncomingContracts";
import IncomingContractDialogViewList from "../list/IncomingContractDialogViewList";
import { PostCreateToolbarSupport } from "../custom/DialogConfirmationButton";

const useStyles = makeStyles({
    displayingCards: {
        width: "100%",
        "& >*": {
            width: "300%",
        }
    }
});

/**
 * This component allows to create a Purchase Forecast
 *
 * @component
 * @param {Object} props - Properties to be applied to the main component of the form
 * @returns {Component} - Return a form to create a Purchase Forecast
 */

const PurchaseForecastCreate = props => {
    const classes = {
        ...useLayout(),
        ...useStyles()
    };
    const translate = useTranslate();
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify("resources.purchaseforecast.created");
        redirect("/");
        refresh();
    };

    return (
        <Create {...props}
            component="div"
            actions={<CurrentCreateActions
                listable={false}
                title={translate("esop.supportpurchase.title")} />}
            onSuccess={onSuccess}>
            <RecordRef >
                <RecordCard className={classes.mainCard}>
                    <SimpleForm
                        toolbar={<PostCreateToolbarSupport
                            redirect="show"
                            resource="purchaseforecast"
                            {...props} />}
                        className={classes.grid}>
                        <EntitySelect
                            source="contractId"
                            reference="purchaseforecast"
                            optionText="erpIdentifier"
                            route="contracts/purchaseForecast"
                            filters={<IncomingContractsFilter />}
                            component={<IncomingContractDialogViewList />}
                            label={translate("esop.incomingcontracts.list.popin")}
                            validate={required()}
                        />
                        <DateInput
                            source="orderDate"
                            label={translate("resources.purchaseforecasts.orderDate")}
                            validate={required()}
                        />
                        <DateInput
                            source="startDate"
                            label={translate("resources.purchaseforecasts.startDate")}
                            validate={required()}
                        />
                        <RecordRef className={classes.displayingCards} >
                            <PurchaseEntities
                                source="entities" />
                        </RecordRef>
                    </SimpleForm>
                </RecordCard>
            </RecordRef>
        </Create>
    )
}

export default PurchaseForecastCreate;