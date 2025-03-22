import React from 'react';
import { DataGrid, DataGridProps, GridColDef } from '@mui/x-data-grid';
import { useTheme } from '@mui/material';

interface EnhancedDataGridProps extends Omit<DataGridProps, 'columns'> {
  columns: GridColDef[];
}

export default function EnhancedDataGrid({
  columns,
  ...props
}: EnhancedDataGridProps) {
  const theme = useTheme();

  return (
    <DataGrid
      {...props}
      columns={columns}
      sx={{
        border: 'none',
        '& .MuiDataGrid-main': {
          direction: 'rtl',
        },
        '& .MuiDataGrid-cell': {
          borderBottom: `1px solid ${theme.palette.divider}`,
        },
        '& .MuiDataGrid-columnHeaders': {
          backgroundColor: theme.palette.background.default,
          borderBottom: `2px solid ${theme.palette.divider}`,
        },
        '& .MuiDataGrid-row:hover': {
          backgroundColor: theme.palette.action.hover,
        },
        '& .MuiDataGrid-footerContainer': {
          borderTop: `1px solid ${theme.palette.divider}`,
          '& .MuiTablePagination-root': {
            marginRight: 'auto',
            marginLeft: 0,
          },
        },
        '& .MuiDataGrid-virtualScroller': {
          backgroundColor: theme.palette.background.paper,
        },
        '& .MuiDataGrid-columnHeader': {
          fontWeight: 600,
          color: theme.palette.primary.main,
        },
        '& .MuiToolbar-root.MuiToolbar-gutters': {
          paddingRight: 0,
          paddingLeft: 0,
          direction: 'rtl',
        },
        '& .MuiDataGrid-toolbarContainer': {
          padding: 0,
          gap: theme.spacing(1),
          '& .MuiButton-root': {
            marginRight: 0,
            marginLeft: theme.spacing(1),
          },
        },
        '& .MuiDataGrid-columnHeadersInner': {
          direction: 'rtl',
        },
      }}
      pageSizeOptions={[10, 25, 50]}
      initialState={{
        pagination: {
          paginationModel: { pageSize: 10 },
        },
      }}
      disableRowSelectionOnClick
      disableColumnMenu
      disableColumnFilter
      disableColumnSelector
      autoHeight
    />
  );
} 