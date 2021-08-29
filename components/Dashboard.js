import React from "react";
import { useTranslate } from "react-admin";
import frontPage from "../assets/frontPage.jpg"

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    typo: {
        fontFamily: [
            "Montserrat",
            "Arial"
        ].join(",")
    },
    dashboard: {
        display: "flex",
        justifyContent: "center"
    },
    image: {
        width: "100%",
        height: "100%"
    }
})

/**
 * Application's homepage.
 *
 * @component
 * @returns {Component} - Return the dashboard of the application
 */
const Dashboard = () => {
    const translate = useTranslate();
    const classes = useStyles();

    return (
        <Card
            style={{ margin: "auto",
                width: "70%" }}>
            <CardContent >
                <img src={frontPage} alt="title" className={classes.image} />
                <Typography variant="h6" color="inherit" className={classes.dashboard}>
                    {translate("esop.dashboard.title")}
                </Typography>
                <Typography color="inherit" className={classes.dashboard}>
                    {translate("esop.dashboard.content")}
                </Typography>
            </CardContent>
        </Card>
    )
};

export default Dashboard;