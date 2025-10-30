import { Card, CardActions, CardContent, CardHeader, Chip, Stack, Typography, Button } from '@mui/material';

export default function ProjectCard({ project }) {
  const { title, summary, tags, role, demoUrl, repoUrl } = project;
  return (
    <Card component="article" elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardHeader title={title} subheader={role} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {summary}
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" aria-label="Project tags">
          {tags?.map((t) => (
            <Chip key={t} size="small" label={t} variant="outlined" />
          ))}
        </Stack>
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2 }}>
        {demoUrl ? (
          <Button size="small" variant="contained" color="primary" href={demoUrl} target="_blank" rel="noreferrer">
            Live Demo
          </Button>
        ) : null}
        {repoUrl ? (
          <Button size="small" variant="outlined" href={repoUrl} target="_blank" rel="noreferrer">
            Source
          </Button>
        ) : null}
      </CardActions>
    </Card>
  );
}


