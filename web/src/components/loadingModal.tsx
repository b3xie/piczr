import {CircularProgress, Modal, Typography} from "@mui/material";
import Box from "@mui/material/Box";

interface ModalComponentProps {
    open: boolean;
    handleClose: () => void;
}

export const LoadingModal: React.FC<ModalComponentProps> = ({ open, handleClose }) => {

    return <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    sx={{width:'100%', height:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
>
    <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Uploading...
        </Typography>
        <CircularProgress />
    </Box>
</Modal>}