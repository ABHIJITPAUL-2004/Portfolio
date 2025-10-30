import { Box, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import SectionHeader from '../components/SectionHeader';
import SkillChipGroup from '../components/SkillChipGroup';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <Box component="section" sx={{ py: { xs: 4, md: 6 } }}>
      <SectionHeader title="Skills" subtitle="Tools I use with confidence" />
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <SkillChipGroup title="Frontend" skills={skills.frontend} />
        </Grid>
        <Grid item xs={12} md={4}>
          <SkillChipGroup title="Backend" skills={skills.backend} />
        </Grid>
        <Grid item xs={12} md={4}>
          <SkillChipGroup title="Tools" skills={skills.tools} />
        </Grid>
      </Grid>
    </Box>
  );
}


