import {Button, styled} from "@mui/material";

const StyledInput = styled("input")({
    display: "none",
    position: 'absolute',


});


export default function UploadFile() {
    // @ts-ignore
    return <Button component="label">Upload CR2 File <StyledInput type={"file"}></StyledInput> </Button>
}