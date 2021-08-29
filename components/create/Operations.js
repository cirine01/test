import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { parse } from "query-string";
import React, { Fragment } from "react";
import {
    Create,
    DateInput, FormDataConsumer, Labeled,
    RadioButtonGroupInput, SimpleForm, TextInput, useTranslate,
    ReferenceField, TextField, FunctionField
} from "react-admin";
import {
    AOR, CLOSURE, CreateOperationIcon, INSTALLATION, OPERATIONS_TYPES, PAIR, SIMPLE, START_UP,
    useOpStyles
} from "../../helpers/Operations";
import useClient from "../../hooks/client";
import { useLayout } from "../custom/GridView";
import OperationChildren from "../custom/OperationChildren";
import RecordCard from "../custom/RecordCard";
import RecordRef from "../custom/RecordRef";
import { CurrentCreateActions } from "../custom/ToolbarActions";
import { successHandlerInstallation } from "../../helpers/handlersInstallation";
import { successHandlerStartUp } from "../../helpers/handlersStartUp";
import { PostCreateToolbarOperation, ClosureOperationsCreateToolbar } from "../custom/DialogConfirmationButton";

/* eslint max-lines: off */

/**
 * Function that returns default values to initialize an operation
 *
 * @function
 * @param {String} type - A valid Operation type
 * @returns {Object} - default values
 */
const operationDefaultValue = type => {
    const client = useClient();
    const values = {
        comments: "",
        doerContactId: client ? client.uuid : "",
        doerId: client ? client.attributes.organizationId : "",
        type
    };

    switch (type) {
        case INSTALLATION:
        case START_UP:
        case AOR:
        case SIMPLE:
        case PAIR:
            return values;
        case CLOSURE:
            return {
                ...values,
                closureType: "AT_TERM"
            };
        default:
            return null;
    }
};

/**
 * This components display the layout depending on the Operation type
 *
 * @component
 * @param {Object} props - Properties of the component
 * @returns {Component} - Return component to create an operation
 */
const OperationsCreateLayout = props => {
    const { entity, entityId, type } = parse(props.location.search);
    const translate = useTranslate();
    const classes = {
        ...useOpStyles(),
        ...useLayout()
    };

    const {
        basePath,
        record,
        redirect,
        resource,
        save,
        saving,
        version,
        toolbar
    } = props;

    return (
        <Create {...props}
            component="div"
            actions={
                <CurrentCreateActions
                    title={translate("esop.operations.create.title")}
                    listable={true}
                />
            }>
            <SimpleForm
                className={classes.form}
                initialValues={operationDefaultValue(type)}
                redirect={(basePathOp, id) => `${basePathOp}/${id}/show`}
                toolbar={toolbar}
            >
                <RecordRef className={classes.operationLayout}>
                    <RecordRef className={classes.colStart}>
                        <RecordCard className={[
                            classes.mainCard,
                            classes.opCreate
                        ].join(" ")}>
                            <Fragment>
                                <Typography variant="h6" className={classes.title}>
                                    {translate("esop.operations.create.title_features")}
                                </Typography>
                            </Fragment>
                            <RecordRef className={classes.dualGrid}>
                                {React.Children.map(props.children, field => (field
                                    ? React.cloneElement(field, {
                                        basePath,
                                        record,
                                        redirect,
                                        resource,
                                        save,
                                        saving,
                                        version
                                    })
                                    : "")
                                )}
                            </RecordRef>
                            <Fragment>
                                <Typography variant="h6" className={classes.title}>
                                    {translate("resources.operations.fields.comments")}
                                </Typography>
                            </Fragment>
                            <TextInput multiline source="comments"
                                fullWidth
                                inputProps={{
                                    maxLength: 1000
                                }} />
                        </RecordCard>
                    </RecordRef>
                    <FormDataConsumer>
                        {({ formData }) => <OperationChildren
                                entities={OPERATIONS_TYPES[type].entities}
                                formData={formData}
                                type={type}
                                preSelect={{
                                    entity,
                                    entityId
                                }}
                            />
                        }
                    </FormDataConsumer>
                </RecordRef>
            </SimpleForm>
        </Create>
    )
};

OperationsCreateLayout.propTypes = {
    children: PropTypes.node,
    location: PropTypes.object,
    search: PropTypes.string,
    basePath: PropTypes.string,
    record: PropTypes.object,
    redirect: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    resource: PropTypes.string,
    save: PropTypes.func,
    saving: PropTypes.any,
    version: PropTypes.any,
    toolbar: PropTypes.node
}

