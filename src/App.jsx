import * as React from "react";

import { ThemeProvider, styled, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";

import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { getDesignTokens } from "./theme";
import { Outlet } from "react-router-dom";
import "./index.css";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import "../i18next";
import { useEffect } from "react";
import i18n from "i18next";


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// const Normal = styled("div")`
//   text-align: left;
// `;

// const Noflip = styled("div")`
//   /* @noflip */
//   text-align: left;
// `;

const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const ltrCache = createCache({
  key: "mui",
});

export default function App() {
  const [open, setOpen] = React.useState(false);
  const [rtl, setRtl] = React.useState(false);



  useEffect(() => {

    const directionRtl=() => {
      i18n.changeLanguage("ar")
      setRtl(!rtl);
  
    }
    const directionLtr=() => {
      i18n.changeLanguage("en")
      setRtl(rtl);
    }
    window.document.dir=theme.direction = i18n.dir()
    localStorage.getItem('i18nextLng')==="ar"?directionRtl():directionLtr()
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ i18n,]);
  
    
    
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [mode, setMode] = React.useState(
    localStorage.getItem("currentMode")
      ? localStorage.getItem("currentMode")
      : "light"
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode),{ direction: 'rtl'},), [mode]);

  return (
    <CacheProvider value={rtl ? rtlCache : ltrCache}>
    <ThemeProvider theme={theme}>
    <>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
      
          <TopBar
              open={open}
              handleDrawerOpen={handleDrawerOpen}
              setMode={setMode} setRtl={setRtl}        />
      
          <SideBar open={open} handleDrawerClose={handleDrawerClose} />
      
      
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <DrawerHeader />
              <Outlet />
            </Box>
      
        </Box>
    </>
    </ThemeProvider>
</CacheProvider>
  );
}
