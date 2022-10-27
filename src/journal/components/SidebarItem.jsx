import {Grid, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Delete, TurnedInNot} from "@mui/icons-material";
import {useMemo} from "react";
import {useDispatch} from "react-redux";
import {setActiveNote} from "../../store/journal/journalSlice.js";
import Swal from "sweetalert2";
import { ConfirmCancelDialog } from "../components/ConfirmCancelDialog";
import {startDeleteNote} from "../../store/journal/thunks.js";

export const SidebarItem = ({ note: {body, id, title = '', date, imageUrls = []} }) =>{

    const dispatch = useDispatch();

    const onSelectNote = () => {
        dispatch(setActiveNote({ body, id, title, date, imageUrls }))
    }
    const onDeleteNote = () => {
        const confirmDialog = Swal.mixin({
            confirmButtonColor: '#691B31',
            cancelButtonColor: '#6F7271',
            buttonsStyling: true,
            allowOutsideClick: false,
        })
        confirmDialog.fire({
            title: 'Estás Seguro?',
            text: `Vas a eliminar la nota: ${title}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Eliminar Nota',
            cancelButtonText: 'Cancelar',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(startDeleteNote({id}));
                confirmDialog.fire(
                    'Nota Eliminada',
                    `Has eliminado la nota ${title}`,
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                return;
                confirmDialog.fire(
                    'Operación Cancelada',
                    'No se ha eliminado nada',
                    'error'
                );
            }
        });
        // const ja = ConfirmCancelDialog({ id, title });
        // console.log("hey");
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
                <ListItemButton onClick={ onDeleteNote }>
                    <ListItemIcon>
                        <Delete color="primary"/>
                    </ListItemIcon>
                </ListItemButton>
                <Grid container>
                    <ListItemText sx={{ color: "secondary.main" }} primary={ title }/>
                    <ListItemText sx={{ color: "accent.main" }} secondary={ shortBody } />
                </Grid>
            </ListItemButton>
        </ListItem>
    );
}