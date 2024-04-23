import { Box, Button } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import React from "react";

const NavBottom = () => {
  return (
    <Box>
      <Button variant="contained" sx={{ width: "100%", py: "1rem", mb: 2 }}>
        Next
      </Button>
      <Button
        variant="text"
        sx={{ width: "100%", py: "1rem", mb: 10, color: "black" }}
        startIcon={<WestIcon />}
      >
        Back
      </Button>
    </Box>
  );
};

export default NavBottom;
