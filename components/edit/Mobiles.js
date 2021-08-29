import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Edit, required, SelectInput, SimpleForm, TextInput, useTranslate, Toolbar,
    SaveButton, DeleteWithConfirmButton, TextField, ReferenceField } from "react-admin";
import { successHandler } from "../../helpers/handlers";
import useTypesMobiles from "../../hooks/types/mobiles";
import { useLayout } from "../custom/GridView";
import RecordCard from "../custom/RecordCard";
import RecordRef from "../custom/RecordRef";
import { CurrentEditActions } from "../custom/ToolbarActions";
import { isDisplayed } from "../../helpers/permissions";
import { makeStyles } from "@material-ui/core/styles";

/**
 * This component displays the current title of the view
 *
 * @component
 * @param {Object} record - Record used to build title
 * @returns {Component} - Return the title
 */
const CurrentTitle = ({ record = {} }) => (
    <span>
        {record.rc === null
            ? `${record.type} ${record.name}`
            : `${record.type} ${record.name} (${record.rc})`
        }
    </span>
);

CurrentTitle.propTypes = {
record: PropTypes.object
};

/**
 * This component allows to add permissions on the show button
 *
 * @component
 * @param {Object} props - Properties to be applied to the main component of the form
 * @returns {Component} - Return a show button on the edit Top Tool Bar
 */
const MobilesEditActions = props => {
    const { data } = props;

    return data ? <CurrentEditActions {...props}
                editable={isDisplayed(data.permissions, "getMobileById")} />
                : null
}

MobilesEditActions.propTypes = {
    data: PropTypes.object
}

const useStyles = makeStyles({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
});

const CustomToolbar = props => {
    const { record } = props;
    const translate = useTranslate();
    const classes = useStyles();

    return (record
        ? <Toolbar {...props} className={classes.toolbar}>
            <SaveButton undoable={false} />
            {isDisplayed(record.permissions, "deleteMobileById") &&
                <DeleteWithConfirmButton
                    undoable={false}
                    confirmTitle = {translate(`resources.deleteConfirmation.title`)}
                    confirmContent={translate("resources.mobiles.deletedContact",
                    { name: record.name })}
                />
            }
        </Toolbar>
        : null
    )
};

CustomToolbar.propTypes = {
    record: PropTypes.object
}

/**
 * This component allows to edit mobiles
 *
 * @component
 * @param {Object} props - Properties to be applied to the main component of the form
 * @returns {Component} - Return a form to edit a mobile
 */
const MobilesEdit = props => {
    const translate = useTranslate();
    const classes = useLayout();

    return (
        <Edit {...props}
            component="div"
            actions={<MobilesEditActions />}
            title={<CurrentTitle />}
            undoable={false}
            onSuccess={successHandler("resources.mobiles.updated", props)}>
            <RecordRef>
                <RecordCard className={classes.mainCard}>
                    <Fragment>
                        <Typography variant="h6" className={classes.cardTitle}>
                            {translate("esop.mobiles.show.title_features")}
                        </Typography>
                    </Fragment>
                    <SimpleForm className={classes.grid} toolbar={<CustomToolbar />}>
                        <SelectInput source="type" choices={useTypesMobiles()} validate={required()} />
                        <TextInput source="name"
                            validate={required()}
                            inputProps={{
                                maxLength: 100
                            }}/>
                        <TextInput source="ir"
                            inputProps={{
                                maxLength: 20
                            }}/>
                        <TextInput source="xr"
                            inputProps={{
                                maxLength: 20
                            }} />
                        <TextInput source="rc"
                            inputProps={{
                                maxLength: 20
                            }}/>
                        <TextInput source="flag"
                            inputProps={{
                                maxLength: 3
                            }} />
                        <ReferenceField source="ownerId" reference="persons" link={false}>
                            <TextField source="name"/>
                        </ReferenceField>
                        <ReferenceField source="creatorId" reference="persons" link={false}>
                            <TextField source="name"/>
                        </ReferenceField>
                    </SimpleForm>
                </RecordCard>
            </RecordRef>
        </Edit>
    )
};

export default MobilesEdit;