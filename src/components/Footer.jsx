import React from "react";
import { Box, Typography } from "@mui/material";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

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
          minHeight: { xs: "auto", md: 200 },
          gap: { xs: 2, md: 0 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: 120, md: 200 },
            height: { xs: 120, md: 200 },
            mb: { xs: 0, md: 0 },
            flexShrink: 0,
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
            marginBottom: { xs: 0, md: "56px" },
            textAlign: { xs: "center", md: "left" },
            px: { xs: 2, md: 0 },
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold" sx={{ fontSize: { xs: 14, md: 16 } }}>
            PT. Prambanan Lestari
          </Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: 12, md: 14 } }}>
            Jl. Basuki Rahmat Raya No.4, RT.09-RW.01
          </Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: 12, md: 14 } }}>
            Kelurahan Bali Mester, Kec. Jatinegara
          </Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: 12, md: 14 } }}>
            (Dekat Terminal Kp Melayu)
          </Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: 12, md: 14 } }}>
            Jakarta Timur
          </Typography>
        </Box>

        {/* Social Media Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: 2, md: 3 },
            marginBottom: { xs: 4, md: "56px" },
            marginRight: { xs: 0, md: 4 },
            marginTop: { xs: 0, md: 0 },
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 0, fontSize: { xs: 14, md: 16 } }}>
            Follow Us
          </Typography>

          {/* Social Media Icons */}
          <Box sx={{ display: "flex", gap: { xs: 2, md: 3 }, justifyContent: "center" }}>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61580048867195"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", transition: "all 0.3s ease" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: { xs: 40, md: 50 },
                  height: { xs: 40, md: 50 },
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  fontSize: { xs: 18, md: 24 },
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#3b5998",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <FaFacebook />
              </Box>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/prambananlestari.id/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", transition: "all 0.3s ease" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: { xs: 40, md: 50 },
                  height: { xs: 40, md: 50 },
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  fontSize: { xs: 18, md: 24 },
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <FaInstagram />
              </Box>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@PrambananLestari"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", transition: "all 0.3s ease" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: { xs: 40, md: 50 },
                  height: { xs: 40, md: 50 },
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  fontSize: { xs: 18, md: 24 },
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#FF0000",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <FaYoutube />
              </Box>
            </a>
          </Box>
        </Box>
      </Box>
      {/* Copyright */}
      <Box sx={{ textAlign: "center", fontSize: 14, color: "#e0e0e0" }}>
        &copy; {new Date().getFullYear()} PT Prambanan Lestari. All rights
        reserved.
      </Box>
    </Box>
  );
}
