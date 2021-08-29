import { makeStyles } from "@material-ui/core/styles";
import { keyBy } from "lodash";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Button, Loading, useDataProvider, useInput, useTranslate } from "react-admin";
import EntityDialog from "./EntityDialog";
import { mapToType } from "../../helpers/entities";

/* eslint id-length: off */
const useStyles = makeStyles({
    button: {
        marginTop: "20px"
    }
})

/**
 * Display Popin to select an entity
 *
 * @component
 * @param {Object} props - Component properties
 * @returns {Component} - Popin component
 */
const DatagridSelection = props => {
    const dataProvider = useDataProvider();
    const translate = useTranslate();
    const classes = useStyles();
    const {
        reference,
        filters,
        component,
        route,
        filter,
        resource,
        dialogActions,
        ...rest
    } = props;
    const { label, defaultValue } = rest;
    const {
        input: { onChange }
    } = useInput(rest);
    const [
        loading,
        setLoading
    ] = useState(false);
    const [
        value,
        setValue
    ] = useState(defaultValue ? [defaultValue] : []);
    const [
        datas,
        setDatas
    ] = useState(false);
    const [
        perms,
        setPermissions
    ] = useState([]);

    const retrieveMany = () => {
        setLoading(true);
        dataProvider.getMany(reference, { ids: value }).
            then(({ data, permissions }) => {
                setLoading(false);
                setDatas(data);
                if (permissions) {
                    setPermissions(permissions)
                }
            }).
            catch(err => {
                setLoading(false);
                console.log(err);
            })
    }

    useEffect(() => {
        if (value) {
            onChange(value)
            retrieveMany()
        }
    }, [value]);

    const title = translate("esop.contracts.title", {
        reference: translate(`resources.${reference}.name`).toLowerCase()
    });

    const handleDelete = event => {
        setValue(value.filter(id => event !== id))
    }

    return (
        /* eslint no-nested-ternary: off */
        <div>
            {(value && value.length && datas)
                ? loading
                    ? <Loading/>
                    : React.cloneElement(
                        component, {
                            data: keyBy(datas, "id"),
                            ids: value.sort(),
                            basePath: `/${reference}`,
                            isRowSelectable: () => false,
                            selectedIds: value,
                            currentSort: {},
                            selectable: false,
                            setSort: null,
                            permissions: perms,
                            onDelete: handleDelete
                        }
                    )
                : ""
            }
            <EntityDialog {...{
                reference,
                filters,
                component,
                dialogActions,
                label,
                title,
                filter: {
                    entityId: mapToType(resource),
                    ...filter
                },
                route: route || `${reference}`
            }} onChoose={setValue}
                value={value}
                button={
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        label={`resources.groups.fields.${reference}`}
                    />
                }
            />
        </div>
    );
}

DatagridSelection.propTypes = {
    label: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    reference: PropTypes.string.isRequired,
    filters: PropTypes.node,
    component: PropTypes.node,
    optionText: PropTypes.string,
    route: PropTypes.string,
    filter: PropTypes.object,
    resource: PropTypes.string,
    dialogActions: PropTypes.node
};

export default DatagridSelection;