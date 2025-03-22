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
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Badge,
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Info as InfoIcon,
} from '@mui/icons-material';

type NotificationType = 'info' | 'warning' | 'error' | 'success';

interface Notification {
  id: number;
  title: string;
  message: string;
  type: NotificationType;
  created_at: string;
}

interface NotificationFormData {
  title: string;
  message: string;
  type: NotificationType;
}

const typeColors: Record<NotificationType, 'success' | 'primary' | 'info' | 'error' | 'warning'> = {
  info: 'info',
  warning: 'warning',
  error: 'error',
  success: 'success',
};

const typeLabels: Record<NotificationType, string> = {
  info: 'معلومات',
  warning: 'تحذير',
  error: 'خطأ',
  success: 'نجاح',
};

// Sample data - replace with actual API calls
const initialNotifications = [
  {
    id: 1,
    title: 'تأخير في الوصول',
    message: 'تأخر السائق أحمد محمد عن موعد الوصول المتوقع',
    type: 'warning',
    created_at: '2025-02-20 07:30:00',
    read: false,
  },
  {
    id: 2,
    title: 'غياب طالب',
    message: 'الطالب سارة خالد غائب اليوم',
    type: 'info',
    created_at: '2025-02-20 07:45:00',
    read: true,
  },
];

const typeIcons = {
  success: <CheckCircleIcon />,
  warning: <WarningIcon />,
  error: <WarningIcon />,
  info: <InfoIcon />,
};

export default function NotificationsPage() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    type: 'info',
  });

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFormData({
      title: '',
      message: '',
      type: 'info',
    });
  };

  const handleDelete = (id: number) => {
    // Implement delete functionality
    console.log('Delete notification:', id);
  };

  const handleSubmit = () => {
    // Implement submit functionality
    console.log('Submit form:', formData);
    handleClose();
  };

  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Badge badgeContent={unreadCount} color="error">
            <NotificationsIcon sx={{ fontSize: 30, mr: 1 }} />
          </Badge>
          <Typography variant="h4" component="h1">
            الإشعارات
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpen}
        >
          إضافة إشعار
        </Button>
      </Box>

      <List>
        {notifications.map((notification) => (
          <ListItem
            key={notification.id}
            sx={{
              bgcolor: notification.read ? 'transparent' : 'action.hover',
              mb: 1,
              borderRadius: 1,
            }}
          >
            <ListItemIcon>
              {typeIcons[notification.type as keyof typeof typeIcons]}
            </ListItemIcon>
            <ListItemText
              primary={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="subtitle1">
                    {notification.title}
                  </Typography>
                  <Chip
                    size="small"
                    label={typeLabels[notification.type as NotificationType]}
                    color={typeColors[notification.type as NotificationType]}
                  />
                </Box>
              }
              secondary={
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    {notification.message}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {new Date(notification.created_at).toLocaleString('ar-SA')}
                  </Typography>
                </Box>
              }
            />
            <IconButton
              edge="end"
              color="error"
              onClick={() => handleDelete(notification.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>إضافة إشعار جديد</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="العنوان"
            fullWidth
            variant="outlined"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="الرسالة"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>النوع</InputLabel>
            <Select
              value={formData.type}
              label="النوع"
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value as NotificationType })
              }
            >
              <MenuItem value="success">نجاح</MenuItem>
              <MenuItem value="warning">تحذير</MenuItem>
              <MenuItem value="error">خطأ</MenuItem>
              <MenuItem value="info">معلومات</MenuItem>
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