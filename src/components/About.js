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

const AboutPage = () => {
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
                  else if (item === "Why hire saba") navigate("/hire");
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

      {/* Main About Content */}
      <Box sx={{ px: { xs: 2, sm: 10 }, mt: 8 }}>
  <Typography variant="h3" sx={{ fontWeight: "bold", mb: 4 ,textAlign:'center',color:'#aaa'}}>
    Saba Tanji
  </Typography>

  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      gap: 4,
      alignItems: "flex-start",
      justifyContent: "center",
    }}
  >
    {/* Profile Image */}
    <Box sx={{ minWidth: 380, maxWidth: 400, mx: "auto" }}>
    <Avatar alt="profile" src={profileImg} sx={{ width: 350, height: 350 }} />
            
    </Box>

    {/* About Text */}
    <Typography
      variant="body1"
      sx={{
        lineHeight: 1.5,
        textAlign: "justify",
        flex: 1,
      }}
    >
      Hi! I'm Saba Tanji, a Computer Science undergrad specializing in Data Science at Sardar Patel Institute of Technology, with a current CGPA of 8.7. I'm a passionate and curious tech enthusiast driven by the challenge of solving real-world problems through intelligent, user-centric solutions.
      <br /><br />
      With a strong foundation in languages like Java, Python, C/C++, and tools like Firebase, React.js, and MySQL, I love crafting applications that make a difference—from intuitive UIs to powerful backend logic. My projects reflect my curiosity and drive—whether it's building a gamified Autism Detection tool, empowering street vendors through the Far-e-wala platform, or working on AI-powered beauty recommendations through the Korean Skin Color Analysis Test.
      <br /><br />
      Currently, I’m diving into cutting-edge challenges at JPMorgan Chase & Co., where I’m exploring industry-grade software development and deepening my understanding of scalable systems and collaborative product development.
      <br /><br />
      When I’m not coding or collaborating on impactful projects, I’m exploring new design trends, brainstorming solutions to everyday problems, or contributing to open-source on GitHub <strong>@saba251103</strong>.
      <br /><br />
      Let’s connect and create something meaningful together!
    </Typography>
  </Box>
</Box>

    </Box>
  );
};

export default AboutPage;
