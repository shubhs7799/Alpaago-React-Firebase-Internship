import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { MdDeleteOutline } from "react-icons/md";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import { MdOutlineDashboard } from "react-icons/md";
import { MdContacts } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { makeStyles } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaUsersLine } from "react-icons/fa6";
import Switch from '@mui/material/Switch';
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "@mui/material/Button";
import Homepage from "./Homepage";
//import { RiDeleteBin6Line } from "react-icons/ri";
//import { GrEdit } from "react-icons/gr";


const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    marginTop: "64px", // Adjust this value based on your app bar height
    minHeight: `calc(100vh - 64px)`, // Adjust this value based on your app bar height
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
    },
    '&::before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    '&::after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}));

export default function TablePage() {
  const [open, setOpen] = React.useState(false);
    const theme = useTheme();
  const [selectedMenu, setSelectedMenu] = React.useState('table'); // New state to track selected menu



  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const fakeData = [
    { userName: 'John Doe', addedDate: '2024-02-03', status: true },
    { userName: 'Jane Smith', addedDate: '2024-02-04', status: false },
    // Add more data as needed
  ];

  return (
    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "space-between" }}>
      <CssBaseline  />
      <AppBar position="fixed" open={open}  sx={{ backgroundColor: 'white' }}>
        <Toolbar  >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }),color:"black" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor:"#cef3ff",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItemButton
            sx={{ "&:hover": { backgroundColor: '#2da5fc' } }}
            onClick={() => handleMenuClick('table')}
          >
            <IoHomeOutline  style={{ marginRight: '10px'}}/> User
          </ListItemButton>
          <ListItemButton
            sx={{ "&:hover": { backgroundColor: '#2da5fc' } }}
            onClick={() => handleMenuClick('weather')}
          >
            <FaUsersLine  style={{ marginRight: '10px' }}/> Home
          </ListItemButton>
        </List>
        <Divider />
        <List>
          <ListItemButton sx={{ "&:hover": { backgroundColor: '#2da5fc' } }} style={{ marginTop: '500px' }}>
            <IoLogOutOutline style={{ marginRight: '10px' }}/> Logout
          </ListItemButton>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {/* Conditionally render either the WeatherComponent or the TableComponent */}
        {selectedMenu === 'table' ? (
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead style={{backgroundColor : "#b2dfff"}}>
                <TableRow>
                  <TableCell align="left">UseName</TableCell>
                  <TableCell align="left">
                    <TableSortLabel active={true} >
                      | Added Date
                    </TableSortLabel>
                  </TableCell>
                  <TableCell align="left" >
                    <TableSortLabel active={true} >
                      | Status
                    </TableSortLabel>
                  </TableCell>
                  <TableCell align="left">| Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {fakeData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="left">{row.userName}</TableCell>
                    <TableCell align="left">{row.addedDate}</TableCell>
                    <TableCell align="left"><Android12Switch checked={row.status} /></TableCell>
                    <TableCell align="left">
                      <RiDeleteBin6Line style={{ fontSize: '1.5em', color: 'red', cursor: 'pointer' }}/>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Homepage />
        )}
      </Main>
    </Box>
  );
}
