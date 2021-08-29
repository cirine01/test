import IconButton from "@material-ui/core/IconButton";
import DefaultButton from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { Close, PriorityHigh } from "@material-ui/icons";
import PropTypes from "prop-types";
import React, { useState, useEffect, Fragment } from "react";
import { Labeled, useTranslate, useDataProvider, useNotify, useRefresh, Confirm, Loading } from "react-admin";
import EntityDialog from "./EntityDialog";
import { useLayout } from "./GridView";
import { quickConvert } from "../../providers/esopDataProvider";
import { getLabel, mapToType } from "../../helpers/entities";
import { isDisplayed } from "../../helpers/permissions";

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

const useStyles = makeStyles({
    col: {
        display: "flex",
        flexDirection: "column"
    },
    row: {
        display: "flex",
        flexDirection: "row"
    },
    aic: {
        alignItems: "center",
        paddingRight: "8px"
    },
    nnl: {
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
    },
    exp: {
        flex: 1
    },
    label: {
        "&:empty": {
            display: "none"
        },
        "&:not(:empty)::before": {
            content: "attr(data-label) ': '",
            marginRight: "4px"
        }
    },
    emptyText: {
        opacity: "0.5",
        padding: "4px"
    }
});

/**
 * A custom button to unlink entity from allocation
 *
 * @component
 * @param {Object} props - Properties
 * @returns {Component} - A html element displaying the button
 */
const UnlinkButton = props => {
    const { resource, source, record, target } = props;

    const isUnlinkable = (record &&
        isDisplayed(resource.permissions, `remove${mapToType(source)}AllocationLink`, resource[source])
    );

    const classes = {
        ...useLayout(),
        ...useStyles(),
        ...useButtons()
    };
    const [
        open,
        setOpen
    ] = useState(false);
    const [
        entity,
        setEntity
    ] = useState(false);
    const dataProvider = useDataProvider();
    const translate = useTranslate();
    const notify = useNotify();
    const refresh = useRefresh();


    useEffect(() => {
        dataProvider.getOne(quickConvert(source), { id: resource[source] }).
            then(({ data }) => {
                setEntity(data);
            }).
            catch(error => {
                notify(error.message, "warning");
            })
    }, []);

    const update = () => dataProvider.update("allocations", {
        id: resource.id,
        data: {
            source,
            delete: true,
            allocation: resource
        }
    }).
    then(() => {
        refresh();
        notify(`resources.${quickConvert(source)}.unlinked`);
    }).
    catch(err => notify(`${err.message}`, "warning"))

    const handleConfirm = () => {
        update();
        setOpen(false);
    };
    const handleClick = () => setOpen(true);
    const handleDialogClose = () => setOpen(false);

    return isUnlinkable
        ? <Fragment>
            <IconButton aria-label="unlink" component="span" className={classes.deleteButton}
                onClick={handleClick}>
                <Close />
            </IconButton>
            {entity &&
                <Confirm
                    isOpen={open}
                    loading={false}
                    title="Remove link"
                    content={translate("esop.allocations.beforeUnlink", {
                        ent1: getLabel(source, entity, translate),
                        ent2: getLabel(target, record, translate)
                    })}
                    onConfirm={handleConfirm}
                    onClose={handleDialogClose}
                />
            }
        </Fragment>
        : "";
};

UnlinkButton.propTypes = {
    source: PropTypes.string,
    resource: PropTypes.object,
    record: PropTypes.object,
    target: PropTypes.string,
};

/**
 * A custom grid to display links of an entity
 *
 * @component
 * @param {Object} props - Properties of the component
 * @returns {Component} - A html element displaying links
 */
