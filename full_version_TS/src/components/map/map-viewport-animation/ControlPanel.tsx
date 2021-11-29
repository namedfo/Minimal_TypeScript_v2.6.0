// material
import { alpha, styled } from '@mui/material/styles';
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';
// @types
import { CityData } from '../../../@types/maps';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  zIndex: 99,
  minWidth: 200,
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  padding: theme.spacing(2),
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)', // Fix on Mobile
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.grey[900], 0.72)
}));

// ----------------------------------------------------------------------

type ControlPanelProps = {
  data: CityData[];
  selectedCity?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>, city: CityData) => void;
};

export default function ControlPanel({ data, selectedCity, handleChange }: ControlPanelProps) {
  return (
    <RootStyle>
      {data.map((city) => (
        <RadioGroup
          key={city.city}
          value={selectedCity}
          onChange={(event) => handleChange(event, city)}
        >
          <FormControlLabel
            value={city.city}
            label={city.city}
            control={<Radio size="small" />}
            sx={{ color: 'common.white' }}
          />
        </RadioGroup>
      ))}
    </RootStyle>
  );
}
