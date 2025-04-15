import React, { useState } from "react";
import {
  Popover,
  Typography,
  Avatar,
  IconButton,
  Box,
  Tooltip,
  Snackbar,
  Zoom,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import profileImg from "../assets/profile.jpg";
const ProfilePopover = ({ anchorEl, handleClose, open }) => {
  const email = "sabatanji23@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      PaperProps={{
        sx: {
          backgroundColor: "#2d2645",
          borderRadius: 4,
          boxShadow: 10,
          p: 2,
          width: { xs: 280, sm: 360 },
        },
      }}
      TransitionComponent={Zoom}
    >
      {/* Top Right Close */}
      <IconButton
        onClick={handleClose}
        sx={{ position: "absolute", top: 10, right: 10, color: "#aaa" }}
      >
        <CloseIcon />
      </IconButton>

      {/* Email and Copy */}
      <Box display="flex" alignItems="center" justifyContent="center" gap={1} mb={2}>
        <Typography sx={{ color: "#ccc", fontWeight: 500 }}>{email}</Typography>
        <Tooltip title="Copy email">
          <IconButton onClick={handleCopy} sx={{ color: "#ccc", p: 0.5 }}>
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Avatar */}
      <Box display="flex" justifyContent="center" mb={1}>
        <Avatar
          src={profileImg}
          alt="Saba"
          sx={{
            width: 80,
            height: 80,
            border: "3px solid #a782d9",
          }}
        />
      </Box>

      {/* Name and Greeting */}
      <Typography variant="h6" textAlign="center" color="white" fontWeight={600}>
        Hi, I'm Saba
      </Typography>
      <Typography
        variant="body2"
        textAlign="center"
        sx={{ color: "#b8b8d1", mb: 2 }}
      >
        Welcome to my personal site. 💜
      </Typography>

      {/* Info Section */}
      <Box
        sx={{
          backgroundColor: "#221d35",
          borderRadius: 3,
          p: 2,
          color: "#ccc",
        }}
      >
        <Typography
          variant="body2"
          fontWeight={700}
          sx={{ mb: 1, color: "white" }}
        >
          HOW TO USE
        </Typography>

        <Typography variant="body2" sx={{ mb: 0.5 }}>
          Explore my projects and journey using <i>Search</i>
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          Send me a message using <i>Gmail</i>
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          View more of my work using the <i>Dot-Menu</i>
        </Typography>
        <Typography variant="body2">
          Book a call using{" "}
          <CalendarMonthIcon
            sx={{ verticalAlign: "middle", fontSize: 18, color: "#a782d9" }}
          />
        </Typography>
      </Box>

      {/* Copied Snackbar */}
      <Snackbar
        open={copied}
        message="Email copied!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        ContentProps={{
          sx: {
            backgroundColor: "#a782d9",
            color: "#1b1a2e",
            fontWeight: "bold",
          },
        }}
      />
    </Popover>
  );
};

export default ProfilePopover;
