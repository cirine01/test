import { defaultTheme } from "react-admin";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import merge from "lodash/merge";

const myTheme = createMuiTheme(
    merge({}, defaultTheme, {

        typography: {
            fontFamily: `"Montserrat", "Arial", sans-serif`,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500
        },
        overrides: {
            // ...
            RaMenuItemLink: {
                active: {
                    color: "black",
                    fontWeight: "500",
                },
            }
        }

    })
)

export default myTheme;