import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import SideBar from './layout/sidebar/SideBar.tsx'
import { StyledEngineProvider } from '@mui/material/styles';
import NavBar from './layout/navbar/NavBar.tsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router}/>
    </StyledEngineProvider>
  </React.StrictMode>
)
