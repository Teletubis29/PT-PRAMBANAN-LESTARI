import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#9e9e9e",
        color: "white",
        py: 2,
        px: { xs: 2, sm: 4, md: 8 },
        pt: 7,
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          minHeight: 200,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 200,
            height: 200,
            mb: { xs: 2, md: 0 },
          }}
        >
          <img
            src="/footer_logo.png"
            alt="Logo Prambanan Lestari"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            marginBottom: "56px"
          }}
        >
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
        </Box>
      </Box>
      {/* Copyright */}
      <Box sx={{ textAlign: "center", fontSize: 14, color: "#e0e0e0" }}>
        &copy; {new Date().getFullYear()} PT Prambanan Lestari. All rights reserved.
      </Box>
    </Box>
  );
}
