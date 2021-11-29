import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface LazySizeProps extends BoxProps {
  alt: string;
  src: string;
  size?: string;
  disabledBlur?: boolean;
  hidePlaceholder?: boolean;
}

export default function LazySize({
  component = 'img',
  alt,
  src,
  size,
  disabledBlur = false,
  hidePlaceholder = false,
  sx,
  ...other
}: LazySizeProps) {
  const lazyClass = disabledBlur ? 'lazyload' : 'lazyload blur-up';
  const placeholder = hidePlaceholder ? '' : '/static/images/placeholder.svg';
  const isAuto = Boolean(size);

  return (
    <>
      {isAuto ? (
        <Box
          component={component}
          alt={alt}
          data-sizes="auto"
          src={placeholder}
          data-src={src}
          data-srcset={size}
          className={lazyClass}
          sx={{ objectFit: 'cover', ...sx }}
          {...other}
        />
      ) : (
        <Box
          component={component}
          alt={alt}
          src={placeholder}
          data-src={src}
          className={lazyClass}
          sx={{ objectFit: 'cover', ...sx }}
          {...other}
        />
      )}
    </>
  );
}
