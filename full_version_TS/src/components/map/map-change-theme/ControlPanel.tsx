import { alpha, styled } from '@mui/material/styles';
import { Radio, Typography, RadioGroup, FormControlLabel } from '@mui/material';

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
  themes: Record<string, string>;
  selectTheme: string;
  onChangeTheme: (theme: string) => void;
};

export default function ControlPanel({ themes, selectTheme, onChangeTheme }: ControlPanelProps) {
  return (
    <RootStyle>
      <Typography gutterBottom variant="subtitle2" sx={{ color: 'common.white' }}>
        Select Theme:
      </Typography>
      <RadioGroup value={selectTheme} onChange={(e, value) => onChangeTheme(value)}>
        {Object.keys(themes).map((item) => (
          <FormControlLabel
            key={item}
            value={item}
            control={<Radio size="small" />}
            label={item}
            sx={{ color: 'common.white', textTransform: 'capitalize' }}
          />
        ))}
      </RadioGroup>
    </RootStyle>
  );
}
