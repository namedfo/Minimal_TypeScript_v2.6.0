import { styled } from '@mui/material/styles';
import { Typography, Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(8, 2)
}));

// ----------------------------------------------------------------------

interface EmptyContentProps extends BoxProps {
  title: string;
  img?: string;
  description?: string;
}

export default function EmptyContent({ title, description, img, ...other }: EmptyContentProps) {
  return (
    <RootStyle {...other}>
      <Box
        component="img"
        alt="empty content"
        src={img || '/static/illustrations/illustration_empty_content.svg'}
        sx={{ height: 240, mb: 3 }}
      />

      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>

      {description && (
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      )}
    </RootStyle>
  );
}
