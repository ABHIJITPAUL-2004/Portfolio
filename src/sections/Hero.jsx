import { Box, Button, Chip, Stack, Typography, Paper } from '@mui/material';

export default function Hero() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Paper elevation={4} sx={{
        px: { xs: 3, md: 6 },
        py: { xs: 4, md: 6 },
        mx: 'auto',
        maxWidth: 960,
        borderRadius: 4,
        background: 'linear-gradient(135deg, rgba(25,118,210,0.10) 0%, rgba(21,101,192,0.06) 40%, rgba(21,101,192,0.02) 100%)',
        backdropFilter: 'blur(2px)'
      }}>
        <Stack spacing={3} alignItems={{ xs: 'flex-start', md: 'center' }} textAlign={{ xs: 'left', md: 'center' }}>
          <Typography variant="h2">Abhijit Paul</Typography>
          <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'center' }, width: '100%' }}>
            <img
              src="https://holy-moccasin-q0utyxhwmq.edgeone.app/IMG_20210903_183103.jpg"
              alt="Abhijit Paul profile"
              style={{ width: 112, height: 112, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 6px 20px rgba(0,0,0,0.1)' }}
            />
          </Box>
          <Typography variant="h5" color="text.secondary">Software Engineer</Typography>
          <Typography maxWidth={720} color="text.secondary">
            I innovate with purpose and ship performant, accessible software—translating complexity into simple, usable products.
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            <Chip color="primary" label="Frontend" />
            <Chip variant="outlined" label="Systems" />
            <Chip variant="outlined" label="Performance" />
            <Chip variant="outlined" label="Accessibility" />
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" href="/cv.pdf" download>
              Download CV
            </Button>
            <Button variant="outlined" href="/contact">
              Contact
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}


