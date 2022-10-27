import Box from '@mui/material/Box';
import {ImageListItem, ImageList, Typography} from '@mui/material';
import {SentimentDissatisfiedTwoTone} from "@mui/icons-material";

export const ImageGallery = ({ images: itemData = []}) => {
    // console.log(itemData)
    // if (itemData === undefined) itemData = [];
    return (
        <>
            {
                (itemData.length != 0 || itemData === undefined) ?
                    <Box className="animate__animated animate__fadeIn" sx={{ width: "100%", height: 450, overflowY: 'scroll' }}>
                        <Typography align="center" color="primary" sx={{ marginTop: 4, fontWeight: "bold", fontSize: 18 }}>Imagenes cargadas</Typography>
                        <hr/>
                        <ImageList variant="masonry" cols={4} gap={10}>
                            {itemData.map((item) => (
                                <ImageListItem key={item}>
                                    <img
                                        alt={ `Imagen Descriptiva` }
                                        src={`${item}?w=248&fit=crop&auto=format`}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                        <Typography align="center" color="accent.main" sx={{ marginTop: 4, fontWeight: "bold", fontSize: 14, fontStyle: "italic" }}>Nota: Cuando cargues imágenes a tus notas, recuerda dar click en Guardar</Typography>
                    </Box>
                    :
                    <Box className="animate__animated animate__fadeIn" sx={{ width: "100%", height: 450, overflowY: 'scroll' }}>
                        <hr/>
                        <div align="center">
                            <SentimentDissatisfiedTwoTone color="primary" sx={{ padding: 1, fontSize: 100, alignItems: 'center' }}></SentimentDissatisfiedTwoTone>
                            <Typography color="accent.main" sx={{ marginTop: 4, fontWeight: "bold", fontSize: 14, fontStyle: "italic" }}>De momento, no tienes imágenes cargadas</Typography>
                        </div>
                    </Box>
            }

        </>

    );
}
