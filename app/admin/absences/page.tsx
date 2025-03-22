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
  Chip,
} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Add as AddIcon } from '@mui/icons-material';
import { Absence, AbsenceFormData } from '../types';

// Sample data - replace with actual API calls
const initialAbsences: Absence[] = [
  {
    id: 1,
    student_id: 1,
    student_name: 'أحمد محمد',
    parent_name: 'محمد أحمد',
    date: '2025-02-20',
    type: 'excused',
    reason: 'مرض',
    created_at: '2025-02-20 07:30:00',
  },
  {
    id: 2,
    student_id: 2,
    student_name: 'سارة خالد',
    parent_name: 'خالد سارة',
    date: '2025-02-20',
    type: 'unexcused',
    reason: '',
    created_at: '2025-02-20 07:45:00',
  },
];

const typeColors: Record<Absence['type'], 'success' | 'primary' | 'info' | 'error' | 'warning'> = {
  excused: 'success',
  unexcused: 'error',
};

const typeLabels: Record<Absence['type'], string> = {
  excused: 'معذور',
  unexcused: 'غير معذور',
};

export default function AbsencesPage() {
  const [open, setOpen] = useState(false);
  const [absences, setAbsences] = useState<Absence[]>(initialAbsences);
  const [formData, setFormData] = useState<AbsenceFormData>({
    student_id: 0,
    date: '',
    type: 'excused',
    reason: '',
  });

  const columns: GridColDef<Absence>[] = [
    { field: 'id', headerName: 'الرقم', width: 90 },
    { field: 'student_name', headerName: 'اسم الطالب', width: 200 },
    { field: 'parent_name', headerName: 'اسم ولي الأمر', width: 200 },
    { field: 'date', headerName: 'التاريخ', width: 120 },
    {
      field: 'type',
      headerName: 'النوع',
      width: 130,
      renderCell: (params) => (
        <Chip
          label={typeLabels[params.value as Absence['type']]}
          color={typeColors[params.value as Absence['type']]}
        />
      ),
    },
    { field: 'reason', headerName: 'السبب', width: 200 },
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
      student_id: 0,
      date: '',
      type: 'excused',
      reason: '',
    });
  };

  const handleEdit = (absence: Absence) => {
    setFormData({
      student_id: absence.student_id,
      date: absence.date,
      type: absence.type,
      reason: absence.reason,
    });
    setOpen(true);
  };

  const handleDelete = (id: number) => {
    // Implement delete functionality
    console.log('Delete absence:', id);
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
          الغياب
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpen}
        >
          إضافة غياب
        </Button>
      </Box>

      <DataGrid<Absence>
        rows={absences}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        disableRowSelectionOnClick
        autoHeight
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {formData.student_id ? 'تعديل غياب' : 'إضافة غياب جديد'}
        </DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="dense">
            <InputLabel>الطالب</InputLabel>
            <Select
              value={formData.student_id}
              label="الطالب"
              onChange={(e) =>
                setFormData({ ...formData, student_id: Number(e.target.value) })
              }
            >
              <MenuItem value={1}>أحمد محمد</MenuItem>
              <MenuItem value={2}>سارة خالد</MenuItem>
            </Select>
          </FormControl>

          <TextField
            margin="dense"
            label="التاريخ"
            type="date"
            fullWidth
            variant="outlined"
            value={formData.date}
            onChange={(e) =>
              setFormData({ ...formData, date: e.target.value })
            }
            InputLabelProps={{ shrink: true }}
          />

          <FormControl fullWidth margin="dense">
            <InputLabel>نوع الغياب</InputLabel>
            <Select
              value={formData.type}
              label="نوع الغياب"
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value as Absence['type'] })
              }
            >
              <MenuItem value="excused">معذور</MenuItem>
              <MenuItem value="unexcused">غير معذور</MenuItem>
            </Select>
          </FormControl>

          <TextField
            margin="dense"
            label="السبب"
            fullWidth
            variant="outlined"
            multiline
            rows={3}
            value={formData.reason}
            onChange={(e) =>
              setFormData({ ...formData, reason: e.target.value })
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