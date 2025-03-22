'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  IconButton,
  Tooltip,
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import PageLayout from '../components/PageLayout';
import FormDialog from '../components/FormDialog';
import EnhancedDataGrid from '../components/EnhancedDataGrid';
import { GridColDef } from '@mui/x-data-grid';

// Sample data - replace with actual API calls
const initialTrips = [
  {
    id: 1,
    route_name: 'الطريق الأول',
    driver_name: 'أحمد محمد',
    date: '2025-02-20',
    status: 'completed',
    start_time: '07:30',
    end_time: '08:45',
    students_count: 25,
    created_at: '2025-02-20 07:30:00',
  },
  {
    id: 2,
    route_name: 'الطريق الثاني',
    driver_name: 'محمد علي',
    date: '2025-02-20',
    status: 'in_progress',
    start_time: '07:45',
    end_time: null,
    students_count: 18,
    created_at: '2025-02-20 07:45:00',
  },
];

const statusColors: Record<string, 'success' | 'primary' | 'info' | 'error' | 'warning'> = {
  completed: 'success',
  in_progress: 'primary',
  scheduled: 'info',
  cancelled: 'error',
};

const statusLabels = {
  completed: 'مكتمل',
  in_progress: 'قيد التنفيذ',
  scheduled: 'مجدول',
  cancelled: 'ملغي',
};

export default function TripsPage() {
  const [open, setOpen] = useState(false);
  const [trips, setTrips] = useState(initialTrips);
  const [formData, setFormData] = useState({
    route_id: '',
    driver_id: '',
    date: '',
    start_time: '',
    status: 'scheduled',
  });

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'الرقم', width: 90 },
    { field: 'route_name', headerName: 'الطريق', width: 200 },
    { field: 'driver_name', headerName: 'السائق', width: 150 },
    { field: 'date', headerName: 'التاريخ', width: 120 },
    { field: 'start_time', headerName: 'وقت البدء', width: 120 },
    { field: 'end_time', headerName: 'وقت الانتهاء', width: 120 },
    { field: 'students_count', headerName: 'عدد الطلاب', width: 120 },
    {
      field: 'status',
      headerName: 'الحالة',
      width: 130,
      renderCell: (params) => (
        <Chip
          label={statusLabels[params.value as keyof typeof statusLabels]}
          color={statusColors[params.value as keyof typeof statusColors]}
          size="small"
        />
      ),
    },
    {
      field: 'created_at',
      headerName: 'تاريخ الإنشاء',
      width: 180,
      valueFormatter: (params: { value: string }) => new Date(params.value).toLocaleString('ar-SA'),
    },
    {
      field: 'actions',
      headerName: 'الإجراءات',
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <Box>
          <Tooltip title="تعديل">
            <IconButton
              size="small"
              onClick={() => handleEdit(params.row)}
              color="primary"
            >
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="حذف">
            <IconButton
              size="small"
              onClick={() => handleDelete(params.row.id)}
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFormData({
      route_id: '',
      driver_id: '',
      date: '',
      start_time: '',
      status: 'scheduled',
    });
  };

  const handleEdit = (trip: any) => {
    setFormData({
      route_id: trip.route_id,
      driver_id: trip.driver_id,
      date: trip.date,
      start_time: trip.start_time,
      status: trip.status,
    });
    setOpen(true);
  };

  const handleDelete = (id: number) => {
    // Implement delete functionality
    console.log('Delete trip:', id);
  };

  const handleSubmit = () => {
    // Implement submit functionality
    console.log('Submit form:', formData);
    handleClose();
  };

  const actionButton = (
    <Button
      variant="contained"
      startIcon={<AddIcon />}
      onClick={handleOpen}
      sx={{ borderRadius: 2 }}
    >
      إضافة رحلة
    </Button>
  );

  return (
    <PageLayout title="الرحلات" actionButton={actionButton}>
      <EnhancedDataGrid
        rows={trips}
        columns={columns}
      />

      <FormDialog
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
        title={formData.route_id ? 'تعديل رحلة' : 'إضافة رحلة جديدة'}
      >
        <FormControl fullWidth>
          <InputLabel>الطريق</InputLabel>
          <Select
            value={formData.route_id}
            label="الطريق"
            onChange={(e) =>
              setFormData({ ...formData, route_id: e.target.value })
            }
          >
            <MenuItem value="1">الطريق الأول</MenuItem>
            <MenuItem value="2">الطريق الثاني</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>السائق</InputLabel>
          <Select
            value={formData.driver_id}
            label="السائق"
            onChange={(e) =>
              setFormData({ ...formData, driver_id: e.target.value })
            }
          >
            <MenuItem value="1">أحمد محمد</MenuItem>
            <MenuItem value="2">محمد علي</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="التاريخ"
          type="date"
          fullWidth
          value={formData.date}
          onChange={(e) =>
            setFormData({ ...formData, date: e.target.value })
          }
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          label="وقت البدء"
          type="time"
          fullWidth
          value={formData.start_time}
          onChange={(e) =>
            setFormData({ ...formData, start_time: e.target.value })
          }
          InputLabelProps={{ shrink: true }}
        />

        <FormControl fullWidth>
          <InputLabel>الحالة</InputLabel>
          <Select
            value={formData.status}
            label="الحالة"
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
          >
            <MenuItem value="scheduled">مجدول</MenuItem>
            <MenuItem value="in_progress">قيد التنفيذ</MenuItem>
            <MenuItem value="completed">مكتمل</MenuItem>
            <MenuItem value="cancelled">ملغي</MenuItem>
          </Select>
        </FormControl>
      </FormDialog>
    </PageLayout>
  );
} 