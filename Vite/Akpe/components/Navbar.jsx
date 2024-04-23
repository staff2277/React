import { AppBar, Box, CssBaseline } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <>
      <CssBaseline />
      <AppBar elevation={0} sx={{ bgcolor: "transparent", position: "relative", border: "none" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p:3,
          }}
        >
          <img src="/akpe-logo.svg" alt="" width={82} />
        </Box>
      </AppBar>
    </>
  );
};

export default Navbar;
