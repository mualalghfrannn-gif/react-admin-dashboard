import React from 'react';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import MuiDrawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';

import { useNavigate , useLocation } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width:` calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width:` calc(${theme.spacing(8)} + 1px)`,
  },
});
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);
const arr1 = [
  {title:"dashboard" , path:"/home" , icon:<HomeOutlinedIcon />},
  {title:"manage team" , path:"/a" , icon:<PeopleAltOutlinedIcon />},
  {title:"contacts information" , path:"/b" , icon:<ContactsOutlinedIcon />},
  {title:"invoices balances" , path:"/c" , icon:<ReceiptOutlinedIcon />},
];
const arr2 = [
  {title:"profile form" , path:"/d" , icon:<Person2OutlinedIcon />},
  {title:"calendar" , path:"/e" , icon:<CalendarTodayOutlinedIcon />},
  {title:"faq page" , path:"/f" , icon:<HelpOutlineOutlinedIcon />},
];
const arr3 = [
  {title:"bar charts" , path:"/g" , icon:<BarChartOutlinedIcon />},
  {title:"pie charts" , path:"/h" , icon:<DonutLargeOutlinedIcon />},
  {title:"line charts" , path:"/i" , icon:<TimelineOutlinedIcon />},
];
export default function Sidbar({ open, handleDrawerClose }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {arr1.map((item) => (
          <ListItem key={item.title} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
            onClick={() => navigate(item.path)}
              sx={[
                { minHeight: 48, px: 2.5 },
                open ? { justifyContent: 'initial' } : { justifyContent: 'center' },
              ]}
            >
              <ListItemIcon
                sx={[
                  { minWidth: 0, justifyItems: 'center' },
                  open ? { mr: 3 } : { mr: 'auto' },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                sx={[open ? { opacity: 1 } : { opacity: 0 }]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
 <Divider />

 <List>
        {arr2.map((item) => (
          <ListItem key={item.title} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={[
                { minHeight: 48, px: 2.5 },
                open ? { justifyContent: 'initial' } : { justifyContent: 'center' },
              ]}
            >
              <ListItemIcon
                sx={[
                  { minWidth: 0, justifyItems: 'center' },
                  open ? { mr: 3 } : { mr: 'auto' },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                sx={[open ? { opacity: 1 } : { opacity: 0 }]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
 <Divider />
  <List>
        {arr3.map((item) => (
          <ListItem key={item.title} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={[
                { minHeight: 48, px: 2.5 ,
              
                },
                open ? { justifyContent: 'initial' } : { justifyContent: 'center' },
              ]}
            >
              <ListItemIcon
                sx={[
                  { minWidth: 0, justifyItems: 'center' },
                  open ? { mr: 3 } : { mr: 'auto' },
                ]}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                sx={[open ? { opacity: 1 } : { opacity: 0 }]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}