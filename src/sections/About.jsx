import { Box, Paper, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import SectionHeader from '../components/SectionHeader';

export default function About() {
  return (
    <Box component="section" sx={{ py: { xs: 4, md: 6 } }}>
      <SectionHeader title="About" subtitle="Who I am and what I enjoy" />
      <Grid container spacing={4} alignItems="stretch">
        <Grid item xs={12}>
          <Typography>
            Software Engineer with a track record improving user experience and performance at Apple and Microsoft.
            I focus on clean APIs, design systems, and shipping accessible, reliable software.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2, height: '100%', borderTop: '4px solid', borderColor: 'primary.main' }}>
            <Typography variant="overline" color="primary">Location</Typography>
            <Typography variant="h6">Andhra Pradesh, India</Typography>
            <Typography color="text.secondary">Remote-friendly</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2, height: '100%', borderTop: '4px solid', borderColor: 'primary.main' }}>
            <Typography variant="overline" color="primary">Availability</Typography>
            <Typography variant="h6">Open to opportunities</Typography>
            <Typography color="text.secondary">Internships · Full-time</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2, height: '100%', borderTop: '4px solid', borderColor: 'primary.main' }}>
            <Typography variant="overline" color="primary">Languages</Typography>
            <Typography variant="h6">English, Japanese</Typography>
            <Typography color="text.secondary">Bilingual communicator</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}


