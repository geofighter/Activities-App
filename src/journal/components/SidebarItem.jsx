import {Grid, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {TurnedInNot} from "@mui/icons-material";
import {useMemo} from "react";
import {useDispatch} from "react-redux";
import {setActiveNote} from "../../store/journal/journalSlice.js";

export const SidebarItem = ({ note: {body, id, title = '', date, imageUrls = []} }) =>{

    const dispatch = useDispatch();

    const onSelectNote = () => {
        dispatch(setActiveNote({ body, id, title, date, imageUrls }))
    }
    //funcionalidad para acortar el texto del body, si es muy largo
    const shortBody = useMemo( () => {
        return body.length > 80
            ?
            body.substring(0,80) + '...'
            :
            body

    }, [ body ] );

    return(
        <ListItem className="animate__animated animate__slideInLeft" disablePadding>
            <ListItemButton onClick={ onSelectNote }>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText sx={{ color: "primary.main" }} primary={ title }/>
                    <ListItemText sx={{ color: "accent.main" }} secondary={ shortBody } />
                </Grid>
            </ListItemButton>
        </ListItem>
    );
}