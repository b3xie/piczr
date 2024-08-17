import {Button, styled} from "@mui/material";
import {LoadingModal} from "./loadingModal.tsx";
import React from "react";

const StyledInput = styled("input")({
    display: "none",
    position: 'absolute',


});
export default function UploadFile() {
    const [open, setOpen] = React.useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return <>
        <LoadingModal handleClose={handleClose} open={open} />
        <Button component="label" onClick={handleOpen}>Upload CR2 File <StyledInput></StyledInput> </Button>
    </>



}