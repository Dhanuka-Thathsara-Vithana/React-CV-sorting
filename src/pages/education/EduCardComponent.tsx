import { Grid, TextField } from '@mui/material'

interface Props{
    Md: number,
    label: string,
    id: string,
    objRef: object
}

function EduCardComponent({ Md, label,id, objRef}: Props) {
  return (
    <Grid sx={{ padding: '1rem' }} item xs={6} md={Md} >
        <TextField
         { ...objRef}
         id={id}
        InputProps={{
        style: {
            borderRadius: "10px",
            fontFamily: "Roboto"
        }}}
        label={label} sx={{ color: 'black'}} size="small" fullWidth />
    </Grid>
  )
}

export default EduCardComponent;