import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Box,
  Typography,
  Divider,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  DirectionsBus as BusIcon,
  School as SchoolIcon,
  Person as PersonIcon,
  Group as GroupIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const drawerWidth = 240;

const menuItems = [
  { text: 'لوحة التحكم', icon: <DashboardIcon />, path: '/admin' },
  { text: 'الرحلات', icon: <BusIcon />, path: '/admin/trips' },
  { text: 'الطلاب', icon: <SchoolIcon />, path: '/admin/students' },
  { text: 'السائقين', icon: <PersonIcon />, path: '/admin/drivers' },
  { text: 'أولياء الأمور', icon: <GroupIcon />, path: '/admin/parents' },
  { text: 'الإشعارات', icon: <NotificationsIcon />, path: '/admin/notifications' },
  { text: 'الإعدادات', icon: <SettingsIcon />, path: '/admin/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          mt: 8,
        },
      }}
    >
      <Box sx={{ overflow: 'auto', mt: 2 }}>
        <Typography variant="h6" sx={{ p: 2, textAlign: 'center' }}>
          نظام إدارة النقل المدرسي
        </Typography>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={Link}
                href={item.path}
                selected={pathname === item.path}
                sx={{
                  '&.Mui-selected': {
                    backgroundColor: 'primary.light',
                    '&:hover': {
                      backgroundColor: 'primary.light',
                    },
                    '& .MuiListItemIcon-root': {
                      color: 'primary.main',
                    },
                    '& .MuiListItemText-primary': {
                      color: 'primary.main',
                    },
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
} 