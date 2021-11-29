import { Checkbox, TextField, Autocomplete } from '@mui/material';

// ----------------------------------------------------------------------

type CheckboxesProps = {
  options: {
    title: string;
    year: number;
  }[];
};

export default function Checkboxes({ options }: CheckboxesProps) {
  return (
    <Autocomplete
      fullWidth
      multiple
      options={options}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox checked={selected} />
          {option.title}
        </li>
      )}
      renderInput={(params) => <TextField {...params} label="Checkboxes" placeholder="Favorites" />}
    />
  );
}
