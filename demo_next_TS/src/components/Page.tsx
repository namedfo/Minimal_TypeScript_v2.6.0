import Head from 'next/head';
import { forwardRef, ReactNode } from 'react';
// material
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

interface PageProps extends BoxProps {
  children: ReactNode;
  title?: string;
}

const Page = forwardRef<HTMLDivElement, PageProps>(
  ({ children, title = '', ...other }, ref) => (
    <Box ref={ref} {...other}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </Box>
  )
);

export default Page;
