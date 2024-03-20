export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          topBar: { bg: "#fff", icon: "#404e67" },
          sideBar: { background : "#404e67" },
          textRootActive: { color : "#1576bd"  },
          addButton: { color : "#0bcd89" },
        }
      : {
          // palette values for dark mode
          topBar: { bg:"#404e67"  , icon:"#fff" },
          sideBar: { background : "#404e69" },
          textRootActive: { color : "#1576bd" },
          addButton: { color : "#0bcd89" },

        }),
  },
});
