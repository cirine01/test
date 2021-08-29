import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { ArrayField, Button, Datagrid, SimpleShowLayout, TextField, useTranslate } from "react-admin";
import EmptyField from "./EmptyField";
import { useLayout } from "./GridView";
import RecordCard from "./RecordCard";
import TZDateField from "./TZDateField";

const V1_DISABLED = true;

/**
 * Text display of the issue
 *
 * @component
 * @param {Object} record - The issue as a record
 * @returns {Component} - Issue text
 */
const IssueShow = ({ record = {} }) => (
    <div>{record.description}</div>
);

IssueShow.propTypes = {
    record: PropTypes.object
}

/**
 * A custom card of issues of current entity
 *
 * @component
 * @param {Object} props - Properties
 * @returns {Component} - Card of issues of current entity
 */
const IssuesCard = props => {
    const translate = useTranslate();
    const classes = useLayout();
    const { className, record, source, parentSource } = props;

    if (V1_DISABLED) {
        return null;
    }

    return (
        <RecordCard {...props} className={className}>
            <SimpleShowLayout>
                <Fragment>
                    <Typography variant="h6" className={classes.cardTitle}>
                        {translate("resources.issues.name")}
                    </Typography>
                </Fragment>
                {(record[source] && record[source].length)
                    ? <ArrayField label=" " source={source} className={classes.fullWidth}>
                        <Datagrid expand={<IssueShow />} classes={ { thead: classes.hide } }>
                            <TextField source="title" />
                            <TZDateField source="date" addLabel={false} />
                        </Datagrid>
                    </ArrayField>
                    : <EmptyField text={translate("resources.issues.empty")}/>
                }
                <div className={classes.center}>
                    <Button label={translate(`esop.${parentSource}.bulk.addIssue`)}
                        style={{ color: "red" }}/>
                </div>
            </SimpleShowLayout>
        </RecordCard>
    );
};

IssuesCard.propTypes = {
    basePath: PropTypes.string,
    className: PropTypes.string,
    record: PropTypes.object,
    resource: PropTypes.string,
    source: PropTypes.string,
    parentSource: PropTypes.string
};

IssuesCard.defaultProps = {
    source: "issues",
    parentSource: "services"
};

export default IssuesCard;