
import { Box, Card } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Login from '../pages/Login/Login'

function LoginLayout() {
  return (
   <Box width='116.3rem'>
    <Login/>
   </Box>
  )
}

export default LoginLayout