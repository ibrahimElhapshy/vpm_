import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { Stack, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import { styled, alpha, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { useEffect } from "react";
import cookies from "js-cookie";
import "../../i18next";


//start i18next language

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: [
        "localStorage",
        "cookie",
        "htmlTag",
        "localStorage",
        "navigator",
        "path",
        "subdomain",
        
      ],
      caches: ["localStorage","cookie",],
    },
    backend: {
      loadPath: "/locale/{{lng}}/translation.json",
    },
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
//end i18next language

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",

  // @ts-ignore
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {

    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    
  }),

}));






// eslint-disable-next-line react/prop-types
const TopBar = ({ open, handleDrawerOpen, setMode , setRtl,}) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const rtl = false;
  const lng = cookies.get("i18next") || "ar"

  useEffect(() => {
  window.document.dir = i18n.dir()
  localStorage.getItem('i18nextLng')==="ar"?directionRtl():directionLtr()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lng, i18n]);

  const directionRtl=() => {
    i18n.changeLanguage("ar")
    setRtl(!rtl);

  }
  const directionLtr=() => {
    i18n.changeLanguage("en")
    setRtl(rtl);
  }
  


  return (
    <AppBar
      position="fixed"
      // @ts-ignore
      open={open}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>

    

        <Box flexGrow={1} />

    

        <Stack direction={"row"}>
          <IconButton aria-label="delete" color="inherit" size="small"
          sx={{display: localStorage.getItem('i18nextLng')==="en"? "flex": "none"}}

          onClick={directionRtl}
          >
            {t("AR")}
          </IconButton>
          <IconButton aria-label="delete" color="inherit" size="small"
          sx={{display: localStorage.getItem('i18nextLng')==="ar"? "flex": "none"}}
            onClick={directionLtr}>
            {t("EN")}
          </IconButton>

          {theme.palette.mode === "dark" ? (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "currentMode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                setMode((prevMode) =>
                  prevMode === "light" ? "dark" : "light"
                );
              }}
              aria-label="delete"
              color="inherit"
            >
              <LightModeOutlinedIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "currentMode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                setMode((prevMode) =>
                  prevMode === "light" ? "dark" : "light"
                );
              }}
              aria-label="delete"
              color="inherit"
            >
              <DarkModeOutlinedIcon />
            </IconButton>
          )}

          <IconButton aria-label="delete" color="inherit">
            <NotificationsNoneOutlinedIcon />
          </IconButton>
          <IconButton aria-label="delete" color="inherit">
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton aria-label="delete" color="inherit">
            <Person2OutlinedIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
