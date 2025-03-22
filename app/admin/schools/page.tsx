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

// Sample data - replace with actual API calls
const initialSchools = [
  {
    id: 1,
    school_name: 'مدرسة النور',
    address: 'شارع الملك عبدالله',
    phone_number: '06-1234567',
    email: 'info@nour-school.com',
    created_at: '2025-02-13 23:03:54',
    updated_at: '2025-02-20 16:13:41',
  },
  {
    id: 2,
    school_name: 'مدرسة السلام',
    address: 'شارع المدينة المنورة',
    phone_number: '06-7654321',
    email: 'info@salam-school.com',
    created_at: '2025-02-13 23:03:54',
    updated_at: '2025-02-13 23:03:54',
  },
];

export default function SchoolsPage() {
  const [open, setOpen] = useState(false);
  const [schools, setSchools] = useState(initialSchools);
  const [formData, setFormData] = useState({
    school_name: '',
    address: '',
    phone_number: '',
    email: '',
  });

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'الرقم', width: 90 },
    { field: 'school_name', headerName: 'اسم المدرسة', width: 200 },
    { field: 'address', headerName: 'العنوان', width: 250 },
    { field: 'phone_number', headerName: 'رقم الهاتف', width: 150 },
    { field: 'email', headerName: 'البريد الإلكتروني', width: 200 },
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
      school_name: '',
      address: '',
      phone_number: '',
      email: '',
    });
  };

  const handleEdit = (school: any) => {
    setFormData({
      school_name: school.school_name,
      address: school.address,
      phone_number: school.phone_number,
      email: school.email,
    });
    setOpen(true);
  };

  const handleDelete = (id: number) => {
    // Implement delete functionality
    console.log('Delete school:', id);
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
          المدارس
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpen}
        >
          إضافة مدرسة
        </Button>
      </Box>

      <DataGrid
        rows={schools}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        autoHeight
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {formData.school_name ? 'تعديل مدرسة' : 'إضافة مدرسة جديدة'}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="اسم المدرسة"
            fullWidth
            variant="outlined"
            value={formData.school_name}
            onChange={(e) =>
              setFormData({ ...formData, school_name: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="العنوان"
            fullWidth
            variant="outlined"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
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
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
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