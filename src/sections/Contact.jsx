import { useState } from 'react';
import { Alert, Box, Button, Snackbar, Stack, TextField, Typography } from '@mui/material';
import SectionHeader from '../components/SectionHeader';

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [snack, setSnack] = useState({ open: false, severity: 'success', msg: '' });

  const handleChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValid = /.+@.+\..+/.test(values.email);
    if (!values.name || !values.email || !emailValid || !values.message) {
      setSnack({ open: true, severity: 'error', msg: 'Please complete all fields with a valid email.' });
      return;
    }
    setSnack({ open: true, severity: 'success', msg: 'Thanks! I will get back to you shortly.' });
    setValues({ name: '', email: '', message: '' });
  };

  return (
    <Box component="section" sx={{ py: { xs: 4, md: 6 } }}>
      <SectionHeader title="Contact" subtitle="Open to internships / freelance / full-time roles" />
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ maxWidth: 640 }}>
        <Stack spacing={2}>
          <TextField label="Name" name="name" required value={values.name} onChange={handleChange} />
          <TextField label="Email" name="email" type="email" required value={values.email} onChange={handleChange} />
          <TextField label="Message" name="message" required multiline minRows={4} value={values.message} onChange={handleChange} />
          <Stack direction="row" spacing={2}>
            <Button type="submit" variant="contained">Send Message</Button>
            <Button variant="text" href="https://github.com/abhijitpaul" target="_blank" rel="noreferrer">GitHub</Button>
            <Button variant="text" href="https://www.linkedin.com/in/abhijit-paul" target="_blank" rel="noreferrer">LinkedIn</Button>
          </Stack>
        </Stack>
      </Box>
      <Snackbar open={snack.open} autoHideDuration={3000} onClose={() => setSnack((s) => ({ ...s, open: false }))}>
        <Alert severity={snack.severity} variant="filled">{snack.msg}</Alert>
      </Snackbar>
    </Box>
  );
}


