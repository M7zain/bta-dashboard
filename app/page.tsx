'use client';

import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import {
  School as SchoolIcon,
  People as PeopleIcon,
  DirectionsCar as CarIcon,
  Person as PersonIcon,
  Route as RouteIcon,
  EventBusy as AbsenceIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';

const stats = [
  { title: 'المدارس', value: '4', icon: <SchoolIcon />, color: '#1976d2' },
  { title: 'الطلاب', value: '3', icon: <PeopleIcon />, color: '#2e7d32' },
  { title: 'السائقين', value: '2', icon: <CarIcon />, color: '#ed6c02' },
  { title: 'أولياء الأمور', value: '2', icon: <PersonIcon />, color: '#9c27b0' },
];

const recentActivities = [
  {
    id: 1,
    title: 'بدء رحلة جديدة',
    description: 'تم بدء رحلة رحلة المدرسة الصباحية - حي النزهة',
    time: 'منذ 5 دقائق',
  },
  {
    id: 2,
    title: 'تسجيل غياب',
    description: 'تم تسجيل غياب الطالب أحمد أحمد',
    time: 'منذ 15 دقيقة',
  },
  {
    id: 3,
    title: 'إضافة سائق جديد',
    description: 'تم إضافة سائق جديد للنظام',
    time: 'منذ ساعة',
  },
];

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        لوحة التحكم
      </Typography>

      <Grid container spacing={3}>
        {/* Statistics Cards */}
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      backgroundColor: `${stat.color}15`,
                      borderRadius: '50%',
                      p: 1,
                      mr: 2,
                    }}
                  >
                    {React.cloneElement(stat.icon, {
                      sx: { color: stat.color },
                    })}
                  </Box>
                  <Typography variant="h6" component="div">
                    {stat.title}
                  </Typography>
                </Box>
                <Typography variant="h4" component="div">
                  {stat.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {/* Recent Activities */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              النشاطات الأخيرة
            </Typography>
            <List>
              {recentActivities.map((activity) => (
                <ListItem key={activity.id}>
                  <ListItemIcon>
                    <NotificationsIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={activity.title}
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {activity.description}
                        </Typography>
                        {' — '}
                        {activity.time}
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Quick Actions */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              إجراءات سريعة
            </Typography>
            <Grid container spacing={2}>
              {[
                { title: 'إضافة مدرسة', icon: <SchoolIcon /> },
                { title: 'إضافة طالب', icon: <PeopleIcon /> },
                { title: 'إضافة سائق', icon: <CarIcon /> },
                { title: 'إضافة ولي أمر', icon: <PersonIcon /> },
              ].map((action) => (
                <Grid item xs={6} key={action.title}>
                  <Card
                    sx={{
                      cursor: 'pointer',
                      '&:hover': {
                        backgroundColor: 'action.hover',
                      },
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {action.icon}
                        <Typography sx={{ mr: 1 }}>{action.title}</Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
