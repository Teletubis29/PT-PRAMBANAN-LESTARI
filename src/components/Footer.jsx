import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#9e9e9e",
        color: "white",
        py: 4,
        px: { xs: 2, sm: 4, md: 8 },
        mt: 8,
        width: "100vw", // benar-benar full width
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        boxSizing: "border-box",
      }}
    >
      <Grid container spacing={2} alignItems="center">
        {/* Logo */}
        <Grid item>
          <Box
            sx={{ 
              width: 80,
              height: 80,
              bgcolor: "white",
              color: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            LOGO
          </Box>
        </Grid>

        {/* Company Info */}
        <Grid item xs>
          <Typography variant="subtitle1" fontWeight="bold">
            PT. Prambanan Lestari
          </Typography>
          <Typography variant="body2">
            Jl. Basuki Rahmat Raya No.4, RT.09-RW.01
          </Typography>
          <Typography variant="body2">
            Kelurahan Bali Mester, Kec. Jatinegara
          </Typography>
          <Typography variant="body2">(Dekat Terminal Kp Melayu)</Typography>
          <Typography variant="body2">Jakarta Timur</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
