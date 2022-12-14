import {Box, Toolbar} from "@mui/material";
import {Navbar, Sidebar} from "../components/";


const drawerWidth = 240;

export const JournalLayout = ({ children }) =>{
    return(
        <Box sx={{ display: 'flex' }}>

            <Navbar drawerWidth={ drawerWidth }/>

            <Sidebar drawerWidth={ drawerWidth } />

            <Box component='main'
                sx={{ flexGrow: 1, padding: 3 }}
            >
                {/*  toolbar  */}
                <Toolbar>

                </Toolbar>

                { children }

            </Box>

        </Box>
    );
}