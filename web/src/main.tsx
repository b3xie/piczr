import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider} from "@mui/material";
import '@fontsource/krona-one';
import {theme} from "./theme.tsx";
createRoot(document.getElementById('root')!).render(

      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>


)
