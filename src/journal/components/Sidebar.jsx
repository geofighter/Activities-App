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
import {useSelector} from "react-redux";
import {SidebarItem} from "./SidebarItem";

export const Sidebar = ({ drawerWidth }) =>{

    // const { displayName, email, photoURL } = FireBaseAuth.currentUser;
    const { displayName, email, photoURL } = useSelector(state => state.auth);
    const { notes } = useSelector( state => state.journal );

    return(
        <Box
            component="nav"
            className="animate__animated animate__fadeIn"
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
                    <Avatar sx={{marginLeft: -2.5}} alt={ `UserPhoto: ${displayName}` } src={ photoURL ? photoURL : '' } />
                    <List sx={{marginLeft: -1.5}}>
                        <ListItem>
                            <ListItemText><Typography component="div" color="primary" fontSize="12px" fontWeight="bold" align="center">{ displayName }</Typography></ListItemText>
                        </ListItem>
                        <ListItem sx={{ marginTop: -2, textDecoration: "underline" }}>
                            <ListItemText><Typography component="div" color="primary" fontSize="11px" fontWeight="bold" align="center">{ email }</Typography></ListItemText>
                        </ListItem>
                    </List>
                </Toolbar>
                <Divider />

                <List>
                    {
                        notes.map( note => (
                           <SidebarItem key={ note.id } note={ note }/>
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    );

}