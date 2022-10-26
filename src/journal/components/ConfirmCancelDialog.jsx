import Swal from "sweetalert2";
import {useDispatch, useSelector} from "react-redux";
import {startDeleteNote} from "../../store/journal/thunks";

export const ConfirmCancelDialog = ( { id, title } ) => {
    const dispatch = useDispatch();
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
            debugger
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
            debugger;
            return;
            confirmDialog.fire(
                'Operación Cancelada',
                'No se ha eliminado nada',
                'error'
            );
        }
    });
}
