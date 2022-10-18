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
    Grid, Avatar
} from "@mui/material";
import {Image, TurnedInNot} from "@mui/icons-material";
import {FireBaseAuth} from "../../firebase/config.js";

export const Sidebar = ({ drawerWidth }) =>{

    const { displayName, email, photoURL } = FireBaseAuth.currentUser;

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
                    <Avatar sx={{marginLeft: -2}} alt={ displayName } src={ photoURL ? photoURL : '' } />
                    <List>
                        <ListItem>
                            <ListItemText><Typography component="div" color="primary" fontSize="12px" fontWeight="bold">{ displayName }</Typography></ListItemText>
                        </ListItem>
                        <ListItem sx={{ marginTop: -2, textDecoration: "underline" }}>
                            <ListItemText><Typography component="div" color="primary" fontSize="11px" fontWeight="bold">{ email }</Typography></ListItemText>
                        </ListItem>
                    </List>
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