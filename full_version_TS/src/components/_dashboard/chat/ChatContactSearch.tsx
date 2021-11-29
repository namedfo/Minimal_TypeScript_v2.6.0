import { Icon } from '@iconify/react';
import searchFill from '@iconify/icons-eva/search-fill';
// material
import { styled } from '@mui/material/styles';
import { Box, FormControl, OutlinedInput, InputAdornment, ClickAwayListener } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2)
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  transition: theme.transitions.create('box-shadow', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  '&.Mui-focused': { boxShadow: theme.customShadows.z8 },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`
  }
}));

// ----------------------------------------------------------------------
type ChatContactSearchProps = {
  query: string;
  onChange: React.ChangeEventHandler;
  onFocus: VoidFunction;
  onClickAway: VoidFunction;
};

export default function ChatContactSearch({
  query,
  onChange,
  onFocus,
  onClickAway,
  ...other
}: ChatContactSearchProps) {
  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <RootStyle {...other}>
        <FormControl fullWidth size="small">
          <SearchStyle
            value={query}
            onFocus={onFocus}
            onChange={onChange}
            placeholder="Search contacts..."
            startAdornment={
              <InputAdornment position="start">
                <Box component={Icon} icon={searchFill} sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            }
          />
        </FormControl>
      </RootStyle>
    </ClickAwayListener>
  );
}
