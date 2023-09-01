import { Box, Card } from '@mui/material'
import { Outlet } from 'react-router-dom'

function RegLayout() {
  return (
   <Box width='116.3rem'>
    <Outlet/>
   </Box>
  )
}

export default RegLayout