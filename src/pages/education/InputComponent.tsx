import { Alert, Box, Grid, TextField } from '@mui/material'

interface Props {
    label: string;
    objRef: object;
    error?: string | null;
}

function InputComponent({ label, objRef, error }: Props) {
  return (
    <Grid item xs={12} sm={6} md={6} lg={15} sx={{ padding: '1rem' }}>
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
