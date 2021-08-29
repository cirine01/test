import React, { useState, useCallback } from "react";
import { Confirm, SaveButton, useNotify, useRedirect, useCreate,
    useTranslate } from "react-admin";
import { useFormState } from "react-final-form";
import { useLayout } from "../custom/GridView";
import PropTypes from "prop-types";

/* eslint max-lines: off */

// Create button & dialog confirmation on CONTACTS & RECIPIENTS

export const SaveWithConfirmButton = ({ resource, ...props }) => {
    const { basePath, redirect, lastName, firstName } = props;
    const classes = useLayout();
    const redirectTo = useRedirect();
    const notify = useNotify();
    const formState = useFormState();
    const translate = useTranslate();

    const [
        create,
        { loading }
    ] = useCreate(resource);

    const [
        open,
        setOpen
    ] = useState(false);

    const handleDialogClick = () => {
        setOpen(true);
    };

    const handleDialogClose = evt => {
        setOpen(false);
        evt.stopPropagation();
    };

    const handleSave = useCallback(
        () => {

        create(
            {
                payload: { data: { ...formState.values } }
            },
            {
                onSuccess: ({ data: newRecord }) => {
                    notify(`resources.${resource}.created`, "info",
                        {
                            lastname: lastName.value,
                            firstname: firstName.value || " "
                        }
                    );
                    redirectTo(redirect, basePath, newRecord.id, newRecord);
                },
                onFailure: error => {
                    notify(
                        typeof error === "string"
                        ? error
                        : error.message || "ra.notification.http_error",
                        "warning"
                    );
                    setOpen(false);
            }
            }
        );
    },
    [
        create,
        notify,
        redirectTo,
        formState
    ]
    );

    return (
        <>
            <SaveButton {...props} onSave={handleDialogClick} className={classes.saveButton}/>
            {firstName.value
                ? <Confirm
                    isOpen={open}
                    loading={loading}
                    title={translate(`resources.dialogConfirmation.title`)}
                    content={translate(`resources.${resource}.createdContact`,
                            { lastname: lastName.value,
                            firstname: firstName.value })}
                    onConfirm={handleSave}
                    confirm={translate(`resources.dialogConfirmation.confirm`)}
                    onClose={handleDialogClose}
                    cancel={translate(`resources.dialogConfirmation.cancel`)}
                />
                : <Confirm
                    isOpen={open}
                    loading={loading}
                    title={translate(`resources.dialogConfirmation.title`)}
                    content={translate(`resources.${resource}.createdContact`,
                            { lastname: lastName.value,
                            firstname: "" })}
                    onConfirm={handleSave}
                    confirm={translate(`resources.dialogConfirmation.confirm`)}
                    onClose={handleDialogClose}
                    cancel={translate(`resources.dialogConfirmation.cancel`)}
                />
            }
        </>
    );
};


SaveWithConfirmButton.propTypes = {
    resource: PropTypes.string,
    redirect: PropTypes.string,
    basePath: PropTypes.any,
    lastName: PropTypes.any,
    firstName: PropTypes.any
}


/**
 * This component implements create button & dialog confirmation on Mobile
 *
 * @component
 * @param {String} props - properties
 * @returns {Component} - Return the create button on outcoming contract
 */
