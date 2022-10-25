import { createTheme } from "@mui/material";

import {pink} from "@mui/material/colors";

export const cyanBlueTheme = createTheme({
    palette:{
        primary:{
            main: '#512DA8'
        },
        secondary:{
            main: '#0288D1',
            aux: '#03A9F4'
        },
        accent:{
            main: '#E040FB',
            aux: '#FFF'
        },
        error:{
            main: pink.A400
        }
    }
})