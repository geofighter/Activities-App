import { createTheme } from "@mui/material";

import {pink} from "@mui/material/colors";

export const cobaehTheme = createTheme({
    palette:{
        primary:{
            main: 'rgb(105,28,49)',
            button: 'background(to right, #691B31 0%, #A02142 100%)'
        },
        secondary:{
            main: 'rgb(179,142,93)',
            aux: 'rgb(221,201,163)'
        },
        accent:{
            main: 'rgb(111,114,113)',
            aux: 'rgb(152,152,154)'
        },
        error:{
            main: pink.A400
        }
    }
})