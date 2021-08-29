import { makeStyles } from "@material-ui/core/styles";

export const useLayout = makeStyles(theme => (
    {
        colRight: {
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gridGap: "1rem",
            [theme.breakpoints.down("md")]: {
                gridTemplateColumns: "1fr",
            },
        },
        right: {
            gridColumn: "2",
            gridRow: "1",
            [theme.breakpoints.down("md")]: {
                gridColumn: "1",
                gridRow: "2",
            },
        },
        left: {
            gridColumn: "1",
            gridRow: "1",
            [theme.breakpoints.down("md")]: {
                gridColumn: "1",
                gridRow: "1",
            },
        },
        fullWidth: {
            width: "100%",
            "& >*": {
                width: "100%",
            }
        },
        grid: {
            display: "flex",
            flexDirection: "column",
            flex: 1,
            "& .MuiCardContent-root": {
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
            }
        },
        gridChild: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
        },
        mainTitle: {
            flex: 1,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            gridColumn: "1 / -1",
            fontWeight: "bold",
            fontSize: "26px",
            maxWidth: "80vw",
        },
        title: {
            flex: 1,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            fontWeight: "bold",
            fontSize: "18px",
            marginTop: "1rem",
            maxWidth: "80vw",
        },
        listTitle: {
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            fontWeight: "bold",
            fontSize: "22px",
            marginBottom: "1rem"
        },
        cardTitle: {
            flex: 1,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            fontWeight: "bold",
            fontSize: "18px",
            marginTop: 0
        },
        hide: {
            display: "none !important"
        },
        moreCard: {
            marginTop: "20px"
        },
        padCard: {
            padding: "16px"
        },
        listGroups: {
            paddingBottom: "30px"
        },
        col: {
            display: "flex",
            flexDirection: "column"
        },
        row: {
            display: "flex",
            flexDirection: "row"
        },
        center: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        mainCard: {
            padding: "16px",
            "&$opCreate": {
                paddingTop: 0,
                position: "relative"
            }
        },
        opCreate: { },
        oneLine: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        },
        dataGridHeader: {
            position: "relative",
            zIndex: 0
        },
        emptyFlex: {
            display: "flex",
            justifyContent: "space-between"
        },
        emptyResearch: {
            alignItems: "stretch",
            paddingBottom: "8px"
        },
        emptyList: {
            fontSize: "0.875rem",
            lineHeight: "1.43"
        },
        saveButton: {
            maxWidth: "max-content",
            display: "inline-flex",
            marginTop: "20px"
        },
        groupButton: {
            display: "flex",
            justifyContent: "end"
        },
        dateWidth: {
            width: "222px"
        },
        dateWidthLarge: {
            width: "244px"
        },
        mdCol: {
            [theme.breakpoints.down("md")]: {
                display: "flex",
                flexDirection: "column",
            },
        }
    }
));
