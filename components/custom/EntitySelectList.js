import { makeStyles } from "@material-ui/core/styles";
import keyBy from "lodash/keyBy";
import pickBy from "lodash/pickBy";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Error, ListContextProvider, Loading, Pagination, useDataProvider } from "react-admin";
import { EquipmentsFilter } from "../list/Equipments";
import EquipmentsDialogViewList from "../list/EquipmentsDialogView";
import { HoldersFilter } from "../list/Holders";
import HoldersDialogViewList from "../list/HoldersDialogView";
import { MobilesFilter } from "../list/Mobiles";
import MobilesDialogViewList from "../list/MobilesDialogView";
import { ServicesFilter } from "../list/Services";
import ServicesDialogViewList from "../list/ServicesDialogView";
import useListPermissions from "../../hooks/permissions/list";
import { useDebouncedEffect } from "../../helpers/useDebouncedEffect";
/* eslint max-lines: off */

const useStyles = makeStyles({
    filterRow: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "flex-end"
    }
});

export const DialogEntities = {
    holderId: {
        resource: "holders",
        component: HoldersDialogViewList,
        filters: HoldersFilter
    },
    serviceId: {
        resource: "services",
        component: ServicesDialogViewList,
        filters: ServicesFilter
    },
    equipmentId: {
        resource: "equipments",
        component: EquipmentsDialogViewList,
        filters: EquipmentsFilter
    },
    mobileId: {
        resource: "mobiles",
        component: MobilesDialogViewList,
        filters: MobilesFilter
    },
};

/**
 * Display Popin to select an entity
 *
 * @component
 * @param {Object} props - Component properties
 * @returns {Component} - Popin component
 */
const EntitySelectList = props => {
    /* eslint-disable */
    const classes = useStyles();
    const dataProvider = useDataProvider();
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const [ datas, setDatas ] = useState(false);
    const [ page, setPage ] = useState(1);
    const [ sort, setSort ] = useState({
        field: "id",
        order: "ASC"
    });
    const [ perPage, setPerPage ] = useState(10);
    const [ totalItems, setTotal ] = useState(0);

    const [ displayedFilters, setDisplayedFilters ] = useState({});
    const [ filterVals, setFilterVals ] = useState({});

    const { field, route, component, filter = {}, filters, reference, onChange, value} = props;
    const [ selectedEntity, setSelectedEntity ] = useState(value || "");

    const Entity = DialogEntities[field];

    const permissions = useListPermissions({
        filterValues: {
            ...filterVals,
            ...filter
        },
        resource: route
            ? route
            : Entity
                ? Entity.resource
                : reference
    })
    /* eslint-enable */

    let MyFilter = null;

    if (Entity) {
        MyFilter = Entity.filters || ServicesFilter;
    }

    const updateDatas = () => {
        setLoading(true);
        dataProvider.getList(
            route
                ? route
                : Entity
                    ? Entity.resource
                    : reference
        , {
            pagination: {
                page,
                perPage
            },
            sort,
            filter: {
                ...filterVals,
                ...filter
            },
        }).
        then(({ data, total }) => {
            setDatas(data);
            setTotal(total);
            setLoading(false);
        }).
        catch(err => {
            setError(err);
            setLoading(false);
        })
    }

    const onSort = fieldName => {
        let { order } = sort;

        if (sort.field === fieldName) {
            order = sort.order === "ASC" ? "DESC" : "ASC";
        } else {
            order = "ASC";
        }
        setSort({
            field: fieldName,
            order
        })
    }

    useDebouncedEffect(() => {
        updateDatas();
    }, 1000, [
        perPage,
        page,
        sort,
        filterVals
    ]);

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <Error error={error}/>;
    }
    if (!datas) {
        return null;
    }

    const filterProps = {
        resource: `popin/${Entity ? Entity.resource : reference || ""}`,
        displayedFilters,
        hideFilter: key => {
            setDisplayedFilters({
                ...displayedFilters,
                [key]: false
            })
            const newFilter = pickBy({
                ...filterVals,
                [key]: null
            })

            setFilterVals(newFilter)
        },
        showFilter: key => setDisplayedFilters({
            ...displayedFilters,
            [key]: true
        }),
        setFilters: setFilterVals,
        filterValues: filterVals
    };

    const datagridProps = {
        selected: selectedEntity,
        data: keyBy(datas, "id"),
        ids: datas.map(({ id }) => id),
        basePath: `/${Entity ? Entity.resource : reference || ""}`,
        rowClick: id => {
            setSelectedEntity(id)
            onChange(id)
        },
        isRowSelectable: () => false,
        currentSort: { ...sort },
        setSort: onSort,
        selectedIds: [selectedEntity],
        permissions
    };
    /* eslint no-nested-ternary: "off" */

    return (<ListContextProvider value={{}}>
        <div className={classes.filterRow}>
            {filters
                ? React.cloneElement(
                    filters,
                    {
                        ...filterProps,
                        context: "form"
                    }
                )
                : MyFilter
                    ? <MyFilter {...filterProps} context="form" />
                    : null
            }
            {filters
                ? React.cloneElement(
                    filters,
                    {
                        ...filterProps,
                        context: "button"
                    }
                )
                : MyFilter
                    ? <MyFilter {...filterProps} context="button" />
                    : null
            }
        </div>
        {component
            ? React.cloneElement(
                component,
                datagridProps
            )
            : <Entity.component {...datagridProps} />
        }
        <Pagination
            page={page}
            perPage={perPage}
            setPage={setPage}
            setPerPage={setPerPage}
            total={totalItems}
            count={totalItems}
        />
    </ListContextProvider>);
}

EntitySelectList.propTypes = {
    field: PropTypes.string,
    route: PropTypes.string,
    component: PropTypes.node,
    filter: PropTypes.object,
    filters: PropTypes.node,
    reference: PropTypes.string,
    values: PropTypes.any,
    onchange: PropTypes.func
}

export default EntitySelectList;