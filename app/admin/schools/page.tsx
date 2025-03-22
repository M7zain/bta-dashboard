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
import { School, SchoolFormData } from '../types';

// Sample data - replace with actual API calls
const initialSchools: School[] = [
  {
    id: 1,
    school_name: 'مدرسة النور',
    address: 'عمان، الأردن',
    phone: '+962786752056',
    email: 'noor@example.com',
    created_at: '2025-02-09 23:59:00',
  },
];

export default function SchoolsPage() {
  const [open, setOpen] = useState(false);
  const [schools, setSchools] = useState<School[]>(initialSchools);
  const [formData, setFormData] = useState<SchoolFormData>({
    school_name: '',
    address: '',
    phone: '',
    email: '',
  });

  const columns: GridColDef<School>[] = [
    { field: 'id', headerName: 'الرقم', width: 90 },
    { field: 'school_name', headerName: 'اسم المدرسة', width: 200 },
    { field: 'address', headerName: 'العنوان', width: 200 },
    { field: 'phone', headerName: 'رقم الهاتف', width: 150 },
    { field: 'email', headerName: 'البريد الإلكتروني', width: 200 },
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
      school_name: '',
      address: '',
      phone: '',
      email: '',
    });
  };

  const handleEdit = (school: School) => {
    setFormData({
      school_name: school.school_name,
      address: school.address,
      phone: school.phone,
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

      <DataGrid<School>
        rows={schools}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        disableRowSelectionOnClick
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
            multiline
            rows={3}
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
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
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