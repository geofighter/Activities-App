import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    Grid
} from "@mui/material";
import {TurnedInNot} from "@mui/icons-material";

export const Sidebar = ({ drawerWidth }) =>{

    return(
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant="permanent"
                open
                sx={{
                    display: { xs: "block" },
                    '& .MuiDrawer-paper': { boxSizing: "border-box", width: drawerWidth },
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Geo
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        ['Enero','Febrero','Marzo','Abril'].map( text => (
                           <ListItem key={ text } disablePadding>
                               <ListItemButton>
                                   <ListItemIcon>
                                       <TurnedInNot />
                                   </ListItemIcon>
                                   <Grid container>
                                       <ListItemText sx={{ color: "primary.main" }} primary={ text }/>
                                       <ListItemText sx={{ color: "accent.main" }} secondary={ 'There are many variations of passages.' } />
                                   </Grid>
                               </ListItemButton>
                           </ListItem>
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    );

}