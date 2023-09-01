import { Alert, Box, Grid, TextField } from '@mui/material'

interface Props{
    Md: number,
    label: string,
    objRef: object
}

function InputComponent({ Md, label, objRef}: Props) {
  return (
    <Grid sx={{ padding: '1rem' }} item xs={6} md={Md} >
        <TextField
         { ...objRef}
         id={label}
        InputProps={{
        style: {
            borderRadius: "10px",
            fontFamily: "Roboto"
        }}}
        label={label} sx={{ color: 'black'}} size="small" fullWidth />
        <Box>
        <Alert sx={{color: 'white', background:'red'}} severity="error">This is an error alert — check it out!</Alert>
        </Box>
    </Grid>
  )
}

export default InputComponent;