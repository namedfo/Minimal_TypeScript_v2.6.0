import { Editor, EditorProps } from 'react-draft-wysiwyg';
import { BoxProps } from '@mui/material';
//
import { toolbarFull, toolbarSimple } from './DraftEditorToolbar';
import DraftEditorStyle from './DraftEditorStyle';

// ----------------------------------------------------------------------

interface DEditorProps extends EditorProps {
  simple?: boolean;
  error?: boolean;
  sx?: BoxProps;
}

export default function DraftEditor({ simple = false, error, sx, ...other }: DEditorProps) {
  return (
    <DraftEditorStyle
      sx={{
        ...(error && {
          border: (theme) => `solid 1px ${theme.palette.error.main}`
        }),
        ...sx
      }}
    >
      <Editor
        toolbar={simple ? toolbarSimple : toolbarFull}
        placeholder="Write something awesome..."
        {...other}
      />
    </DraftEditorStyle>
  );
}
