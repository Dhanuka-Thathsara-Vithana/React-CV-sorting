import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import SideBar from './layout/sidebar/SideBar.tsx'
import { StyledEngineProvider } from '@mui/material/styles';
import NavBar from './layout/navbar/NavBar.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
    <NavBar/>
    </StyledEngineProvider>
  </React.StrictMode>
)
