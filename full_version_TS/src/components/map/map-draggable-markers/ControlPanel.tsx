import { Coordinate } from 'react-map-gl/src/components/draggable-control';
// material
import { alpha, styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

// ----------------------------------------------------------------------

const EVENT_NAMES = ['onDragStart', 'onDrag', 'onDragEnd'] as const;

function round5(value: number) {
  return (Math.round(value * 1e5) / 1e5).toFixed(5);
}

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

export default function ControlPanel({
  events = {}
}: {
  events: {
    onDragStart?: Coordinate;
    onDrag?: Coordinate;
    onDragEnd?: Coordinate;
  };
}) {
  return (
    <RootStyle>
      {EVENT_NAMES.map((event) => {
        const lngLat = events[event];
        return (
          <div key={event}>
            <Typography variant="subtitle2" sx={{ color: 'common.white' }}>
              {event}:
            </Typography>
            {lngLat ? (
              <Typography variant="subtitle2" sx={{ color: 'primary.main' }}>
                {lngLat.map(round5).join(', ')}
              </Typography>
            ) : (
              <Typography variant="subtitle2" sx={{ color: 'error.main' }}>
                <em>null</em>
              </Typography>
            )}
          </div>
        );
      })}
    </RootStyle>
  );
}
