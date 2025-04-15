import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Paper,
  Popover,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MicIcon from "@mui/icons-material/Mic";
import MenuIcon from "@mui/icons-material/Apps";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FigmaIcon from "@mui/icons-material/Brush";
import ComposeMailModal from "../components/ComposeMailModal";
import profileImg from "../assets/profile.jpg";
import ProfilePopover from "../components/ProfilePopover";
import "./HomePage.css";

const HomePage = () => {
  const [searchAnchor, setSearchAnchor] = useState(null);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [profileAnchor, setProfileAnchor] = useState(null);
  const [isMailOpen, setIsMailOpen] = useState(false);
  const trendingSearches = ["Saba's projects", "Life", "Why hire saba"];
  const navigate = useNavigate();
  const searchOpen = Boolean(searchAnchor);
  const menuOpen = Boolean(menuAnchor);
  const profileOpen = Boolean(profileAnchor);

  const handleSearchToggle = (event) => {
    setSearchAnchor((prev) => (prev ? null : event.currentTarget));
  };
  const handleSearchClose = () => setSearchAnchor(null);

  const handleMenuClick = (event) => {
    setMenuAnchor((prev) => (prev ? null : event.currentTarget));
  };
  const handleMenuClose = () => setMenuAnchor(null);

  const handleProfileClick = (event) => {
    setProfileAnchor((prev) => (prev ? null : event.currentTarget));
  };
  const handleProfileClose = () => setProfileAnchor(null);

  return (
    <Box sx={{ backgroundColor: "#221d35", minHeight: "100vh", color: "white" }} className="font-ropaSans">
      <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="body1"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/about")}
          >
            About
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <Typography
              variant="body1"
              sx={{ cursor: "pointer" }}
              onClick={() => setIsMailOpen(true)}
            >
              Gmail
            </Typography>
            <IconButton color="inherit" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
            <IconButton onClick={handleProfileClick}>
              <Avatar alt="profile" src={profileImg} sx={{ width: 32, height: 32 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <ComposeMailModal open={isMailOpen} handleClose={() => setIsMailOpen(false)} />

      {/* Menu Popover */}
      <Popover
        open={menuOpen}
        anchorEl={menuAnchor}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 2,
            backgroundColor: "#2d2645",
            borderRadius: 4,
            boxShadow: 10,
            width: { xs: 280, sm: 360 },
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#221d35",
            borderRadius: 3,
            p: 2,
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" },
            gap: 2,
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          {[
            {
              href: "https://github.com/saba-git",
              icon: <GitHubIcon fontSize="large" />,
              label: "Code:3",
              color: "white",
            },
            {
              href: "https://linkedin.com/in/saba",
              icon: <LinkedInIcon fontSize="large" />,
              label: "Connect",
              color: "#0e76a8",
            },
            {
              href: "https://instagram.com/saba",
              icon: <InstagramIcon fontSize="large" />,
              label: "Stalk",
              color: "#E1306C",
            },
            {
              href: "https://www.figma.com/@saba",
              icon: <FigmaIcon fontSize="large" />,
              label: "Designs",
              color: "#F24E1E",
            },
          ].map((item, idx) => (
            <Box
              key={idx}
              component="a"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: "none",
                textAlign: "center",
                color: item.color,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <IconButton
                sx={{
                  color: item.color,
                  backgroundColor: "#2d2645",
                  "&:hover": {
                    backgroundColor: "#1c133b",
                  },
                }}
              >
                {item.icon}
              </IconButton>
              <Typography variant="body2" sx={{ color: "white", mt: 0.5 }}>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Popover>

      {/* Custom Profile Popover */}
      <ProfilePopover
        anchorEl={profileAnchor}
        handleClose={handleProfileClose}
        open={profileOpen}
      />

      {/* Main Section */}
      <Box display="flex" flexDirection="column" alignItems="center" mt={15}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            mb: 4,
            textAlign: "center",
            fontFamily: "'Roboto', sans-serif",
            fontSize: { xs: "2.5rem", sm: "4rem" },
          }}
        >
          [Sab]oogle
        </Typography>

        {/* Search Bar */}
        <Paper
          onClick={handleSearchToggle}
          sx={{
            display: "flex",
            alignItems: "center",
            width: { xs: "90%", sm: 850 },
            p: 1,
            backgroundColor: "#2d2645",
            borderRadius: 10,
            color: "white",
            cursor: "pointer",
          }}
        >
          <IconButton sx={{ color: "white" }}>
            {searchOpen ? <ArrowBackIcon /> : <SearchIcon />}
          </IconButton>
          <Typography sx={{ ml: 1, flex: 1, color: "white", opacity: 0.7 }}>
            Search [Sab]oogle
          </Typography>
          <IconButton sx={{ color: "white" }}>
            <MicIcon />
          </IconButton>
        </Paper>

        {/* Search Popover */}
        <Popover
          open={searchOpen}
          anchorEl={searchAnchor}
          onClose={handleSearchClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          PaperProps={{
            sx: {
              mt: 2,
              width: { xs: "90%", sm: 850 },
              backgroundColor: "#2d2645",
              borderRadius: 4,
              p: 1,
              color: "white",
            },
          }}
        >
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
            Trending searches
          </Typography>
          <List>
            {trendingSearches.map((item, idx) => (
              <ListItem
                key={idx}
                button
                onClick={() => {
                  handleSearchClose();
                  if (item === "Saba's projects") navigate("/project");
                  else if (item === "Life") navigate("/life");
                  else if (item === "Why hire saba") navigate("/why-hire-saba");
                }}
              >
                <SearchIcon sx={{ mr: 1 }} />
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Popover>
      </Box>
    </Box>
  );
};

export default HomePage;
