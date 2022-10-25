export const fileUpload = async ( file ) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/ddkhemm8j/upload';
    // const upload_preset = 'react-journal-example';

    const formData = new FormData();
    if ( !file ) throw new Error('No hay un archivo cargado');

    formData.append('upload_preset', 'react-journal-example');
    formData.append('file', file);

    try {
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });
        if ( !resp.ok ) throw new Error('No se pudo subir la imagen');

        const cloudResp = await resp.json();
        return cloudResp.secure_url;

    } catch ( error ){
        console.log(error);
        throw new Error( error.message );
    }

    // files.map( file => {
    //     const filename = file.name
    //     //todo colocar aqui la peticion para subir el archivo 1x1
    //
    //     //TODO una vez obtenida la respuesta colocar en un array cada elemento que se ha subido a cloudinaty
    // });



}