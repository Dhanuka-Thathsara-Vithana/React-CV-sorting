import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { StyledEngineProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom'
import router from './routes.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <RouterProvider router={router} />
      </StyledEngineProvider>
    </QueryClientProvider>
  </React.StrictMode>
)