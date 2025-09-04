import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={2}
      sx={{ px: 4, py: 1, bgcolor: "white" }}
    >
      <Toolbar className="flex justify-between">
        <img
          src="/logo-prambanan-lestari-new.png"
          alt="Logo"
          style={{ height: 50 }}
        />
        <Box>
          <Button
            color="inherit"
            sx={{ "&:hover": { color: "#fff", backgroundColor: "#f97316" } }}
            onClick={() => navigate("/")}
          >
            Beranda
          </Button>
          <Button
            color="inherit"
            sx={{ "&:hover": { color: "#fff", backgroundColor: "#f97316" } }}
            onClick={() => navigate("/tentang-kami")}
          >
            Tentang Kami
          </Button>
          <Button
            color="inherit"
            sx={{ "&:hover": { color: "#fff", backgroundColor: "#f97316" } }}
            onClick={() => navigate("/properti")}
          >
            Properti
          </Button>
          <Button
            color="inherit"
            sx={{ "&:hover": { color: "#fff", backgroundColor: "#f97316" } }}
            onClick={() => navigate("/galeri")}
          >
            Galleri
          </Button>
          <Button
            color="inherit"
            sx={{ "&:hover": { color: "#fff", backgroundColor: "#f97316" } }}
          >
            Kontak
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
