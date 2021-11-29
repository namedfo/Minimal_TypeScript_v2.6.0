import { useState } from 'react';
import MapGL from 'react-map-gl';
import { InteractiveMapProps } from 'react-map-gl/src/components/interactive-map';
// material
import { Box, Typography } from '@mui/material';
//
import {
  MapControlPopup,
  MapControlMarker,
  MapControlScale,
  MapControlGeolocate,
  MapControlNavigation,
  MapControlFullscreen
} from './controls';

// ----------------------------------------------------------------------

type CountryData = {
  timezones: string[];
  latlng: number[];
  name: string;
  country_code: string;
  capital: string;
  photo: string;
};

interface MapMarkersPopupsProps extends InteractiveMapProps {
  data: CountryData[];
}

export default function MapMarkersPopups({ data, ...other }: MapMarkersPopupsProps) {
  const [tooltip, setTooltip] = useState<CountryData | null>(null);
  const [viewport, setViewport] = useState({
    zoom: 2
  });

  return (
    <>
      <MapGL {...viewport} onViewportChange={setViewport} {...other}>
        <MapControlScale />
        <MapControlNavigation />
        <MapControlFullscreen />
        <MapControlGeolocate />

        {data.map((country) => (
          <MapControlMarker
            key={country.name}
            latitude={country.latlng[0]}
            longitude={country.latlng[1]}
            onClick={() => setTooltip(country)}
          />
        ))}

        {tooltip && (
          <MapControlPopup
            longitude={tooltip.latlng[1]}
            latitude={tooltip.latlng[0]}
            onClose={() => setTooltip(null)}
          >
            <Box sx={{ color: 'common.white' }}>
              <Box
                sx={{
                  mb: 1,
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Box
                  sx={{
                    height: '18px',
                    minWidth: '28px',
                    marginRight: '8px',
                    borderRadius: '4px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: `url(https://cdn.staticaly.com/gh/hjnilsson/country-flags/master/svg/${tooltip.country_code.toLowerCase()}.svg)`
                  }}
                />
                <Typography variant="subtitle2">{tooltip.name}</Typography>
              </Box>
              <Typography component="div" variant="caption">
                Timezones: {tooltip.timezones}
              </Typography>
              <Typography component="div" variant="caption">
                Lat: {tooltip.latlng[0]}
              </Typography>
              <Typography component="div" variant="caption">
                Long: {tooltip.latlng[1]}
              </Typography>
              <Box
                component="img"
                alt={tooltip.name}
                src={tooltip.photo}
                sx={{
                  mt: 1,
                  height: 90,
                  width: '100%',
                  borderRadius: 1,
                  objectFit: 'cover'
                }}
              />
            </Box>
          </MapControlPopup>
        )}
      </MapGL>
    </>
  );
}