/**
 * This components display the layout for Operations of type Installation
 *
 * @component
 * @param {String} type - Type of the operation
 * @param {Object} props - Properties of the component
 * @returns {Component} - Return component to create an operation
 */
const InstallOperationsCreate = ({ type = "", ...props }) => {
    const translate = useTranslate();
    const client = useClient();
    const typeOpe = translate(`resources.operations.types.${type}`)

    return (
        <OperationsCreateLayout {...props}
            toolbar={<PostCreateToolbarOperation
                typeOpe={typeOpe}
                resource="operations" />}
            onSuccess={successHandlerInstallation("resources.operations.createdInstallation", props)}>
            <Labeled label={translate("resources.operations.fields.type")}>
                <Fragment>
                    <Typography>{translate(`resources.operations.types.${type}`)}</Typography>
                </Fragment>
            </Labeled>
            <Labeled label={translate("resources.operations.fields.id")}>
                <Fragment>
                    <Typography>-</Typography>
                </Fragment>
            </Labeled>
            <Labeled label={translate("resources.operations.fields.status")}>
                <Fragment>
                    <CreateOperationIcon/>
                </Fragment>
            </Labeled>

            {client && <FunctionField
                source="organizationId"
                render={record => {
                    record.organizationId = client.attributes.organizationId;
                    return (
                        <Labeled label={translate("resources.operations.fields.doerId")}>
                            <ReferenceField {...props} record={record} link={false}
                                source="organizationId" reference="persons">
                                <TextField source="name" />
                            </ReferenceField>
                        </Labeled>
                    )
                }}
            />}

            {client &&
                <Labeled label={translate("resources.operations.fields.doerContactId")}>
                    <Fragment>
                        <Typography>{client.attributes.firstname
                        ? `${client.attributes.firstname} ${client.attributes.lastname}`
                        : `${client.attributes.lastname}`}</Typography>
                    </Fragment>
                </Labeled>
            }
        </OperationsCreateLayout>
    )
};

InstallOperationsCreate.propTypes = {
    type: PropTypes.string
};

/**
 * This components display the layout for Operations of type Start-Up
 *
 * @component
 * @param {String} type - Type of the operation
 * @param {Object} props - Properties of the component
 * @returns {Component} - Return component to create an operation
 */
const StartUpOperationsCreate = ({ type = "", ...props }) => {
    const translate = useTranslate();
    const client = useClient();
    const typeOpe = translate(`resources.operations.types.${type}`)

    return (
        <OperationsCreateLayout {...props}
            toolbar={<PostCreateToolbarOperation
                typeOpe={typeOpe}
                resource="operations" />}
            onSuccess={successHandlerStartUp("resources.operations.createdStartup", props)} >
            <Labeled label={translate("resources.operations.fields.type")}>
                <Fragment>
                    <Typography>{translate(`resources.operations.types.${type}`)}</Typography>
                </Fragment>
            </Labeled>
            <Labeled label={translate("resources.operations.fields.id")}>
                <Fragment>
                    <Typography>-</Typography>
                </Fragment>
            </Labeled>
            <Labeled label={translate("resources.operations.fields.status")}>
                <Fragment>
                    <CreateOperationIcon/>
                </Fragment>
            </Labeled>

            {client && <FunctionField
                source="organizationId"
                render={record => {
                    record.organizationId = client.attributes.organizationId;
                    return (
                        <Labeled label={translate("resources.operations.fields.doerId")}>
                            <ReferenceField {...props} record={record} source="organizationId" link={false}
                                reference="persons">
                                <TextField source="name" />
                            </ReferenceField>
                        </Labeled>
                    )
                }}
            />}

            {client &&
                <Labeled label={translate("resources.operations.fields.doerContactId")}>
                    <Fragment>
                        <Typography>{client.attributes.firstname
                        ? `${client.attributes.firstname} ${client.attributes.lastname}`
                        : `${client.attributes.lastname}`}</Typography>
                    </Fragment>
                </Labeled>
            }
        </OperationsCreateLayout>
    )
};

StartUpOperationsCreate.propTypes = {
    type: PropTypes.string
};

/**
 * This components display the layout for Operations of type AOR
 *
 * @component
 * @param {String} type - Type of the operation
 * @param {Object} props - Properties of the component
 * @returns {Component} - Return component to create an operation
 */
