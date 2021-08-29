import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import { useTranslate } from "react-admin";
import { Chip } from "@material-ui/core";

const useStyles = makeStyles({
    col: {
        display: "flex",
        flexDirection: "column"
    },
    row: {
        display: "flex",
        flexDirection: "row"
    },
    nnl: {
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
    },
    label: {
        "&:empty": {
            display: "none"
        },
        "&:not(:empty)::before": {
            content: "attr(data-label) ': '",
            marginRight: "4px"
        }
    }
});

/**
 * A custom field to display a link of an entity
 *
 * @component
 * @param {Object} props - Properties of the component
 * @returns {Component} - A html element displaying a link
 */
const LinksField = props => {
    const translate = useTranslate();
    const classes = useStyles();
    const { data, ids, children, basePath, resource } = props;
    const MIN_LEN = 0;
    const MAX_LEN = 1;

    if (!data) {
        return "";
    }

    const len = ids ? ids.length : MIN_LEN;
    const displayIds = len ? ids.slice(MIN_LEN, MAX_LEN) : [];

    return <div className={classes.col}>
        {
            displayIds.map(id => {
                const record = data[id];

                return React.Children.map(
                    children, (field, index) => (
                    (field && record && record[field.props.source])
                        ? <div key={`${record.id}-${index}`} className={[
                            classes.row,
                            classes.nnl,
                            classes.label
                        ].join(" ")} data-label={translate(`resources.${resource}.fields.${field.props.source}`)}>
                            {
                                React.cloneElement(field, {
                                    record,
                                    basePath,
                                    resource,
                                    short: true
                                })
                            }
                        </div> : ""
                    )
                );
            })
        }
        {len > MAX_LEN &&
            <Chip label={`${len - MAX_LEN}${translate(`esop.holders.show.links_more`)}`}/>
        }
    </div>;
};

LinksField.propTypes = {
    data: PropTypes.object,
    ids: PropTypes.array,
    basePath: PropTypes.string,
    resource: PropTypes.string,
    children: PropTypes.node
};

export default LinksField;