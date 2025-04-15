import React from "react";
import { Box, Typography, Paper,Avatar } from "@mui/material";
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';
import img11 from '../assets/img11.png';
import CodeIcon from '@mui/icons-material/Code';

const ProjectResults = () => {
  const projects = [
    {
      date: "May 2024",
      title: "FAR-E-WALA",
      subtitle: "Girl Discovers Code to Uplift Local Heroes",
      description: "Built a digital bridge between street vendors and hungry locals. With live tracking, real-time menus, and vendor discovery, this platform champions the Vocal for Local mission. Firebase authentication + Mapbox + pure heart.",
      image: img1
    },
    {
      date: "April 2024",
      title: "Autism Detection for Teenagers",
      subtitle: "Games That Heal: Turning Play Into Diagnosis",
      description: "What if games could detect autism traits in adolescents? I built a fun, interactive assessment platform using gamified behavior tracking to help doctors spot early signs — fast, affordable, and kid-friendly.",
      image: img2
    },
    {
      date: "December 2024",
      title: "Suraksha Sathi",
      subtitle: "Built a Digital Bodyguard for Women",
      description: "Hackathon-born, purpose-driven. This app packs real-time safety features like anomaly detection, proximity alerts, and wearable tech integration to keep women safe and aware, wherever they go." ,
      image: img3
    },
    {
      date: "November 2024",
      title: "Color Analysis Korean Skin Test",
      subtitle: "Taught AI to Know Your Best Colors",
      description: "Trained a model to analyze skin, eye, and hair tones to give real-time beauty recommendations — from makeup shades to jewelry styles. Built with love (and lots of image processing).",
      image: img4
    },
    {
      date: "December 2024",
      title: "Pothole Detection System",
      subtitle: "Making Roads Smarter, One Pothole at a Time",
      description: "Used classic image processing+ ML models (like Random Forest and SVM) to detect potholes before they become problems. Think of it as AI for urban health.",      
      image: img10
    },
    {
      date: "August 2023",
      title: "AI Portfolio Builder",
      subtitle: "From Resume to Reality: Code Your Career Instantly",
      description: "Upload your resume — get a fully hosted portfolio website with your personalized codebase. No coding needed, just instant professional presence with the option to download and customize.",     
      image: img5
    },
    {
      date: "May 2023",
      title: "Pass in the Parcel ",
      subtitle: "No More Sitting Out: Everyone Plays the Game Now",
      description: "One person always left out to operate the game? Not anymore. This automated “pass the parcel” setup lets everyone play — fair and fun, with no one sitting out.",      
      image: img6
    },
    {
      date: "Febraury 2025",
      title: "Pomodoro Planner",
      subtitle: "Study Smarter, Not Just Harder",
      description: "Blending Pomodoro with a Notion-style calendar, this tool helps students manage study sessions, events, and tasks — boosting focus without the burnout.",      
      image: img11
    },
    {
      date: "December 2024",
      title: "Disaster Management Platform",
      subtitle: "When Seconds Count, Knowledge Saves",
      description: "Track where disasters occur in real-time, know what kind they are, and get location-based safety tips. A smart dashboard built to inform and protect.",      image: img8
    },
    {
      date: "February 2025",
      title: "AI Blog",
      subtitle: "Not your average blog – this one thinks!",
      description: "Dive into a blog experience like no other! Our AI-powered blog isn't just about text – it can generate full posts from prompts, complete with images and videos. Prefer reading in your own language? Enjoy instant translations in multiple regional languages. Plus, every piece is double-checked for originality with a built-in plagiarism checker. Sources and links included, because citations matter – even to robots 🤖✨.",
      image: img7
      
    },
    {
      date: "January 2025",
      title: "ChikitsAI",
      subtitle: "The Doctor is Digital Now – and Speaks Your Language",
      description: "A multilingual health chatbot that listens to symptoms, scans prescriptions, sets Google Calendar med reminders, and even identifies wounds via images — complete with a friendly avatar.",
      image: img9

    },
  ];

  return (
    <Box sx={{ backgroundColor: "#2d2645", px: { xs: 2, md: 6 }, py: 4 }}>
      {projects.map((project, index) => (
        <Paper
          key={index+1}
          elevation={0}
          sx={{
            backgroundColor: "transparent",
            color: "white",
            mb: 6,
            pb: 4,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
            }}
          >
            {/* 70% Text */}
            <Box sx={{ flex: { xs: "1 1 100%", md: "0 0 70%" } }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Avatar
  sx={{
    width: 36,
    height: 36,
    borderRadius: "50%",
    backgroundColor: "#ffffff",
    mr: 2,
    color: "#0a0a23", // Icon color for contrast
  }}
>
  <CodeIcon fontSize="small" />
</Avatar>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, textTransform: "uppercase" }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#adb5bd" }}>
                    {project.date}
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="h5"
                sx={{
                  color: "#a5b4fc",
                  fontWeight: 500,
                  mb: 1.5,
                  lineHeight: 1.3,
                }}
              >
                {project.subtitle}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#e2e8f0", fontSize: "1rem", lineHeight: 1.6 }}
              >
                {project.description}
              </Typography>
            </Box>

            {/* 30% Image */}
            <Box
              sx={{
                flex: { xs: "1 1 100%", md: "0 0 30%" },
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                aspectRatio: "16 / 9",
              }}
            >
              <Box
                component="img"
                src={project.image}
                alt={project.title}
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default ProjectResults;