const AorOperationsCreate = ({ type = "", ...props }) => {
    const translate = useTranslate();
    const client = useClient();
    const typeOpe = translate(`resources.operations.types.${type}`)

    return (
        <OperationsCreateLayout {...props}
            toolbar={<PostCreateToolbarOperation
                typeOpe={typeOpe}
                resource="operations" />}
        >
            <Labeled label={translate("resources.operations.fields.type")}>
                <Fragment>
                    <Typography>{translate(`resources.operations.types.${type}`)}</Typography>
                </Fragment>
            </Labeled>
            <Labeled label={translate("resources.operations.fields.id")}>
                <Fragment>
                    <Typography>-</Typography>
                </Fragment>
            </Labeled>
            <Labeled label={translate("resources.operations.fields.status")}>
                <Fragment>
                    <CreateOperationIcon/>
                </Fragment>
            </Labeled>

            {client && <FunctionField
                source="organizationId"
                render={record => {
                    record.organizationId = client.attributes.organizationId;
                    return (
                        <Labeled label={translate("resources.operations.fields.doerId")}>
                            <ReferenceField {...props} record={record} source="organizationId" link={false}
                            reference="persons">
                                <TextField source="name" />
                            </ReferenceField>
                        </Labeled>
                    )
                }}
            />}

            {client &&
                <Labeled label={translate("resources.operations.fields.doerContactId")}>
                    <Fragment>
                        <Typography>{client.attributes.firstname
                        ? `${client.attributes.firstname} ${client.attributes.lastname}`
                        : `${client.attributes.lastname}`}</Typography>
                    </Fragment>
                </Labeled>
            }
        </OperationsCreateLayout>
    )
};

AorOperationsCreate.propTypes = {
    type: PropTypes.string
};

/**
 * This components display the layout for Operations of type Closure
 *
 * @component
 * @param {String} type - Type of the operation
 * @param {Object} props - Properties of the component
 * @returns {Component} - Return component to create an operation
 */
const ClosureOperationsCreate = ({ type = "", ...props }) => {
    const translate = useTranslate();
    const client = useClient();
    const typeOpe = translate(`resources.operations.types.${type}`)

    return (
        <OperationsCreateLayout {...props}
            toolbar={<ClosureOperationsCreateToolbar
                typeOpe={typeOpe}
                resource="operations"/>}>
            <Labeled label={translate("resources.operations.fields.type")}>
                <Fragment>
                    <Typography>{translate(`resources.operations.types.${type}`)}</Typography>
                </Fragment>
            </Labeled>
            <Labeled label={translate("resources.operations.fields.id")}>
                <Fragment>
                    <Typography>-</Typography>
                </Fragment>
            </Labeled>
            <Labeled label={translate("resources.operations.fields.status")}>
                <Fragment>
                    <CreateOperationIcon/>
                </Fragment>
            </Labeled>

            {client && <FunctionField
                source="organizationId"
                render={record => {
                    record.organizationId = client.attributes.organizationId;
                    return (
                        <Labeled label={translate("resources.operations.fields.doerId")}>
                            <ReferenceField {...props} record={record} source="organizationId" link={false}
                            reference="persons">
                                <TextField source="name" />
                            </ReferenceField>
                        </Labeled>
                    )
                }}
            />}

            {client &&
                <Labeled label={translate("resources.operations.fields.doerContactId")}>
                    <Fragment>
                        <Typography>{client.attributes.firstname
                        ? `${client.attributes.firstname} ${client.attributes.lastname}`
                        : `${client.attributes.lastname}`}</Typography>
                    </Fragment>
                </Labeled>
            }
            <RecordRef/>
            <RadioButtonGroupInput source="closureType"
                label={translate("resources.operations.fields.closureDate.label")}
                choices={[
                    {
                        id: "AT_SPECIFIED_DATE",
                        name: "resources.operations.fields.closureDate.AT_SPECIFIED_DATE"
                    },
                    {
                        id: "AT_TERM",
                        name: "resources.operations.fields.closureDate.AT_TERM"
                    }
                ]} />
            <FormDataConsumer>
                {({ formData, ...rest }) => <DateInput {...rest} source="closureDate" disabled={
                    formData.closureType === "AT_TERM"}
                    label={translate("resources.operations.fields.specific.closureDate")}/>}
            </FormDataConsumer>

        </OperationsCreateLayout>
    )
};

ClosureOperationsCreate.propTypes = {
    type: PropTypes.string
};

/**
 * This components display the layout for Operations of type SIMPLE
 *
 * @component
 * @param {String} type - Type of the operation
 * @param {Object} props - Properties of the component
 * @returns {Component} - Return component to create an operation
 */
