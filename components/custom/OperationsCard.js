import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ArrowRight from "@material-ui/icons/KeyboardArrowRight";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Datagrid, FunctionField, ReferenceManyField, ShowButton, SimpleShowLayout,
    useTranslate } from "react-admin";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { DoneOperationIcon, OPERATIONS_TYPES } from "../../helpers/Operations";
import EmptyField from "./EmptyField";
import { useLayout } from "./GridView";
import RecordCard from "./RecordCard";
import RecordRef from "./RecordRef";
import SplitButton from "./SplitButton";
import { isDisplayed } from "../../helpers/permissions";
import TZDateField from "./TZDateField";

const useStyles = makeStyles({
    allowOverflow: {
        overflow: "visible"
    },
    option: {
        display: "flex",
        justifyContent: "center",
        textTransform: "uppercase",
        flex: 1,
        fontSize: "0.9rem"
    },
    bdt: {
        borderTop: "1px solid rgba(224, 224, 224, 1)",
        "& .MuiTableCell-sizeSmall": {
            padding: "4px 0"
        }
    },
    btnRight: {
        "& tr td:last-child": {
            textAlign: "right"
        }
    },
    size: {
        fontSize: "0.9rem"
    }
});

/**
 * Multi actions button for types of operation creation
 *
 * @component
 * @param {Object} props - Properties
 * @returns {Component} - Select options
 */
export const OperationsCreateButton = props => {
    const translate = useTranslate();
    const classes = useStyles();
    const { parentSource, record, label, style, permissions } = props;

    let state = {
        entity: parentSource,
        entityId: record ? record.id : null
    };

    if (!parentSource) {
        state = null;
    }

    const perms = record ? record.permissions : permissions

    /* eslint no-unused-vars: off */
    const operationTypes = Object.entries(OPERATIONS_TYPES).filter(([
        type,
        operation
    ]) => (isDisplayed(perms, operation.actionKey)))
    /* eslint no-shadow: off */

    return operationTypes.length ? <SplitButton
        label={label}
        style={style}>
        {operationTypes.map(([
            type,
            { id, label }
        ]) => (
            <Button
                key={type}
                component={Link}
                className={classes.option}
                to={{
                    pathname: "/operations/create",
                    search: `?type=${id}${
                        state
                        ? (`&${Object.entries(state).map(entrie => entrie.join("=")).
                            join("&")}`)
                        : ""
                    }`,
                }}>
                {translate(`resources.operations.types.button.${label}`)}
            </Button>
        ))}
    </SplitButton> : null;
};

OperationsCreateButton.propTypes = {
    parentSource: PropTypes.string,
    record: PropTypes.object,
    label: PropTypes.string,
    style: PropTypes.any,
    permissions: PropTypes.array
};


/**
 * A custom card of Operations of current entity
 *
 * @component
 * @param {Object} props - Properties
 * @returns {Component} - Card of Operations of current entity
 */
const OperationsCard = props => {
    const translate = useTranslate();
    const classes = {
        ...useLayout(),
        ...useStyles()
    };
    const { className, record, parentSource } = props;

    return (
        <RecordCard {...props} className={[
            className,
            classes.allowOverflow
        ].join(" ")}>
            <SimpleShowLayout>
                <Fragment>
                    <Typography variant="h6" className={classes.cardTitle}>
                        {translate("resources.operations.name")}
                    </Typography>
                    <OperationsCreateButton
                        label={translate(`esop.${parentSource}.bulk.addOperations`)}
                        style={{ float: "right" }}
                        {...{
                            parentSource,
                            record
                        }}/>
                </Fragment>
                {(record && parentSource) &&
                    <RecordRef>
                        <ReferenceManyField label=" " reference="operations" target={parentSource}
                            className={[
                                classes.fullWidth,
                                classes.bdt,
                                classes.btnRight
                            ].join(" ")}>
                                <OperationDatagrid canShowOp={isDisplayed(record.permissions, "getOperationById")}/>
                        </ReferenceManyField>
                        <EmptyField text={translate("resources.operations.empty")}/>
                    </RecordRef>
                }
            </SimpleShowLayout>
        </RecordCard>
    );
};

OperationsCard.propTypes = {
    basePath: PropTypes.string,
    className: PropTypes.string,
    record: PropTypes.object,
    resource: PropTypes.string,
    source: PropTypes.string,
    parentSource: PropTypes.string
};

OperationsCard.defaultProps = {
    source: "operations",
    parentSource: "services"
};

const OperationDatagrid = props => {
    const translate = useTranslate();
    const classes = {
        ...useLayout(),
        ...useStyles()
    };

    const { ids, canShowOp } = props;

    return ids
        ? <Datagrid classes={ { thead: classes.hide } }>
            <FunctionField render={ope => (
                <ListItem style={{ padding: 0 }}>
                    <ListItemIcon>
                        <DoneOperationIcon iconOnly={true}/>
                    </ListItemIcon>
                    <ListItemText style={{ margin: 0 }} primary={
                        translate(`resources.operations.types.${ope.type}`)
                    } secondary={
                        <span>
                            <span style={{ color: "black" }}>{ope.id}</span>
                            <br/>
                            <TZDateField record={ope} addLabel={false} source="common.creationDate"/>
                            &nbsp;-&nbsp;
                            {translate("esop.operations.status.done")}
                        </span>
                    } />
                </ListItem>
            )}/>
            {canShowOp &&
                <ShowButton label={translate("esop.operations.actions.details")}
                    icon={<ArrowRight />} />
            }
        </Datagrid>
        : null;
};

OperationDatagrid.propTypes = {
    ids: PropTypes.array,
    canShowOp: PropTypes.bool
};

export default OperationsCard;
