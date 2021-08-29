import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Button, useTranslate } from "react-admin";
import EntityDialog from "../custom/EntityDialog";
import AllocateMultipleDialog from "./AllocateMultipleDialog";
import { mapToType } from "../../helpers/entities";


const AllocateMultipleButton = props => {
    const translate = useTranslate();
    const [
        leftIds,
        setLeftIds
    ] = useState([]);
    const [
        rightIds,
        setRightIds
    ] = useState([]);
    const [
        linking,
        setLinking
    ] = useState(false);
    const { label, resource, reference, filters, component, selectedIds, filter, route, dialogActions } = props;

    const handleClick = () => setLeftIds(selectedIds)

    const handleStep1 = values => {
        setRightIds(values)
        setLinking(true)
    }

    const title = translate(
        `esop.bulk.massLink`, {
            resource: translate(`resources.${resource}.name`).toLowerCase(),
            reference: translate(`resources.${reference}.name`).toLowerCase()
        }
    );

    return (
        (leftIds && leftIds.length)
        ? <Fragment>
            <EntityDialog {...{
                reference,
                filters,
                component,
                dialogActions,
                label,
                title,
                max: false,
                filter: {
                    entityType: mapToType(resource),
                    ...filter
                },
                route: route || `${reference}`
            }} onChoose={handleStep1}
            button={ <Button label={label} /> }
            open={true} />
            {linking
                ? <AllocateMultipleDialog
                    {...{
                        resource,
                        reference,
                        leftIds,
                        rightIds,
                    }} />
                : ""
            }
        </Fragment>
        : <Button label={label} onClick={handleClick}/>
    );
}

AllocateMultipleButton.propTypes = {
    basePath: PropTypes.string,
    resource: PropTypes.string,
    selectedIds: PropTypes.array,
    reference: PropTypes.string,
    label: PropTypes.string,
    component: PropTypes.node,
    filters: PropTypes.node,
    filter: PropTypes.object,
    route: PropTypes.string,
    dialogActions: PropTypes.node
};

export default AllocateMultipleButton;