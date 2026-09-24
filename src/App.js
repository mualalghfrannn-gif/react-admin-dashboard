
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import {ThemeProvider} from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Header from './header/Header';
import Sidbar from './header/sidbar'; 
import { useState } from 'react';
import { useMemo } from 'react';
import A from './A/A';
import { Routes, Route, Navigate } from 'react-router-dom';
import B from './A/B';
import C from './A/C';  
import D from './A/D';
import E from './A/E';
import F from './A/F';
import G from './A/G';
import H from './A/H';
import I from './A/rows/I';
import Home from './A/Home';
import "./App.css"
import { getDesignTokens } from "./Theme";
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
export default function App() {
  const [open, setOpen] = useState(false);
const [mode , setmode] = useState(localStorage.getItem("mode") ?  localStorage.getItem("mode") : "dark");
const Theme = useMemo(() => createTheme(getDesignTokens( mode)), [mode]);
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  }
  return (
     <ThemeProvider theme={Theme}>
       <Box sx={{ display: 'flex' }}>
      <CssBaseline />
   <Header open={open} handleDrawerOpen={handleDrawerOpen} mode={mode} toggleMode={() => setmode(mode === 'light' ? 'dark' : 'light')} />
    <Sidbar open={open} handleDrawerClose={handleDrawerClose} />
     
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography sx={{ marginBottom: 2 }}>
         <Routes path="/" element={<Navigate to="/home" replace />} >
           <Route path="/home" element={<Home />} />
            <Route path="/a" element={<A />} />
            <Route path="/b" element={<B />} />
            <Route path="/c" element={<C  />} />
            <Route path="/d" element={<D />} />
            <Route path="/e" element={<E />} />
            <Route path="/f" element={<F />} />
            <Route path="/g" element={<G />} />
            <Route path="/h" element={<H />} />
            <Route path="/i" element={<I />} />
          </Routes>
        </Typography>
      </Box>
    </Box>
     </ThemeProvider>
   
  );
}
