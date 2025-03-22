'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Add as AddIcon } from '@mui/icons-material';

// Sample data - replace with actual API calls
const initialParents = [
  {
    id: 1,
    parent_name: 'مختار الفالوجي',
    phone_number: '9627971198',
    latitude: 39.42238289,
    longitude: 29.98776801,
    created_at: '2025-02-13 23:03:54',
    updated_at: '2025-02-20 16:13:41',
  },
  {
    id: 2,
    parent_name: 'محمود البتك',
    phone_number: '+98777777',
    latitude: null,
    longitude: null,
    created_at: '2025-02-13 23:03:54',
    updated_at: '2025-02-13 23:03:54',
  },
];

export default function ParentsPage() {
  const [open, setOpen] = useState(false);
  const [parents, setParents] = useState(initialParents);
  const [formData, setFormData] = useState({
    parent_name: '',
    phone_number: '',
    latitude: '',
    longitude: '',
  });

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'الرقم', width: 90 },
    { field: 'parent_name', headerName: 'اسم ولي الأمر', width: 200 },
    { field: 'phone_number', headerName: 'رقم الهاتف', width: 150 },
    {
      field: 'location',
      headerName: 'الموقع',
      width: 200,
      renderCell: (params) => (
        <Typography>
          {params.row.latitude && params.row.longitude
            ? `${params.row.latitude}, ${params.row.longitude}`
            : 'غير محدد'}
        </Typography>
      ),
    },
    {
      field: 'created_at',
      headerName: 'تاريخ الإنشاء',
      width: 180,
      valueFormatter: (params) => new Date(params.value).toLocaleString('ar-SA'),
    },
    {
      field: 'updated_at',
      headerName: 'آخر تحديث',
      width: 180,
      valueFormatter: (params) => new Date(params.value).toLocaleString('ar-SA'),
    },
    {
      field: 'actions',
      headerName: 'الإجراءات',
      width: 150,
      renderCell: (params) => (
        <Box>
          <Button
            size="small"
            onClick={() => handleEdit(params.row)}
            sx={{ mr: 1 }}
          >
            تعديل
          </Button>
          <Button
            size="small"
            color="error"
            onClick={() => handleDelete(params.row.id)}
          >
            حذف
          </Button>
        </Box>
      ),
    },
  ];

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFormData({
      parent_name: '',
      phone_number: '',
      latitude: '',
      longitude: '',
    });
  };

  const handleEdit = (parent: any) => {
    setFormData({
      parent_name: parent.parent_name,
      phone_number: parent.phone_number,
      latitude: parent.latitude || '',
      longitude: parent.longitude || '',
    });
    setOpen(true);
  };

  const handleDelete = (id: number) => {
    // Implement delete functionality
    console.log('Delete parent:', id);
  };

  const handleSubmit = () => {
    // Implement submit functionality
    console.log('Submit form:', formData);
    handleClose();
  };

  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h4" component="h1">
          أولياء الأمور
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpen}
        >
          إضافة ولي أمر
        </Button>
      </Box>

      <DataGrid
        rows={parents}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        autoHeight
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {formData.parent_name ? 'تعديل ولي أمر' : 'إضافة ولي أمر جديد'}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="اسم ولي الأمر"
            fullWidth
            variant="outlined"
            value={formData.parent_name}
            onChange={(e) =>
              setFormData({ ...formData, parent_name: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="رقم الهاتف"
            fullWidth
            variant="outlined"
            value={formData.phone_number}
            onChange={(e) =>
              setFormData({ ...formData, phone_number: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="خط العرض"
            fullWidth
            variant="outlined"
            type="number"
            value={formData.latitude}
            onChange={(e) =>
              setFormData({ ...formData, latitude: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="خط الطول"
            fullWidth
            variant="outlined"
            type="number"
            value={formData.longitude}
            onChange={(e) =>
              setFormData({ ...formData, longitude: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>إلغاء</Button>
          <Button onClick={handleSubmit} variant="contained">
            حفظ
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
} 