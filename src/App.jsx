import { useMemo } from 'react';
import { Link as RouterLink, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ThemeProvider } from '@mui/material/styles';
import { useThemeMode } from './hooks/useThemeMode';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

function Shell({ toggleMode, mode }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = (path) => currentPath === path;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh' }}>
      <AppBar position="sticky" color="primary" enableColorOnDark>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link component={RouterLink} to="/" underline="none" color="inherit" aria-label="Home">
              Student Portfolio
            </Link>
          </Typography>
          <Link component={RouterLink} to="/projects" color={isActive('/projects') ? 'primary' : 'inherit'} sx={{ mx: 1 }}>
            Projects
          </Link>
          <Link component={RouterLink} to="/contact" color={isActive('/contact') ? 'primary' : 'inherit'} sx={{ mx: 1 }}>
            Contact
          </Link>
          <IconButton aria-label="Toggle theme" onClick={toggleMode} sx={{ ml: 1 }}>
            {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ py: { xs: 3, md: 6 }, flex: 1 }}>
        <Outlet />
      </Container>
      <Box component="footer" sx={{ py: 3, bgcolor: 'background.paper' }}>
        <Container>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Student Name · Last updated {new Date().toISOString().slice(0, 10)}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

function HomePage() {
  return (
    <Box>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
    </Box>
  );
}

export default function App() {
  const { mode, theme, toggleMode } = useThemeMode();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route element={<Shell toggleMode={toggleMode} mode={mode} />}> 
          <Route index element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