export const PostCreateToolbarMobiles = ({ resource, ...props }) => {
    const { basePath, redirect, name } = props;
    const redirectTo = useRedirect();
    const classes = useLayout();
    const notify = useNotify();
    const formState = useFormState();
    const translate = useTranslate();

    const [
        create,
        { loading }
    ] = useCreate(resource);

    const [
        open,
        setOpen
    ] = useState(false);

    const handleDialogClick = () => {
        setOpen(true);
    };

    const handleDialogClose = evt => {
        setOpen(false);
        evt.stopPropagation();
    };

    const handleSave = useCallback(
        () => {

        create(
            {
                payload: { data: { ...formState.values } }
            },
            {
                onSuccess: ({ data: newRecord }) => {
                    notify(`resources.${resource}.created`, "info",
                        {
                            name: name.value
                        }
                    );
                    redirectTo(redirect, basePath, newRecord.id, newRecord);
                },
                onFailure: error => {
                    notify(
                        typeof error === "string"
                        ? error
                        : error.message || "ra.notification.http_error",
                        "warning"
                    );
                    setOpen(false);
            }
            }
        );
    },
    [
        create,
        notify,
        redirectTo,
        formState
    ]
    );

    return (
        <>
            <SaveButton {...props} onSave={handleDialogClick} className={classes.saveButton} />
                <Confirm
                    isOpen={open}
                    loading={loading}
                    title={translate(`resources.dialogConfirmation.title`)}
                    content={translate(`resources.${resource}.confirmationMessage`,
                            { name: name.value })}
                    onConfirm={handleSave}
                    confirm={translate(`resources.dialogConfirmation.confirm`)}
                    onClose={handleDialogClose}
                    cancel={translate(`resources.dialogConfirmation.cancel`)}
                />
        </>
    );
};


PostCreateToolbarMobiles.propTypes = {
    resource: PropTypes.string,
    redirect: PropTypes.string,
    basePath: PropTypes.any,
    name: PropTypes.any,
}

/**
 * This component implements create button & dialog confirmation on Persons
 *
 * @component
 * @param {String} props - properties
 * @returns {Component} - Return the create button on outcoming contract
 */
export const PostCreateToolbarPersons = ({ resource, ...props }) => {
    const { basePath, redirect, name, profile } = props;
    const redirectTo = useRedirect();
    const classes = useLayout();
    const notify = useNotify();
    const formState = useFormState();
    const translate = useTranslate();

    const [
        create,
        { loading }
    ] = useCreate(resource);

    const [
        open,
        setOpen
    ] = useState(false);

    const handleDialogClick = () => {
        setOpen(true);
    };

    const handleDialogClose = evt => {
        setOpen(false);
        evt.stopPropagation();
    };

    const handleSave = useCallback(
        () => {

        create(
            {
                payload: { data: { ...formState.values } }
            },
            {
                onSuccess: ({ data: newRecord }) => {
                    notify(`resources.${resource}.created`, "info",
                        {
                            name: name.value,
                            profile: profile.value
                        }
                    );
                    redirectTo(redirect, basePath, newRecord.id, newRecord);
                },
                onFailure: error => {
                    notify(
                        typeof error === "string"
                        ? error
                        : error.message || "ra.notification.http_error",
                        "warning"
                    );
                    setOpen(false);
            }
            }
        );
    },
    [
        create,
        notify,
        redirectTo,
        formState
    ]
    );

    return (
        <>
            <SaveButton {...props} onSave={handleDialogClick} className={classes.saveButton}/>
                <Confirm
                    isOpen={open}
                    loading={loading}
                    title={translate(`resources.dialogConfirmation.title`)}
                    content={translate(`resources.${resource}.confirmationMessage`,
                            { name: name.value,
                            profile: profile.value })}
                    onConfirm={handleSave}
                    confirm={translate(`resources.dialogConfirmation.confirm`)}
                    onClose={handleDialogClose}
                    cancel={translate(`resources.dialogConfirmation.cancel`)}
                />
        </>
    );
};


PostCreateToolbarPersons.propTypes = {
    resource: PropTypes.string,
    redirect: PropTypes.string,
    basePath: PropTypes.any,
    name: PropTypes.any,
    profile: PropTypes.any
}

/**
 * This component implements create button & dialog confirmation on Contracts
 *  / Support Request / Purchase Forecast / Groups
 *
 * @component
 * @param {String} props - properties
 * @returns {Component} - Return the create button on outcoming contract
 */
