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
const initialStudents = [
  {
    id: 1,
    student_name: 'احمد احمد',
    parent_name: 'مختار الفالوجي',
    parent_phone: '9627971198',
    created_at: '2025-02-08 06:06:30',
  },
  {
    id: 2,
    student_name: 'محمد محمد',
    parent_name: 'مختار الفالوجي',
    parent_phone: '9627971198',
    created_at: '2025-02-08 06:06:30',
  },
  {
    id: 3,
    student_name: 'مها المصري',
    parent_name: 'محمود البتك',
    parent_phone: '+98777777',
    created_at: '2025-02-08 06:06:55',
  },
];

export default function StudentsPage() {
  const [open, setOpen] = useState(false);
  const [students, setStudents] = useState(initialStudents);
  const [formData, setFormData] = useState({
    student_name: '',
    parent_id: '',
  });

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'الرقم', width: 90 },
    { field: 'student_name', headerName: 'اسم الطالب', width: 200 },
    { field: 'parent_name', headerName: 'اسم ولي الأمر', width: 200 },
    { field: 'parent_phone', headerName: 'رقم هاتف ولي الأمر', width: 150 },
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
    setFormData({ student_name: '', parent_id: '' });
  };

  const handleEdit = (student: any) => {
    setFormData({
      student_name: student.student_name,
      parent_id: student.parent_id,
    });
    setOpen(true);
  };

  const handleDelete = (id: number) => {
    // Implement delete functionality
    console.log('Delete student:', id);
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
          الطلاب
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpen}
        >
          إضافة طالب
        </Button>
      </Box>

      <DataGrid
        rows={students}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        autoHeight
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {formData.student_name ? 'تعديل طالب' : 'إضافة طالب جديد'}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="اسم الطالب"
            fullWidth
            variant="outlined"
            value={formData.student_name}
            onChange={(e) =>
              setFormData({ ...formData, student_name: e.target.value })
            }
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>ولي الأمر</InputLabel>
            <Select
              value={formData.parent_id}
              label="ولي الأمر"
              onChange={(e) =>
                setFormData({ ...formData, parent_id: e.target.value })
              }
            >
              <MenuItem value={1}>مختار الفالوجي</MenuItem>
              <MenuItem value={2}>محمود البتك</MenuItem>
            </Select>
          </FormControl>
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