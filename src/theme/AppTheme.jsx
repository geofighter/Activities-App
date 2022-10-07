import {ThemeProvider} from "@emotion/react";
import {CssBaseline} from "@mui/material";
import { cyanBlueTheme } from "./Cyan&BlueTheme.jsx";

export const AppTheme = ({ children }) => {

    return(
        <ThemeProvider theme={cyanBlueTheme}>
            <CssBaseline />

            { children }

        </ThemeProvider>
    );

}