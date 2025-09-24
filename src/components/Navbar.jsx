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
            onClick={() => { navigate("/"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            Beranda
          </Button>
          <Button
            color="inherit"
            sx={{ "&:hover": { color: "#fff", backgroundColor: "#f97316" } }}
            onClick={() => { navigate("/tentang-kami"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            Tentang Kami
          </Button>
          <Button
            color="inherit"
            sx={{ "&:hover": { color: "#fff", backgroundColor: "#f97316" } }}
            onClick={() => { navigate("/properti"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            Properti
          </Button>
          <Button
            color="inherit"
            sx={{ "&:hover": { color: "#fff", backgroundColor: "#f97316" } }}
            onClick={() => { navigate("/pembayaran"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            Pembayaran
          </Button>
          <Button
            color="inherit"
            sx={{ "&:hover": { color: "#fff", backgroundColor: "#f97316" } }}
            onClick={() => { navigate("/galeri"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            Galleri
          </Button>
          <Button
            color="inherit"
            sx={{ "&:hover": { color: "#fff", backgroundColor: "#f97316" } }}
            onClick={() => { navigate("/kontak"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            Kontak
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
