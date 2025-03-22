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
} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Add as AddIcon } from '@mui/icons-material';
import { Parent, ParentFormData } from '../types';

// Sample data - replace with actual API calls
const initialParents: Parent[] = [
  {
    id: 1,
    parent_name: 'محمد أحمد',
    phone_number: '+962786752056',
    email: 'mohammed@example.com',
    address: 'عمان، الأردن',
    created_at: '2025-02-09 23:59:00',
  },
];

export default function ParentsPage() {
  const [open, setOpen] = useState(false);
  const [parents, setParents] = useState<Parent[]>(initialParents);
  const [formData, setFormData] = useState<ParentFormData>({
    parent_name: '',
    phone_number: '',
    email: '',
    address: '',
  });

  const columns: GridColDef<Parent>[] = [
    { field: 'id', headerName: 'الرقم', width: 90 },
    { field: 'parent_name', headerName: 'اسم ولي الأمر', width: 200 },
    { field: 'phone_number', headerName: 'رقم الهاتف', width: 150 },
    { field: 'email', headerName: 'البريد الإلكتروني', width: 200 },
    { field: 'address', headerName: 'العنوان', width: 200 },
    {
      field: 'created_at',
      headerName: 'تاريخ الإنشاء',
      width: 180,
      valueFormatter: (params: { value: string }) => new Date(params.value).toLocaleString('ar-SA'),
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
      email: '',
      address: '',
    });
  };

  const handleEdit = (parent: Parent) => {
    setFormData({
      parent_name: parent.parent_name,
      phone_number: parent.phone_number,
      email: parent.email,
      address: parent.address,
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

      <DataGrid<Parent>
        rows={parents}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        disableRowSelectionOnClick
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
            label="البريد الإلكتروني"
            fullWidth
            variant="outlined"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="العنوان"
            fullWidth
            variant="outlined"
            multiline
            rows={3}
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
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