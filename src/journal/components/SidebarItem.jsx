import {Grid, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {TurnedInNot} from "@mui/icons-material";
import {useMemo} from "react";

export const SidebarItem = ({ note }) =>{

    //funcionalidad para acortar el texto del body, si es muy largo
    const shortBody = useMemo( () => {
        return note.body.length > 80
            ?
            note.body.substring(0,80) + '...'
            :
            note.body

    }, [ note.body ] );

    return(
        <ListItem className="animate__animated animate__slideInLeft" disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText sx={{ color: "primary.main" }} primary={ note.title }/>
                    <ListItemText sx={{ color: "accent.main" }} secondary={ shortBody } />
                </Grid>
            </ListItemButton>
        </ListItem>
    );
}