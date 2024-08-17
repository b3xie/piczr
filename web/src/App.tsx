import './App.css'

import {AppMenu} from "./components/menu.tsx";
import {WebBody} from "./components/body.tsx";
import {Container} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function Homepage() {
    return  <Container maxWidth={false} sx={{ height:"100vh",  display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <AppMenu></AppMenu>
        <WebBody></WebBody>
    </Container>
}

function App() {

  return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>

        </BrowserRouter>

  )
}

export default App
