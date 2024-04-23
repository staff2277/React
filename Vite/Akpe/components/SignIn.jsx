import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const SignIn = () => {
  return (
    <Box sx={{}}>
      <Box sx={{ textAlign: "center", pb: 2, pt: 1 }}>
        <Typography
          variant="p"
          sx={{
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Basic Details
        </Typography>
      </Box>
      <Typography sx={{ fontSize: 13 }}>Let's get to know you first</Typography>
      <form action="">
        <Box>
          <Typography sx={{ color: "GrayText", fontSize: "0.87rem", mt: 3, mb: 1}}>
            First Name
          </Typography>
          <TextField
            label="Example: John"
            variant="outlined"
            required
            id="FirstName"
            sx={{ width: "100%" }}
          />
          <Typography sx={{ fontSize: 10, mt: 1, mb: 5, color: "GrayText" }}>
            As it appears on your Government-issued ID
          </Typography>
        </Box>

        <Box>
          <Typography sx={{ color: "GrayText", fontSize: "0.87rem", mb: 1}}>
            Second Name
          </Typography>
          <TextField
            label="Example: Smith"
            variant="outlined"
            required
            id="SecondName"
            sx={{ width: "100%" }}
          />
          <Typography sx={{ fontSize: 10, mt: 1, mb: 5, color: "GrayText" }}>
            As it appears on your Government-issued ID
          </Typography>
        </Box>

        <Box>
          <Typography sx={{ color: "GrayText", fontSize: "0.87rem", mb: 1 }}>
            Email Adress
          </Typography>
          <TextField
            variant="outlined"
            label="Example: johnsmith@gmail.com"
            required
            id="name"
            sx={{ width: "100%", mb: 5}}
          />
        </Box>
      </form>
    </Box>
  );
};

export default SignIn;
