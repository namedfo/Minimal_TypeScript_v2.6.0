import { TextField, Autocomplete } from '@mui/material';

// ----------------------------------------------------------------------

type ComboBoxProps = {
  options: {
    title: string;
    year: number;
  }[];
};

export default function ComboBox({ options }: ComboBoxProps) {
  return (
    <Autocomplete
      fullWidth
      options={options}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => <TextField {...params} label="Combo box" margin="none" />}
    />
  );
}
