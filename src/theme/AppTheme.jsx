import {ThemeProvider} from "@emotion/react";
import {CssBaseline} from "@mui/material";
import { cyanBlueTheme } from "./Cyan&BlueTheme.jsx";
import { cobaehTheme } from "./CobaehTheme.jsx";

export const AppTheme = ({ children }) => {

    return(
        <ThemeProvider theme={cobaehTheme}>
            <CssBaseline />

            { children }

        </ThemeProvider>
    );

}