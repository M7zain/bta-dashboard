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
import { Student, StudentFormData } from '../types';

// Sample data - replace with actual API calls
const initialStudents: Student[] = [
  {
    id: 1,
    student_name: 'أحمد محمد',
    parent_name: 'محمد أحمد',
    parent_phone: '+962786752056',
    school_id: 1,
    school_name: 'مدرسة النور',
    grade: 'الصف الأول',
    class: 'أ',
    created_at: '2025-02-09 23:59:00',
  },
];

export default function StudentsPage() {
  const [open, setOpen] = useState(false);
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [formData, setFormData] = useState<StudentFormData>({
    student_name: '',
    parent_name: '',
    parent_phone: '',
    school_id: 0,
    grade: '',
    class: '',
  });

  const columns: GridColDef<Student>[] = [
    { field: 'id', headerName: 'الرقم', width: 90 },
    { field: 'student_name', headerName: 'اسم الطالب', width: 200 },
    { field: 'parent_name', headerName: 'اسم ولي الأمر', width: 200 },
    { field: 'parent_phone', headerName: 'رقم هاتف ولي الأمر', width: 150 },
    { field: 'school_name', headerName: 'المدرسة', width: 200 },
    { field: 'grade', headerName: 'الصف', width: 130 },
    { field: 'class', headerName: 'الصف', width: 90 },
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
      student_name: '',
      parent_name: '',
      parent_phone: '',
      school_id: 0,
      grade: '',
      class: '',
    });
  };

  const handleEdit = (student: Student) => {
    setFormData({
      student_name: student.student_name,
      parent_name: student.parent_name,
      parent_phone: student.parent_phone,
      school_id: student.school_id,
      grade: student.grade,
      class: student.class,
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

      <DataGrid<Student>
        rows={students}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        disableRowSelectionOnClick
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
          <TextField
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
            label="رقم هاتف ولي الأمر"
            fullWidth
            variant="outlined"
            value={formData.parent_phone}
            onChange={(e) =>
              setFormData({ ...formData, parent_phone: e.target.value })
            }
          />

          <FormControl fullWidth margin="dense">
            <InputLabel>المدرسة</InputLabel>
            <Select
              value={formData.school_id}
              label="المدرسة"
              onChange={(e) =>
                setFormData({ ...formData, school_id: Number(e.target.value) })
              }
            >
              <MenuItem value={1}>مدرسة النور</MenuItem>
              <MenuItem value={2}>مدرسة السلام</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="dense">
            <InputLabel>الصف</InputLabel>
            <Select
              value={formData.grade}
              label="الصف"
              onChange={(e) =>
                setFormData({ ...formData, grade: e.target.value })
              }
            >
              <MenuItem value="الصف الأول">الصف الأول</MenuItem>
              <MenuItem value="الصف الثاني">الصف الثاني</MenuItem>
              <MenuItem value="الصف الثالث">الصف الثالث</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="dense">
            <InputLabel>الصف</InputLabel>
            <Select
              value={formData.class}
              label="الصف"
              onChange={(e) =>
                setFormData({ ...formData, class: e.target.value })
              }
            >
              <MenuItem value="أ">أ</MenuItem>
              <MenuItem value="ب">ب</MenuItem>
              <MenuItem value="ج">ج</MenuItem>
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