export const PostCreateToolbarContracts = ({ resource, ...props }) => {
    const { basePath, redirect } = props;
    const classes = useLayout();
    const redirectTo = useRedirect();
    const notify = useNotify();
    const formState = useFormState();
    const translate = useTranslate();

    const [
        create,
        { loading }
    ] = useCreate(resource);

    const [
        open,
        setOpen
    ] = useState(false);

    const handleDialogClick = () => {
        setOpen(true);
    };

    const handleDialogClose = evt => {
        setOpen(false);
        evt.stopPropagation();
    };

    const handleSave = useCallback(
        () => {

        create(
            {
                payload: { data: { ...formState.values } }
            },
            {
                onSuccess: ({ data: newRecord }) => {
                    notify(`resources.${resource}.created`, "info");
                    redirectTo(redirect, basePath, newRecord.id, newRecord);
                },
                onFailure: error => {
                    notify(
                        typeof error === "string"
                        ? error
                        : error.message || "ra.notification.http_error",
                        "warning"
                    );
                    setOpen(false);
            }
            }
        );
    },
    [
        create,
        notify,
        redirectTo,
        formState
    ]
    );

    return (
        <>
            <SaveButton {...props} onSave={handleDialogClick} className={classes.saveButton} />
                <Confirm
                    isOpen={open}
                    loading={loading}
                    title={translate(`resources.dialogConfirmation.title`)}
                    content={translate(`resources.${resource}.createdContract`)}
                    onConfirm={handleSave}
                    confirm={translate(`resources.dialogConfirmation.confirm`)}
                    onClose={handleDialogClose}
                    cancel={translate(`resources.dialogConfirmation.cancel`)}
                />
        </>
    );
};

PostCreateToolbarContracts.propTypes = {
    resource: PropTypes.string,
    redirect: PropTypes.string,
    basePath: PropTypes.any,
}

/**
 * This component implements create button & dialog confirmation on Operations
 *
 * @component
 * @param {String} props - properties
 * @returns {Component} - Return the create button on operation
 */
export const PostCreateToolbarOperation = ({ resource, ...props }) => {
    const { basePath, redirect, typeOpe } = props;
    const redirectTo = useRedirect();
    const classes = useLayout();
    const notify = useNotify();
    const formState = useFormState();
    const translate = useTranslate();

    const [
        create,
        { loading }
    ] = useCreate(resource);

    const [
        open,
        setOpen
    ] = useState(false);

    const handleDialogClick = () => {
        setOpen(true);
    };

    const handleDialogClose = evt => {
        setOpen(false);
        evt.stopPropagation();
    };

    const handleSave = useCallback(
        () => {

        create(
            {
                payload: { data: { ...formState.values } }
            },
            {
                onSuccess: ({ data: newRecord }) => {
                    notify(`resources.${resource}.created`, "info",
                        {
                            type: typeOpe
                        }
                    );
                    redirectTo(redirect, basePath, newRecord.id, newRecord);
                },
                onFailure: error => {
                    notify(
                        typeof error === "string"
                        ? error
                        : error.message || "ra.notification.http_error",
                        "warning"
                    );
                    setOpen(false);
            }
            }
        );
    },
    [
        create,
        notify,
        redirectTo,
        formState
    ]
    );

    return (
        <>
            <SaveButton {...props} onSave={handleDialogClick} className={classes.saveButton} />
                <Confirm
                    isOpen={open}
                    loading={loading}
                    title={translate(`resources.dialogConfirmation.title`)}
                    content={translate(`resources.${resource}.confirmationMessage`,
                            { type: typeOpe })}
                    onConfirm={handleSave}
                    confirm={translate(`resources.dialogConfirmation.confirm`)}
                    onClose={handleDialogClose}
                    cancel={translate(`resources.dialogConfirmation.cancel`)}
                />
        </>
    );
};


PostCreateToolbarOperation.propTypes = {
    resource: PropTypes.string,
    redirect: PropTypes.string,
    basePath: PropTypes.any,
    typeOpe: PropTypes.string
}

