import { Checkbox, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import DefaultButton from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { keyBy } from "lodash";
import PropTypes from "prop-types";
import { ListContext } from "ra-core";
import React, { Fragment, useEffect, useState } from "react";
import { Datagrid, FunctionField, Loading, ReferenceField, useDataProvider, useNotify,
    useRefresh, useTranslate } from "react-admin";
import usePreAllocated from "../../hooks/allocations";
import { EquipmentField, MobileField, ServiceField } from "../custom/AllocationFields";

const useStyles = makeStyles({
    actionBar: {
        justifyContent: "space-between",
        padding: "15px 25px",
        backgroundColor: "rgba(0,0,0,0.05)",
    }
});


const AllocateMultipleDialog = props => {
    const classes = useStyles();
    const translate = useTranslate();
    const { resource, reference, leftIds, rightIds } = props;
    const dataProvider = useDataProvider();
    const notify = useNotify();
    const refresh = useRefresh();

    const [
        open,
        setOpen
    ] = useState(true);

    const [
        allocations,
        loaded,
        error
    ] = usePreAllocated({
        resource,
        reference,
        leftIds,
        rightIds
    });

    const [
        ids,
        setIds
    ] = useState([]);

    const title = translate(
        `esop.bulk.massLink`, {
            resource: translate(`resources.${resource}.name`).toLowerCase(),
            reference: translate(`resources.${reference}.name`).toLowerCase()
        }
    );

    const datagridProps = {
        data: keyBy(allocations, "id"),
        ids: allocations.map(alloc => alloc.id).sort(),
        basePath: `/allocations`,
        isRowSelectable: () => false,
        selectedIds: ids,
        currentSort: {},
        setSort: null,
        rowClick: id => {
            let newValues = [];

            if (ids.indexOf(id) > -1) {
                newValues = ids.filter(sid => sid !== id)
            } else {
                newValues = [
                    ...ids,
                    id
                ]
            }
            setIds(newValues)
        },
    };
    const saveAllocations = () => {
        dataProvider.create("allocations/bulk", {
            data: ids.map(id => ({ id }))
        }).
        then(() => {
            notify("resources.allocations.createMultiple", "info", {
                smart_count: ids.length
            });
            setOpen(false);
            refresh();
        }).
        catch(err => {
            setOpen(false);
            notify(err.message, "warning");
        })
    }
    const handleCancel = () => {
        refresh();
        setOpen(false);
    }

    useEffect(() => {
        setIds(allocations.map(alloc => alloc.id))
    }, [allocations]);

    useEffect(() => {
        if (!error) {
            return;
        }
        notify(error.message, "warning");
    }, [error]);

    const informationsSelected = allocations.length
        ? <Typography>
            {translate(`resources.allocations.selected`,
                { nbResults: allocations.length,
                nbResource: leftIds.length,
                typeResource: translate(`resources.issues.types.${resource}`),
                nbReference: rightIds.length,
                typeReference: translate(`resources.issues.types.${reference}`) })}
        </Typography>
        : "";

    return (
        <Fragment>
            <Dialog
                fullWidth={true}
                maxWidth="xl"
                open={open}
                onClose={() => setOpen(false)}
                aria-label={title || ""}>
                {title && <DialogTitle>{title}</DialogTitle>}
                <DialogContent>
                    {!loaded && <Loading/>}
                    {loaded &&
                        <Fragment>
                        {
                            (allocations && allocations.length)
                            ? <ListContext.Provider value={{}}>
                                <Datagrid {...datagridProps}>
                                    <FunctionField render={record => (
                                        <Checkbox
                                            color="primary"
                                            checked={(ids.indexOf(record.id) !== -1)}
                                            onChange={null}
                                            value={record.id}
                                        />
                                    )}/>
                                    <ServiceField source="serviceId" reference="services" />
                                    <EquipmentField source="equipmentId" reference="equipments" />
                                    <MobileField source="mobileId" reference="mobiles" />
                                    <ReferenceField source="holderId" reference="holders"
                                        link={(rec, ref) => `/${ref}/${rec.holderId}/show`}>
                                        <FunctionField render={record => (record.firstname
                                            ? `${record.firstname} ${record.lastname}`
                                            : `${record.lastname}`)}/>
                                    </ReferenceField>
                                </Datagrid>
                            </ListContext.Provider>
                            : <Typography>
                                {translate("resources.allocations.bulkEmpty")}
                            </Typography>
                        }
                        </Fragment>
                    }
                </DialogContent>
                <DialogActions className={classes.actionBar}>
                    <DefaultButton variant="contained" onClick={handleCancel}>
                        <span>{translate("esop.dialog.cancel")}</span>
                    </DefaultButton>
                    {informationsSelected}
                    <DefaultButton variant="contained" color="primary"
                        onClick={saveAllocations}>
                        <span>{translate("ra.action.save")}</span>
                    </DefaultButton>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}

AllocateMultipleDialog.propTypes = {
    resource: PropTypes.string,
    reference: PropTypes.string,
    leftIds: PropTypes.array,
    rightIds: PropTypes.array,
};

export default AllocateMultipleDialog;