const SimpleOperationsCreate = ({ type = "", ...props }) => {
    const translate = useTranslate();
    const client = useClient();
    const typeOpe = translate(`resources.operations.types.${type}`)

    return (
        <OperationsCreateLayout {...props}
            toolbar={<PostCreateToolbarOperation
                typeOpe={typeOpe}
                resource="operations" />}
        >
            <Labeled label={translate("resources.operations.fields.type")}>
                <Fragment>
                    <Typography>{translate(`resources.operations.types.${type}`)}</Typography>
                </Fragment>
            </Labeled>
            <Labeled label={translate("resources.operations.fields.id")}>
                <Fragment>
                    <Typography>-</Typography>
                </Fragment>
            </Labeled>
            <Labeled label={translate("resources.operations.fields.status")}>
                <Fragment>
                    <CreateOperationIcon/>
                </Fragment>
            </Labeled>

            {client && <FunctionField
                source="organizationId"
                render={record => {
                    record.organizationId = client.attributes.organizationId;
                    return (
                        <Labeled label={translate("resources.operations.fields.doerId")}>
                            <ReferenceField {...props} record={record} source="organizationId" link={false}
                            reference="persons">
                                <TextField source="name" />
                            </ReferenceField>
                        </Labeled>
                    )
                }}
            />}

            {client &&
                <Labeled label={translate("resources.operations.fields.doerContactId")}>
                    <Fragment>
                        <Typography>{client.attributes.firstname
                        ? `${client.attributes.firstname} ${client.attributes.lastname}`
                        : `${client.attributes.lastname}`}</Typography>
                    </Fragment>
                </Labeled>
            }
        </OperationsCreateLayout>
    )
};

SimpleOperationsCreate.propTypes = {
    type: PropTypes.string
};

/**
 * This components display the layout for Operations of type PAIR
 *
 * @component
 * @param {String} type - Type of the operation
 * @param {Object} props - Properties of the component
 * @returns {Component} - Return component to create an operation
 */
const PairOperationsCreate = ({ type = "", ...props }) => {
    const translate = useTranslate();
    const client = useClient();
    const typeOpe = translate(`resources.operations.types.${type}`)


    return (
        <OperationsCreateLayout {...props}
            toolbar={<PostCreateToolbarOperation
                typeOpe={typeOpe}
                resource="operations" />}
        >
            <Labeled label={translate("resources.operations.fields.type")}>
                <Fragment>
                    <Typography>{translate(`resources.operations.types.${type}`)}</Typography>
                </Fragment>
            </Labeled>
            <Labeled label={translate("resources.operations.fields.id")}>
                <Fragment>
                    <Typography>-</Typography>
                </Fragment>
            </Labeled>
            <Labeled label={translate("resources.operations.fields.status")}>
                <Fragment>
                    <CreateOperationIcon/>
                </Fragment>
            </Labeled>

            {client && <FunctionField
                source="organizationId"
                render={record => {
                    record.organizationId = client.attributes.organizationId;
                    return (
                        <Labeled label={translate("resources.operations.fields.doerId")}>
                            <ReferenceField {...props} record={record} source="organizationId" link={false}
                            reference="persons">
                                <TextField source="name" />
                            </ReferenceField>
                        </Labeled>
                    )
                }}
            />}

            {client &&
                <Labeled label={translate("resources.operations.fields.doerContactId")}>
                    <Fragment>
                        <Typography>{client.attributes.firstname
                        ? `${client.attributes.firstname} ${client.attributes.lastname}`
                        : `${client.attributes.lastname}`}</Typography>
                    </Fragment>
                </Labeled>
            }
        </OperationsCreateLayout>
    )
};

PairOperationsCreate.propTypes = {
    type: PropTypes.string
};

/**
 * This component allows to create new operations
 *
 * @component
 * @param {Object} props - Properties to be applied to the main component of the form
 * @returns {Component} - Return a form to create an operation
 */
const OperationsCreate = props => {
    const { type } = parse(props.location.search);

    switch (type) {
        case INSTALLATION:
            return <InstallOperationsCreate {...props} type={type} />;
        case START_UP:
            return <StartUpOperationsCreate {...props} type={type} />;
        case AOR:
            return <AorOperationsCreate {...props} type={type} />;
        case CLOSURE:
            return <ClosureOperationsCreate {...props} type={type} />;
        case SIMPLE:
            return <SimpleOperationsCreate {...props} type={type} />;
        case PAIR:
            return <PairOperationsCreate {...props} type={type} />
        default:
            return "";
    }
};

OperationsCreate.propTypes = {
    search: PropTypes.any
}

export default OperationsCreate;