import {AppRouter} from "./router/AppRouter.jsx";
import {Routes} from "react-router-dom";
import {AppTheme} from "./theme/AppTheme";

export const JournalApp = () =>{

    return(
        <AppTheme>
            <AppRouter />
        </AppTheme>
    );

}