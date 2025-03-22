import React from 'react';
import { Box, Paper, Typography, useTheme } from '@mui/material';

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
  actionButton?: React.ReactNode;
}

export default function PageLayout({ title, children, actionButton }: PageLayoutProps) {
  const theme = useTheme();

  return (
    <Box sx={{ p: 3, height: '100%' }}>
      <Paper
        elevation={0}
        sx={{
          p: 3,
          height: '100%',
          background: theme.palette.background.default,
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
            pb: 2,
            borderBottom: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 600,
              color: theme.palette.primary.main,
            }}
          >
            {title}
          </Typography>
          {actionButton}
        </Box>
        {children}
      </Paper>
    </Box>
  );
} 