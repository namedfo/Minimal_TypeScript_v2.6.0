import { Box, TextField, Autocomplete } from '@mui/material';

// ----------------------------------------------------------------------

function countryToFlag(isoCode: string) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode;
}

type CountrySelectProps = {
  options: {
    code: string;
    label: string;
    phone: string;
  }[];
};

export default function CountrySelect({ options }: CountrySelectProps) {
  return (
    <Box
      sx={{
        width: '100%',
        '& .MuiAutocomplete-option': {
          typography: 'body2',
          '& > span': { mr: 1, fontSize: 20 }
        }
      }}
    >
      <Autocomplete
        fullWidth
        disablePortal
        autoHighlight
        options={options}
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <li {...props}>
            <span>{countryToFlag(option.code)}</span>
            {option.label} ({option.code}) +{option.phone}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a country"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password'
            }}
          />
        )}
      />
    </Box>
  );
}
