import {AppBar, Toolbar, Typography} from "@mui/material";


export function AppMenu() {
    return <AppBar sx={{backgroundColor: "black"}} position="absolute" >
        <Toolbar sx={{color: "white", alignItems: "center"}}>
            <Typography component="h3">
                PICRZ - CR2 image manipulator
            </Typography>
        </Toolbar>

    </AppBar>

}
