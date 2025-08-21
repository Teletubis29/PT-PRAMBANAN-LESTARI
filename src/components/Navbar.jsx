import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={2} 
      sx={{ px: 4, py: 1, bgcolor: "white" }}
    >
      <Toolbar className="flex justify-between">
        <Typography variant="h6" className="!font-bold text-gray-500">
          PT PRAMBANAN LESTARI
        </Typography>
        <Box>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Sale</Button>
          <Button color="inherit">Gallery</Button>
          <Button color="inherit">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
