import { useMemo, useState } from 'react';
import { Box, Chip, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import { projects, projectTags } from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filtered = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((p) => p.tags.includes(filter));
  }, [filter]);

  return (
    <Box component="section" sx={{ py: { xs: 4, md: 6 } }}>
      <SectionHeader title="Projects" subtitle="Problem → Approach → Outcome" />
      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 3 }}>
        {projectTags.map((t) => (
          <Chip key={t} label={t} clickable color={t === filter ? 'primary' : 'default'} onClick={() => setFilter(t)} />
        ))}
      </Stack>
      <Grid container spacing={3}>
        {filtered.map((p) => (
          <Grid item xs={12} sm={6} md={4} key={p.id}>
            <ProjectCard project={p} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}


