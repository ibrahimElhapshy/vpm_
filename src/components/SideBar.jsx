import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { useTheme, styled, Avatar, Tooltip } from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutLinedIcon from "@mui/icons-material/ReceiptOutLined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import TimeLineOutlinedIcon from "@mui/icons-material/TimeLineOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
// import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";

import MuiDrawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { grey } from "@mui/material/colors";
import cookies from "js-cookie";
import { useEffect } from "react";
// import "../../i18next";

const userName = localStorage.getItem('name')

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("xs")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(
  // @ts-ignore
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),


  // necessary for content to be below app bar
  
  ...theme.mixins.toolbar,
}));

const Arr1 = [
  {
    text: "Dashboard",
    icon: <HomeOutlinedIcon />,
    path: "/",
  },
  {
    text: "Manage Team",
    icon: <PeopleOutlinedIcon />,
    path: "/team",
  },
  {
    text: "Contacts Information",
    icon: <ContactsOutlinedIcon />,
    path: "/contacts",
  },
  {
    text: "Invoices Balances",
    icon: <ReceiptOutLinedIcon />,
    path: "/invoices",
  },
];

// const Arr2 = [
//   {
//     text: "Profile Form",
//     icon: <PersonOutlinedIcon />,
//     path: "/form",
//   },
//   {
//     text: "Calendar",
//     icon: <CalendarTodayOutlinedIcon />,
//     path: "/calendar",
//   },
//   {
//     text: "FAQ Page",
//     icon: <HelpOutlineOutlinedIcon />,
//     path: "/faq",
//   },
// ];

// const Arr3 = [
//   {
//     text: "Bar Chart",
//     icon: <BarChartOutlinedIcon />,
//     path: "/bar",
//   },
//   {
//     text: "Pie Chart",
//     icon: <PieChartOutlinedIcon />,
//     path: "/pie",
//   },
//   {
//     text: "Line Chart",
//     icon: <TimeLineOutlinedIcon />,
//     path: "/line",
//   },
//   {
//     text: "Geography Chart",
//     icon: <MapOutlinedIcon />,
//     path: "/geography",
//   },
// ];



// eslint-disable-next-line react/prop-types
const SideBar = ({ open, handleDrawerClose }) => {
  let location = useLocation();

  const theme = useTheme();
  const navigate = useNavigate();


  const lng = cookies.get("i18next")
  
useEffect(() => {
  
}, [lng, ]);



  return (
    <Drawer variant="permanent" open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {lng === "ar" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Avatar
        sx={{
          transition: "0.25s",
          mx: "auto",
          width: open ? 88 : 43,
          height: open ? 88 : 43,
          my: 1,
          border: "2px solid gray",
        }}
        alt="profile"
        src="../../src/images/profile.jpg"
      />
      <Typography
        align="center"
        sx={{
          fontSize: open ? 17 : 0,
          transition: "0.25s",
        }}
      >
        {userName}
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: open ? 14 : 0,
          transition: "0.25s",
          color: theme.palette.info.main,
        }}
      >
        admin
      </Typography>

      <Divider />

      <List>
        {Arr1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : item.text} placement={localStorage.getItem('i18nextLng')==="ar"?"right":"left"}>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.mode === "dark"
                        ? grey[700]
                        : grey[300]
                      : null,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />

      {/* <List>
        {Arr2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : item.text} placement= {localStorage.getItem('i18nextLng')==="ar"?"right":"left"}>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor: location.pathname === item.path ? "gray" : null,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {Arr3.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : item.text} placement={localStorage.getItem('i18nextLng')==="ar"?"right":"left"}>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor: location.pathname === item.path ? "gray" : null,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List> */}
    </Drawer>
  );
};

export default SideBar;
