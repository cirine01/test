import Typography from "@material-ui/core/Typography";
import { FormHelperText } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDataProvider, useTranslate } from "react-admin";
import { useForm, useField } from "react-final-form";
import { quickConvert } from "../../providers/esopDataProvider";
import { useOpStyles } from "../../helpers/Operations";
import { useLayout } from "../custom/GridView";
import EntityDialog from "./EntityDialog";
import EntityDisplayer from "./EntityDisplayer";
import RecordCard from "./RecordCard";
import RecordRef from "./RecordRef";
/* eslint max-lines: "off" */


/**
 * Component that returns either the displayed entity or the button to choose one
 *
 * @component
 * @param {Object} props - Properties
 * @returns {Component} - Operation Child entity
 */
const OperationChild = props => {
    const classes = useLayout();
    const translate = useTranslate();
    const { preSelect, entities, type, onChange, formData, ent } = props;
    const { meta: { touched, error } } = useField(ent.field);
    const [
        stateFilter,
        setFilter
    ] = useState(ent.filter || null);

    const onLink = datas => {
        ent.setRecord(datas)
        onChange(datas)
    }

    const onUnlink = () => {
        ent.setRecord(null)
        onChange({
            entity: ent.type,
            entityId: null,
            field: ent.field
        })
    }

    useEffect(() => {
        const firstHydrated = Object.entries(entities).
            map(([
                key,
                entity
            ]) => ({
                key,
                type: entity.type
            })).
            find(entity => (entity.type === preSelect.entity));

        if (!preSelect.entity || !preSelect.entityId || !firstHydrated) {
            return;
        }

        if (ent.field === firstHydrated.key) {
            ent.setRecord({ ...preSelect })
            onChange({
                ...preSelect,
                field: ent.field
            })
        }
    }, []);

    useEffect(() => {
        if (ent.getFilter && typeof ent.getFilter === "function") {
            setFilter(ent.getFilter(formData))
        }
    }, [formData]);

    if (ent.record) {
        return <EntityDisplayer
            cardTitle={translate(`esop.operations.actions.select.${ent.field}.title`)}
            deletable={ent.selectable && !ent.record.hydrated}
            onUnlink={() => onUnlink()}
            entity={ent.record.entity}
            entityId={ent.record.entityId}
        />;
    }

    const disabled = (typeof ent.disabled === "function")
        ? ent.disabled(formData)
        : ent.disabled;

    return ent.selectable ? <RecordCard className={classes.padCard}>
        <Typography variant="h6" className={classes.cardTitle}>
            {translate(`esop.operations.actions.select.${ent.field}.title`)}
        </Typography>
        <EntityDialog
            onChoose={id => onLink({
                entity: ent.type,
                entityId: id,
                field: ent.field
            })}
            label={translate(`esop.operations.actions.select.${ent.field}.link`)}
            title={translate(`esop.operations.actions.select.${ent.field}.popinTitle`)}
            field={quickConvert(ent.type)}
            route={ent.route || `${ent.type}/operations/${type}`}
            filter={stateFilter || null}
            max={ent.max || 1}
            disabled={disabled}
        />
        {(touched && error) &&
            <FormHelperText error={true}>
                {error}
            </FormHelperText>
        }
    </RecordCard> : "";
}

OperationChild.propTypes = {
    preSelect: PropTypes.object,
    type: PropTypes.string,
    ent: PropTypes.object,
    onChange: PropTypes.func,
    field: PropTypes.string,
    entities: PropTypes.object,
    formData: PropTypes.object,
};

/**
 * Component that returns the list of operation children
 *
 * @component
 * @param {Object} props - Properties
 * @returns {Component} - Operation children list
 */
