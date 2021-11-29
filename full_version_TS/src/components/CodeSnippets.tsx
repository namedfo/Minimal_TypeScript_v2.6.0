import { Icon } from '@iconify/react';
import { useState } from 'react';
import codeFill from '@iconify/icons-eva/code-fill';
// material
import { Box, Tooltip, IconButton, DialogTitle, DialogContent, BoxProps } from '@mui/material';
//
import Markdown from './Markdown';
import { DialogAnimate } from './animate';

// ----------------------------------------------------------------------

interface CodeSnippetsProps extends BoxProps {
  source: string;
  title?: string;
}

export default function CodeSnippets({ source, title, sx }: CodeSnippetsProps) {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={sx}>
      <Tooltip title="View Code">
        <IconButton
          onClick={() => setOpen(true)}
          color={open ? 'primary' : 'default'}
          sx={{
            right: 8,
            bottom: 8,
            position: 'absolute'
          }}
        >
          <Icon icon={codeFill} width={20} height={20} />
        </IconButton>
      </Tooltip>

      <DialogAnimate
        fullWidth
        maxWidth="md"
        scroll="paper"
        onClose={() => setOpen(false)}
        open={open}
      >
        {title && <DialogTitle>{title}</DialogTitle>}
        <DialogContent>
          <Markdown children={source} />
        </DialogContent>
      </DialogAnimate>
    </Box>
  );
}
