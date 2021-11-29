import { noCase } from 'change-case';
import { random } from 'lodash';
import { Icon } from '@iconify/react';
import appleFilled from '@iconify/icons-ant-design/apple-filled';
import windowsFilled from '@iconify/icons-ant-design/windows-filled';
// material
import { useTheme } from '@mui/material/styles';
import { Box, Card, Rating, CardHeader, Typography, Stack } from '@mui/material';
// utils
import { fCurrency, fShortenNumber } from '../../../utils/formatNumber';
import mockData from '../../../utils/mock-data';
//
import Label from '../../Label';
import Scrollbar from '../../Scrollbar';

// ----------------------------------------------------------------------

const MOCK_APPLICATIONS = ['Chrome', 'Drive', 'Dropbox', 'Evernote', 'Github'].map(
  (appName, index) => ({
    id: mockData.id(index),
    name: appName,
    system: (index === 2 && 'Windows') || (index === 4 && 'Windows') || 'Mac',
    price: index === 0 || index === 2 || index === 4 ? 0 : mockData.number.price(index),
    rating: mockData.number.rating(index),
    review: random(99989, true),
    shortcut: `/static/icons/ic_${noCase(appName)}.svg`
  })
);

// ----------------------------------------------------------------------

type ApplicationItemProps = {
  name: string;
  system: string;
  price: number;
  rating: number;
  review: number;
  shortcut: string;
};

function ApplicationItem({ app }: { app: ApplicationItemProps }) {
  const theme = useTheme();
  const { shortcut, system, price, rating, review, name } = app;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        sx={{
          width: 48,
          height: 48,
          flexShrink: 0,
          display: 'flex',
          borderRadius: 1.5,
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.neutral'
        }}
      >
        <img src={shortcut} alt={name} width={24} height={24} />
      </Box>

      <Box sx={{ flexGrow: 1, minWidth: 160 }}>
        <Typography variant="subtitle2">{name}</Typography>
        <Stack direction="row" alignItems="center" sx={{ mt: 0.5, color: 'text.secondary' }}>
          <Icon width={16} height={16} icon={system === 'Mac' ? appleFilled : windowsFilled} />
          <Typography variant="caption" sx={{ ml: 0.5, mr: 1 }}>
            {system}
          </Typography>
          <Label
            variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
            color={price === 0 ? 'success' : 'error'}
          >
            {price === 0 ? 'Free' : fCurrency(price)}
          </Label>
        </Stack>
      </Box>

      <Stack alignItems="flex-end" sx={{ pr: 3 }}>
        <Rating readOnly size="small" precision={0.5} name="reviews" value={rating} />
        <Typography variant="caption" sx={{ mt: 0.5, color: 'text.secondary' }}>
          {fShortenNumber(review)}&nbsp;reviews
        </Typography>
      </Stack>
    </Stack>
  );
}

export default function AppTopRelated() {
  return (
    <Card>
      <CardHeader title="Top Related Applications" />
      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {MOCK_APPLICATIONS.map((app) => (
            <ApplicationItem key={app.id} app={app} />
          ))}
        </Stack>
      </Scrollbar>
    </Card>
  );
}