const LinksGrid = props => {
    const translate = useTranslate();
    const classes = {
        ...useLayout(),
        ...useStyles(),
        ...useButtons()
    };
    const { data, ids, children, basePath, resource, record, target, loaded } = props;
    const dataProvider = useDataProvider();
    const notify = useNotify();
    const refresh = useRefresh();
    const canAddAlloc = true

    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)


    const doLink = (allocation, source, id) => {
        if (allocation.id) {
            dataProvider.update("allocations", {
                id: allocation.id,
                data: {
                    id: allocation.id,
                    leftEntityId: record.id,
                    leftEntityType: mapToType(target),
                    rightEntityId: id,
                    rightEntityType: mapToType(source)
                }
            }).
            then(() => {
                refresh();
                notify(`resources.${quickConvert(source)}.linked`);
            }).
            catch(err => notify(`${err.message}`, "warning"))
        } else {
            dataProvider.create("allocations", {
                id: allocation.id,
                data: {
                    leftEntityId: record.id,
                    leftEntityType: mapToType(target),
                    rightEntityId: id,
                    rightEntityType: mapToType(source)
                }
            }).
            then(() => {
                refresh();
                notify(`resources.${quickConvert(source)}.linked`);
            }).
            catch(err => notify(`${err.message}`, "warning"))
        }
    }

    if (!data) {
        return "";
    }


    const linkRow = rowRecord => React.Children.map(
        children, field => {
            if (field && rowRecord) {
                if (rowRecord[field.props.source]) {
                    return <div className={[
                        classes.row,
                        classes.aic
                    ].join(" ")}>
                        <Labeled className={classes.exp}
                            label={translate(`resources.${resource}.fields.${field.props.source}`)}>
                            {React.cloneElement(field, {
                                record: rowRecord,
                                basePath,
                                resource,
                                short: false
                            })}
                        </Labeled>
                        <UnlinkButton
                            resource={rowRecord}
                            source={field.props.source}
                            record={record}
                            target={target}
                        />
                    </div>;
                }

                return field.props.source
                    ? <Labeled label={translate(`resources.${resource}.fields.${field.props.source}`)}>
                        {isDisplayed(record.permissions, `getLinkable${capitalize(field.props.reference)}`)
                            ? <EntityDialog
                                max={1}
                                onChoose={id => doLink(rowRecord, field.props.source, id)}
                                button={ <DefaultButton variant="contained" color="primary">
                                    <span>{translate(`resources.${resource}.actions.${field.props.source}Link`)}</span>
                                </DefaultButton> }
                                title={translate(`resources.${resource}.actions.${field.props.source}Title`)}
                                field={field.props.source}
                                record={rowRecord}
                                target={target}
                                route={`${quickConvert(field.props.source, true)}/allocations/toEntity`}
                                filter={{
                                    entityId: rowRecord[target],
                                    entityType: mapToType(target).toUpperCase()
                                }}/>
                            : <div className={[
                                    classes.center,
                                    classes.emptyText
                                ].join(" ")}>
                                    <PriorityHigh style={{ marginRight: "10px" }}/>
                                    <span >{translate(`resources.allocations.no`)}
                                        {translate(`resources.${resource}.fields.${field.props.source}`)}
                                    </span>
                                </div>
                        }
                    </Labeled>
                : "";

            }
            return "";
        }
    );

    if (!loaded) {
        return <Loading/>;
    }

    return <div className={[
        classes.gridChild,
        classes.mdCol
    ].join(" ")}>
        { (ids && ids.length) ? ids.map(id => {
            const rowRecord = data[id];

            return linkRow(rowRecord);
        }) : <>
            {canAddAlloc
                ? linkRow({
                    id: null,
                    holderId: null,
                    equipmentId: null,
                    mobileId: null,
                    serviceId: null,
                    [target]: record ? record.id : null
                })
                : null
            }
        </>}
    </div>;
};

LinksGrid.propTypes = {
    data: PropTypes.object,
    ids: PropTypes.array,
    basePath: PropTypes.string,
    resource: PropTypes.string,
    children: PropTypes.node,
    record: PropTypes.object,
    target: PropTypes.string,
    loaded: PropTypes.bool
};

export default LinksGrid;