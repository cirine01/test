import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Tooltip from "@material-ui/core/Tooltip";
import { Close } from "@material-ui/icons";
import React, { Fragment, useEffect, useState } from "react";
import { Error, Loading, useDataProvider, useTranslate } from "react-admin";
import { EquipmentCard } from "../show/Equipments";
import { HolderCard } from "../show/Holders";
import { MobileCard } from "../show/Mobiles";
import { ServiceCard } from "../show/Services";
import { useOpStyles } from "../../helpers/Operations";


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

/**
 * Display any static entity by type
 *
 * @component
 * @param {Object} record - Component record
 * @param {String} type - Type of the entity
 * @returns {Component} - Static entity component
 */
export const StaticEntityDisplayer = ({ record, type }) => {
    const StaticEntity = {
        mobiles: MobileCard,
        equipments: EquipmentCard,
        holders: HolderCard,
        services: ServiceCard
    }[type];

    return record
        ? <StaticEntity record={record} resource={type} basePath={`/${type}`} showMode={false} />
        : "";
};

StaticEntityDisplayer.propTypes = {
    record: PropTypes.object,
    type: PropTypes.string
};

/**
 * Display any entity by type
 *
 * @component
 * @param {String} entity - Type of the entity
 * @param {String} entityId - Id of the entity
 * @param {Function} onUnlink - Click on unlink cross function
 * @param {Boolean} deletable - Is the entity unlinkable or not
 * @returns {Component} - Entity component
 */
const EntityDisplayer = ({ entity, entityId, onUnlink, cardTitle, deletable = true }) => {
    /* eslint-disable */
    const dataProvider = useDataProvider();
    const [ record, setRecord ] = useState();
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState();
    const translate = useTranslate();
    const classes = { ...useOpStyles(), ...useButtons() };
    /* eslint-enable */

    useEffect(() => {
        if (entity && entityId) {
            dataProvider.getOne(entity, { id: entityId }).
                then(({ data }) => {
                    setRecord(data);
                    setLoading(false);
                }).
                catch(err => {
                    setError(err);
                    setLoading(false);
                })
        }
    }, [
        entity,
        entityId
    ]);

    /* eslint-disable */
    if (!entity || !entityId) return "";
    if (loading) return <Loading />;
    if (error) return <Error error={error}/>;
    if (!record) return "";
    /* eslint-enable */

    if (entity && entityId) {
        const Entity = {
            mobiles: MobileCard,
            equipments: EquipmentCard,
            holders: HolderCard,
            services: ServiceCard
        }[entity];

        return <Entity record={record} resource={entity} basePath={`/${entity}`} cardTitle={cardTitle} showMode={false}>
            {deletable && <Fragment>
                <Tooltip title={translate(`esop.operations.actions.remove.${entity}`)}>
                    <IconButton aria-label="unlink" onClick={onUnlink} component="span" className={[
                        classes.deleteButton,
                        classes.removeOpCreate
                    ].join(" ")}>
                        <Close />
                    </IconButton>
                </Tooltip>
            </Fragment>}
        </Entity>;
    }
    return "";
};

export default EntityDisplayer;