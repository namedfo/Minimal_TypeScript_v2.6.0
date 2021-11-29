import { TextField, Autocomplete } from '@mui/material';

// ----------------------------------------------------------------------

type SizesProps = {
  options: {
    title: string;
    year: number;
  }[];
};

export default function Sizes({ options }: SizesProps) {
  return (
    <>
      <Autocomplete
        fullWidth
        options={options}
        getOptionLabel={(option) => option.title}
        defaultValue={options[13]}
        renderInput={(params) => (
          <TextField {...params} label="Size Medium" placeholder="Favorites" />
        )}
      />
      <br />
      <Autocomplete
        fullWidth
        multiple
        size="small"
        options={options}
        getOptionLabel={(option) => option.title}
        defaultValue={[options[13]]}
        renderInput={(params) => (
          <TextField {...params} label="Size small" placeholder="Favorites" />
        )}
      />
    </>
  );
}