export const ClosureOperationsCreateToolbar = ({ resource, ...props }) => {
        /* eslint no-undefined: off */

    const { basePath, redirect, typeOpe } = props;
    const redirectTo = useRedirect();
    const notify = useNotify();
    const classes = useLayout();
    const formState = useFormState();
    const translate = useTranslate();

    const [
        create,
        { loading }
    ] = useCreate(resource);

    const [
        open,
        setOpen
    ] = useState(false);

    const handleDialogClick = () => {
        setOpen(true);
    };

    const handleDialogClose = evt => {
        setOpen(false);
        evt.stopPropagation();
    };

    const handleSave = useCallback(
        () => {

        create(
            {
                payload: { data: { ...formState.values } }
            },
            {
                onSuccess: ({ data: newRecord }) => {
                    notify(`resources.${resource}.created`, "info",
                        {
                            type: typeOpe
                        }
                    );
                    redirectTo(redirect, basePath, newRecord.id, newRecord);
                },
                onFailure: error => {
                    notify(
                        typeof error === "string"
                        ? error
                        : error.message || "ra.notification.http_error",
                        "warning"
                    );
                    setOpen(false);
            }
            }
        );
    },
    [
        create,
        notify,
        redirectTo,
        formState
    ]
    );

    return (
        <>
            <SaveButton {...props}
                className={classes.saveButton}
                onSave={handleDialogClick}
                transform={data => ({ ...data,
                    closureDate: data.closureType === "AT_TERM"
                        ? null
                        : data.closureDate,
                    closureType: undefined })}
            />
            <Confirm
                isOpen={open}
                loading={loading}
                title={translate(`resources.dialogConfirmation.title`)}
                content={translate(`resources.${resource}.confirmationMessage`,
                        { type: typeOpe })}
                onConfirm={handleSave}
                confirm={translate(`resources.dialogConfirmation.confirm`)}
                onClose={handleDialogClose}
                cancel={translate(`resources.dialogConfirmation.cancel`)}
            />
        </>
    );
};


ClosureOperationsCreateToolbar.propTypes = {
    resource: PropTypes.string,
    redirect: PropTypes.string,
    basePath: PropTypes.any,
    typeOpe: PropTypes.string
}

/**
 * This component implements create button & dialog confirmation on Support Request / Purchase Forecast
 *
 * @component
 * @param {String} props - properties
 * @returns {Component} - Return the create button on outcoming contract
 */
export const PostCreateToolbarSupport = ({ resource, serviceId, deviceId, ...props }) => {
    const { basePath } = props;
    const classes = useLayout();
    const redirectTo = useRedirect();
    const notify = useNotify();
    const formState = useFormState();
    const translate = useTranslate();

    const [
        create,
        { loading }
    ] = useCreate(resource);

    const [
        open,
        setOpen
    ] = useState(false);

    const handleDialogClick = () => {
        setOpen(true);
    };

    const handleDialogClose = evt => {
        setOpen(false);
        evt.stopPropagation();
    };

    const handleSave = useCallback(
        () => {

        create(
            {
                payload: { data: { ...formState.values } }
            },
            {
                onSuccess: ({ data: newRecord }) => {

                    if (serviceId.serviceId) {
                        notify(`resources.${resource}.created`, "info");
                        redirectTo(`/services/${serviceId.serviceId}/show`)
                    } else if (deviceId.deviceId) {
                        notify(`resources.${resource}.created`, "info");
                        redirectTo(`/equipments/${deviceId.deviceId}/show`)
                    } else {
                        notify(`resources.${resource}.created`, "info");
                        redirectTo("/", basePath, newRecord.id, newRecord);

                    }
                },
                onFailure: error => {
                    notify(
                        typeof error === "string"
                        ? error
                        : error.message || "ra.notification.http_error",
                        "warning"
                    );
                    setOpen(false);
            }
            }
        );
    },
    [
        create,
        notify,
        redirectTo,
        formState
    ]
    );

    return (
        <>
            <SaveButton {...props} onSave={handleDialogClick} className={classes.saveButton} />
                <Confirm
                    isOpen={open}
                    loading={loading}
                    title={translate(`resources.dialogConfirmation.title`)}
                    content={translate(`resources.${resource}.createdContract`)}
                    onConfirm={handleSave}
                    confirm={translate(`resources.dialogConfirmation.confirm`)}
                    onClose={handleDialogClose}
                    cancel={translate(`resources.dialogConfirmation.cancel`)}
                />
        </>
    );
};

PostCreateToolbarSupport.propTypes = {
    resource: PropTypes.string,
    basePath: PropTypes.any,
    serviceId: PropTypes.object,
    deviceId: PropTypes.object
}

PostCreateToolbarSupport.defaultProps = {
    serviceId: "",
    deviceId: ""
};