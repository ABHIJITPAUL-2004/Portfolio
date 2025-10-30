import { Badge, Box, Chip, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import SectionHeader from '../components/SectionHeader';
import { achievements, testimonials, posts } from '../data/achievements';

export default function Achievements() {
  return (
    <Box component="section" sx={{ py: { xs: 4, md: 6 } }}>
      <SectionHeader title="Achievements & Certifications" />
      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 3 }}>
        {achievements.map((a) => (
          <Chip key={a.id} label={`${a.title} — ${a.org} (${a.date})`} />
        ))}
      </Stack>
      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>Testimonials</Typography>
      <Grid container spacing={2}>
        {testimonials.map((t) => (
          <Grid item xs={12} md={6} key={t.id}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{t.name} — {t.role}</Typography>
            <Typography color="text.secondary">“{t.quote}”</Typography>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Writing</Typography>
      <Stack spacing={1}>
        {posts.map((p) => (
          <Typography key={p.id}>
            <b>{p.title}</b> — <span style={{ color: 'GrayText' }}>{p.date}</span> — {p.excerpt}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}


