import { TextField, Autocomplete } from '@mui/material';

// ----------------------------------------------------------------------

type FreeSoloProps = {
  options: {
    title: string;
    year: number;
  }[];
};

export default function FreeSolo({ options }: FreeSoloProps) {
  return (
    <>
      <Autocomplete
        fullWidth
        freeSolo
        options={options.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="freeSolo" margin="normal" />}
      />
      <Autocomplete
        fullWidth
        freeSolo
        disableClearable
        options={options.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </>
  );
}
