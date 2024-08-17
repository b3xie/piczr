
import {Container, Slider, Typography} from "@mui/material";
import {Canvas} from "./canvas.tsx";
import Box from "@mui/material/Box";
import UploadFile from "./uploadFile.tsx";

export function WebBody() {
    return <>
        <Container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: "100px", width: "100%", alignSelf: 'flex-start'}} maxWidth={false}>

            <Box sx={{ flexDirection: "column", width: "50%", alignItems: "center", justifyContent: "center"}}>
                <Canvas></Canvas>
                <UploadFile></UploadFile>
            </Box>
            <Box sx={{flexDirection: "column", width: "50%", alignItems: "center", height: '800px'}} >
                <Typography component={"h3"}>
                    Adjustments
                </Typography>
                <Typography component={"h3"}>
                    Exposure
                </Typography>
                <Slider
                    size="small"
                    defaultValue={70}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    sx={{maxWidth:'75%'}}
                ></Slider>
            </Box>

        </Container>
    </>



}