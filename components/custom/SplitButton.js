import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { ArrowDropDown, Add } from "@material-ui/icons";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
    upper: {
        position: "relative",
        zIndex: "1",
        marginBottom: "10px"
    },
    txtBtn: {
        position: "relative",
        zIndex: "1",
        flexBasis: "auto",
        marginTop: "-3px"
    }
});

/**
 * A split button for multiple actions
 *
 * @component
 * @param {Object} props - properties of the button
 * @returns {Component} - A button with multiple actions
 */
const SplitButton = props => {
    const { children, label, variant, ...otherProps } = props;
    const classes = useStyles();
    const [
        open,
        setOpen
    ] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return (
        (children)
        ? <Grid item xs={12} className={(variant === "text") ? classes.txtBtn : classes.upper} {...otherProps}>
            <ButtonGroup variant={variant} color="primary" ref={anchorRef} aria-label="split button">
                <Button onClick={handleToggle}>
                    {(variant === "text") && <Add/>}
                    {label}
                </Button>
                {(variant === "contained") &&
                    <Button
                        color="primary"
                        size="small"
                        aria-controls={open ? "split-button-menu" : null}
                        aria-expanded={open ? "true" : null}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onClick={handleToggle}>
                        <ArrowDropDown />
                    </Button>
                }
            </ButtonGroup>
            <Popper open={open} anchorEl={anchorRef.current}
                placement="bottom-start" style={{ width: "100%" }}
                role={null} transition disablePortal>
            {({ TransitionProps }) => (
                <Grow
                    {...TransitionProps}
                    style={{
                        transformOrigin: "center top",
                    }}>
                    <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuList id="split-button-menu">
                                {children}
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
            </Popper>
        </Grid>
        : ""
    );
}

SplitButton.propTypes = {
    props: PropTypes.object,
    label: PropTypes.string,
    children: PropTypes.node,
    variant: PropTypes.string
}

SplitButton.defaultProps = {
    variant: "contained"
}

export default SplitButton;