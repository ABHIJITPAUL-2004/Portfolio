import { Stack, Typography } from '@mui/material';

export default function SectionHeader({ title, subtitle }) {
  return (
    <Stack spacing={0.5} component="header" role="heading" aria-level={2} sx={{ mb: 3 }}>
      <Typography variant="h4" component="h2">{title}</Typography>
      {subtitle ? (
        <Typography variant="body1" color="text.secondary">{subtitle}</Typography>
      ) : null}
    </Stack>
  );
}


