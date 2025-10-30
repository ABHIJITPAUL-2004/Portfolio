import { Chip, Stack, Typography } from '@mui/material';

export default function SkillChipGroup({ title, skills }) {
  return (
    <div>
      <Typography variant="h6" sx={{ mb: 1 }}>{title}</Typography>
      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" aria-label={`${title} skills`}>
        {skills.map((s) => (
          <Chip key={s} label={s} variant="outlined" />
        ))}
      </Stack>
    </div>
  );
}


