import './App.css'

import {AppMenu} from "./components/menu.tsx";
import {WebBody} from "./components/body.tsx";
import {Container} from "@mui/material";

function App() {

  return (
      <Container maxWidth={false} sx={{ height:"100vh",  display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <AppMenu></AppMenu>
          <WebBody></WebBody>
  </Container>

  )
}

export default App
