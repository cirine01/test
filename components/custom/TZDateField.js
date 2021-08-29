import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { DateField, Labeled, Loading, useTranslate } from "react-admin";
import moment from "moment";

const TZDateField = props => {
    const { record, source, resource, label, addLabel = true } = props;
    const translate = useTranslate();
    const [
        cloneRec,
        setCloneRec
    ] = useState({ ...record });

    useEffect(() => {
        if (
            record &&
            source &&
            record[source]
        ) {
            const date = moment.parseZone(`${record[source]}+00:00`);

            setCloneRec({
                ...record,
                [source]: date.toString()
            })
        }
    }, [record])

    if (!record) {
        return <Loading />;
    }

    if (!addLabel) {
        return (
            <DateField {...props} record={cloneRec} />
        );
    }

    return (
        <Labeled label={label || translate(`resources.${resource}.fields.${source}`)}>
            <DateField {...props} record={cloneRec} />
        </Labeled>
    )
};

TZDateField.propTypes = {
    resource: PropTypes.string,
    label: PropTypes.string,
    record: PropTypes.object,
    source: PropTypes.string.isRequired,
    addLabel: PropTypes.any
};

export default TZDateField;