const OperationChildren = props => {
    const dataProvider = useDataProvider();
    const classes = {
        ...useLayout(),
        ...useOpStyles()
    };
    const [
        formEnts,
        setFormEnts
    ] = useState([]);
    const form = useForm();
    const { entities, formData, ...rest } = props;
    const currentEntities = Object.entries(entities).map(([
        key,
        ent
    ]) => {
        const [
            record,
            setRecord
        ] = useState();

        return {
            ...ent,
            field: key,
            record,
            setRecord
        };
    });

    useEffect(() => {
        if (formEnts && formEnts.length) {
            /* eslint prefer-destructuring: "off" */
            form.batch(() => {
                formEnts.forEach(([
                    toField,
                    toVal
                ]) => {
                    form.change(toField, toVal)
                })
            })
        }
    }, [
        formEnts,
        formData
    ]);

    /* eslint-disable */

    const hydrateOtherEntities = (ent, allocation) => {
        let upForm = {[ent.field]: ent.entityId};
        
        currentEntities.forEach((element, index) => {
            if (allocation) {
                if ((element.type !== ent.entity) && !element.record) {
                    const value = allocation[quickConvert(element.type)];

                    if(value) {
                        if (element.selectable) {
                            upForm[element.field] = value
                        }
                        element.setRecord({
                            entity: element.type,
                            entityId: value,
                            hydrated: true
                        });
                    }
                }
            } else if (allocation === false) {
                if (element.selectable) {
                    upForm[element.field] = ''
                }
                element.setRecord(null);
            }
        });
        setFormEnts(Object.entries(upForm));
    }

    const hydrateOtherEntitiesWithMap = (ent, data, map) => {
        let upForm = {[ent.field]: ent.entityId};
        
        currentEntities.forEach((element, index) => {
            if (data) {
                if (map[element.field] && data[map[element.field]] && !element.record) {
                    if (element.selectable) {
                        upForm[element.field] = data[map[element.field]];
                    }
                    element.setRecord({
                        entity: element.type,
                        entityId: data[map[element.field]],
                        hydrated: true
                    });
                }
            } else if (data === false) {
                if (element.selectable) {
                    upForm[element.field] = '';
                }
                element.setRecord(null);
            }
        });
        setFormEnts(Object.entries(upForm));
    }

    const onSelectSelectable = ent => {
        const fullEntity = entities[ent.field];

        if (ent.entityId) {
            if(fullEntity.hydrateMap) {
                Object.entries(fullEntity.hydrateMap).forEach(([hydratePath, hydrateMap]) => {
                    dataProvider.getOne(hydratePath, { id: ent.entityId }).
                        then(({ data }) => {
                            if(data) {
                                hydrateOtherEntitiesWithMap(ent, data, hydrateMap)
                            } else {
                                setFormEnts([[ent.field, ent.entityId]])
                            }
                        }).
                        catch(err => {
                            console.log(err);
                            setFormEnts([[ent.field, ent.entityId]]);
                        })
                })
            } else {
                dataProvider.getOne(`allocations/${ent.entity}`, { id: ent.entityId }).
                    then(({ data }) => {
                        if(data) {
                            hydrateOtherEntities(ent, data)
                        } else {
                            setFormEnts([[ent.field, ent.entityId]])
                        }
                    }).
                    catch(err => {
                        console.log(err);
                        setFormEnts([[ent.field, ent.entityId]])
                    })
            }
        } else {
            hydrateOtherEntities(ent, false)
        }
    }

    return (
        <RecordRef {...rest} className={[
            classes.col,
            classes.large
        ].join(" ")}>
            {currentEntities.map(ent => (
                (ent.selectable || (!ent.selectable && ent.record))
                ? <RecordRef key={ent.field} className={classes.opChild}>
                    <OperationChild ent={ent} field={ent.field} {...props} onChange={data => {
                        if (ent.selectable) {
                            onSelectSelectable(data)
                        }
                    }}/>
                </RecordRef>
                : ""
            ))}
        </RecordRef>
    )
};

OperationChildren.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    entities: PropTypes.object,
    preSelect: PropTypes.object,
    type: PropTypes.string,
    formData: PropTypes.object,
};

export default OperationChildren;