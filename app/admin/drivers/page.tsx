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
const initialDrivers = [
  {
    id: 1,
    driver_name: 'محمود البتك',
    phone_number: '+962786752056',
    vehicle_type: 'toyota',
    vehicle_number: '42-5678',
    vehicle_color: 'red',
    created_at: '2025-02-09 23:59:00',
  },
];

export default function DriversPage() {
  const [open, setOpen] = useState(false);
  const [drivers, setDrivers] = useState(initialDrivers);
  const [formData, setFormData] = useState({
    driver_name: '',
    phone_number: '',
    vehicle_type: '',
    vehicle_number: '',
    vehicle_color: '',
  });

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'الرقم', width: 90 },
    { field: 'driver_name', headerName: 'اسم السائق', width: 200 },
    { field: 'phone_number', headerName: 'رقم الهاتف', width: 150 },
    { field: 'vehicle_type', headerName: 'نوع المركبة', width: 130 },
    { field: 'vehicle_number', headerName: 'رقم المركبة', width: 130 },
    { field: 'vehicle_color', headerName: 'لون المركبة', width: 130 },
    {
      field: 'created_at',
      headerName: 'تاريخ الإنشاء',
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
      driver_name: '',
      phone_number: '',
      vehicle_type: '',
      vehicle_number: '',
      vehicle_color: '',
    });
  };

  const handleEdit = (driver: any) => {
    setFormData({
      driver_name: driver.driver_name,
      phone_number: driver.phone_number,
      vehicle_type: driver.vehicle_type,
      vehicle_number: driver.vehicle_number,
      vehicle_color: driver.vehicle_color,
    });
    setOpen(true);
  };

  const handleDelete = (id: number) => {
    // Implement delete functionality
    console.log('Delete driver:', id);
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
          السائقين
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpen}
        >
          إضافة سائق
        </Button>
      </Box>

      <DataGrid
        rows={drivers}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        autoHeight
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {formData.driver_name ? 'تعديل سائق' : 'إضافة سائق جديد'}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="اسم السائق"
            fullWidth
            variant="outlined"
            value={formData.driver_name}
            onChange={(e) =>
              setFormData({ ...formData, driver_name: e.target.value })
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
            label="نوع المركبة"
            fullWidth
            variant="outlined"
            value={formData.vehicle_type}
            onChange={(e) =>
              setFormData({ ...formData, vehicle_type: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="رقم المركبة"
            fullWidth
            variant="outlined"
            value={formData.vehicle_number}
            onChange={(e) =>
              setFormData({ ...formData, vehicle_number: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="لون المركبة"
            fullWidth
            variant="outlined"
            value={formData.vehicle_color}
            onChange={(e) =>
              setFormData({ ...formData, vehicle_color: e.target.value })
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