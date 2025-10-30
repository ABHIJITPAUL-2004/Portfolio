import { Accordion, AccordionDetails, AccordionSummary, Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SectionHeader from '../components/SectionHeader';
import { education, experiences } from '../data/experience';

export default function Experience() {
  return (
    <Box component="section" sx={{ py: { xs: 4, md: 6 } }}>
      <SectionHeader title="Experience & Education" subtitle="Impact over duties" />
      {experiences.map((e) => (
        <Accordion key={e.id} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}> 
            <Typography sx={{ fontWeight: 600 }}>{e.role}</Typography>&nbsp;·&nbsp;
            <Typography color="text.secondary">{e.org} — {e.start}–{e.end}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              {e.bullets.map((b, idx) => (
                <ListItem key={idx}>
                  <ListItemText primary={b} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Education</Typography>
      {education.map((ed) => (
        <Accordion key={ed.id} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}> 
            <Typography sx={{ fontWeight: 600 }}>{ed.degree}</Typography>&nbsp;·&nbsp;
            <Typography color="text.secondary">{ed.org} — {ed.start}–{ed.end}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              {ed.bullets.map((b, idx) => (
                <ListItem key={idx}>
                  <ListItemText primary={b} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}


