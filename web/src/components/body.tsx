
import {Button, Container, Slider, styled, Typography} from "@mui/material";
import {Canvas} from "./canvas.tsx";
import Box from "@mui/material/Box";
import UploadFile from "./uploadFile.tsx";

export function WebBody() {
    return <Container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingTop: "100px", width: "100%", alignSelf: 'flex-start'}} maxWidth={false}>
        <Box sx={{ flexDirection: "column", width: "50%", alignItems: "center", justifyContent: "center"}}>
            <Typography component={"p"}>This is a tool to upload a Canon Raw Image (.cr2) and make basic adjustments.</Typography>
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
            ></Slider>
        </Box>

    </Container>
}