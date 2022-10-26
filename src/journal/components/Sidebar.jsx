import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
    Avatar
} from "@mui/material";
import {useSelector} from "react-redux";
import {SidebarItem} from "./SidebarItem";

export const Sidebar = ({ drawerWidth }) =>{
debugger
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
                {
                    notes.length != 0
                    ?
                        <List>
                            {
                                notes.map( note => (
                                    <SidebarItem key={ note.id } note={ note }/>
                                ))
                            }
                        </List>
                    :
                        <List sx={{ padding: 8 }}>
                            <Typography color="accent.main" sx={{ fontWeight: 'bold', fontSize: 15, fontStyle: 'italic' }}>Aún no tienes notas creadas</Typography>
                        </List>
                }


            </Drawer>

        </Box>
    );

}