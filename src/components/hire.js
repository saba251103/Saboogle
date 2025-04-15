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
import WhyHireSabaBlock from '../components/whyhire';

const Hire = () => {
  const [searchAnchor, setSearchAnchor] = useState(null);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [profileAnchor, setProfileAnchor] = useState(null);
  const [isMailOpen, setIsMailOpen] = useState(false);
  const handleSearchClose = () => setSearchAnchor(null);
  const navigate = useNavigate();

  const trendingSearches = ["Saba's projects", "Life", "Why hire saba"];
  const searchOpen = Boolean(searchAnchor);
  const menuOpen = Boolean(menuAnchor);
  const profileOpen = Boolean(profileAnchor);

  return (
    
    <Box sx={{ backgroundColor: "#2d2645", minHeight: "100vh", color: "white" }} className="font-ropaSans">
 <AppBar position="static" sx={{ boxShadow: "none", backgroundColor:"#221d35",px: { xs: 1, sm: 3 } }}>
    <br/>
  <Toolbar sx={{ flexWrap: "wrap", gap: 1, justifyContent: "space-between", minHeight: 100 }}>
    {/* Left section: Logo + Search */}
    <Box sx={{ display: "flex", alignItems: "center", flex: 1, minWidth: 0, gap: 2 }}>
      <Typography
        variant="h6"
        sx={{
          cursor: "pointer",
          fontFamily: "'Roboto', sans-serif",
          fontWeight: "bold",
          whiteSpace: "nowrap",
        }}
        onClick={() => navigate("/")}
      >
        [Sab]oogle
      </Typography>

      <Paper
        onClick={(e) => setSearchAnchor(searchAnchor ? null : e.currentTarget)}
        sx={{
          display: "flex",
          alignItems: "center",
          flexGrow: 1,
          backgroundColor: "#2d2645",
          borderRadius: 10,
          color: "white",
          px: 2,
          py: 0.5,
          cursor: "pointer",
          minWidth: { xs: "50%", sm: "500px" },
          maxWidth: { sm: "900px" },
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
    </Box>

    {/* Right section: Gmail, Menu, Profile */}
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Typography variant="body1" sx={{ cursor: "pointer" }} onClick={() => setIsMailOpen(true)}>
        Gmail
      </Typography>
      <IconButton color="inherit" onClick={(e) => setMenuAnchor(e.currentTarget)}>
        <MenuIcon />
      </IconButton>
      <IconButton onClick={(e) => setProfileAnchor(e.currentTarget)}>
        <Avatar alt="profile" src={profileImg} sx={{ width: 32, height: 32 }} />
      </IconButton>
    </Box>
  </Toolbar>
  <br/>
</AppBar>


      {/* Compose Modal */}
      <ComposeMailModal open={isMailOpen} handleClose={() => setIsMailOpen(false)} />

      {/* Trending Search Popover */}
      <Popover
        open={searchOpen}
        anchorEl={searchAnchor}
        onClose={() => setSearchAnchor(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        PaperProps={{
          sx: {
            mt: 2,
            width: { xs: "90%", sm: 900 },
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
                }}
              >
                <SearchIcon sx={{ mr: 1 }} />
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
      </Popover>

      {/* Menu Popover */}
      <Popover
        open={menuOpen}
        anchorEl={menuAnchor}
        onClose={() => setMenuAnchor(null)}
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

      {/* Profile Popover */}
      <ProfilePopover
        anchorEl={profileAnchor}
        handleClose={() => setProfileAnchor(null)}
        open={profileOpen}
      />
<WhyHireSabaBlock/>
</Box>
  );
  };
export default Hire;