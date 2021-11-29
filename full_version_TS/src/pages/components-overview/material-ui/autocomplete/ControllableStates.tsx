import { useState } from 'react';
import { TextField, Autocomplete, Typography } from '@mui/material';

// ----------------------------------------------------------------------

type ControllableStatesProps = {
  options: string[];
};

export default function ControllableStates({ options }: ControllableStatesProps) {
  const [value, setValue] = useState<string | null>(options[0]);
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <Autocomplete
        fullWidth
        value={value}
        options={options}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />
      <Typography variant="body2" sx={{ mt: 2 }}>{`value: ${
        value !== null ? `'${value}'` : 'null'
      }`}</Typography>
      <Typography variant="body2">{`inputValue: '${inputValue}'`}</Typography>
    </>
  );
}
