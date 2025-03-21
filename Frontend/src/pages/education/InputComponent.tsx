import { Alert, Grid, TextField } from '@mui/material'

interface Props {
    label: string;
    objRef: object;
    error?: string | null;
    Md?: number; // Added Md property to the Props interface
}

function InputComponent({ label, objRef, error, Md }: Props) {
  return (
    <Grid item xs={12} sm={6} md={Md || 6} lg={Md || 6} sx={{ padding: '1rem' }}>
        <TextField
         {...objRef}
         id={label}
         InputProps={{
            style: {
                borderRadius: "10px",
                fontFamily: "Roboto"
            }
         }}
         label={label}
         sx={{ color: 'black' }}
         size="small"
         fullWidth
        />
       {error && (
          <Alert sx={{ color: 'white', background:'#FF9494', borderRadius: '12px' }} severity="error">
            {error}
          </Alert>
       )}
    </Grid>
  );
}

export default InputComponent;