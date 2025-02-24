import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { TreeViewBaseItem } from '@mui/x-tree-view/models';
import Typography from '@mui/material/Typography';

const MUI_X_PRODUCTS: TreeViewBaseItem[] = [
  {
    id: 'grid',
    label: 'Data Grid',
    children: [
      { id: 'grid-community', label: '@mui/x-data-grid' },
      { id: 'grid-pro', label: '@mui/x-data-grid-pro' },
      { id: 'grid-premium', label: '@mui/x-data-grid-premium' },
    ],
  },
  {
    id: 'pickers',
    label: 'Date and Time Pickers',
    children: [
      { id: 'pickers-community', label: '@mui/x-date-pickers' },
      { id: 'pickers-pro', label: '@mui/x-date-pickers-pro' },
    ],
  },
  {
    id: 'charts',
    label: 'Charts',
    children: [{ id: 'charts-community', label: '@mui/x-charts' }],
  },
  {
    id: 'tree-view',
    label: 'Tree View',
    children: [{ id: 'tree-view-community', label: '@mui/x-tree-view' }],
  },
];

export default function TrackNodeExpansionToggle() {
  const [action, setAction] = React.useState<{
    nodeId: string;
    isExpanded: boolean;
  } | null>(null);

  const handleNodeExpansionToggle = (
    event: React.SyntheticEvent,
    nodeId: string,
    isExpanded: boolean,
  ) => {
    setAction({ nodeId, isExpanded });
  };

  return (
    <Stack spacing={2}>
      {action == null ? (
        <Typography>No action recorded</Typography>
      ) : (
        <Typography>
          Last action: {action.isExpanded ? 'expand' : 'collapse'} {action.nodeId}
        </Typography>
      )}
      <Box sx={{ minHeight: 200, flexGrow: 1 }}>
        <RichTreeView
          items={MUI_X_PRODUCTS}
          onNodeExpansionToggle={handleNodeExpansionToggle}
        />
      </Box>
    </Stack>
  );
}
