import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import img1 from '../assets/i1.png';
import img2 from '../assets/i2.png';
import img3 from '../assets/i3.png';
import img4 from '../assets/i4.png';
import img5 from '../assets/i5.png';
import img6 from '../assets/i6.png';


const BlogResults = () => {
  const projects = [
    {
      
      subtitle: "Girl Meets Tech at the Right Time",
      description: "It started with a spark — a curious scroll through YouTube tutorials and open-source projects. What began as a side hobby slowly turned into passion. Late nights, trial-and-error, and the thrill of getting that “one bug” fixed… that’s where I fell in love with tech.",
      image: img1
    },
    {

      subtitle: "Hackathon Nights, Real-World Fights",
      description: "From the chaos of hackathons came some of my most meaningful ideas — like building a women’s safety app at Mumbai Hacks. No sleep, just code, teamwork, and the urgent need to make something that could actually help someone.",
      image: img2
    },
    {
      
      subtitle: "From College Projects to Corporate Impact",
      description: "Joining JPMorgan Chase & Co. gave me more than experience — it gave me structure. I learned what technologies are used in the company and how technology impacts us. Also doubt solving with the experts gave me new insights." ,
      image: img3
    },
    {
      
      subtitle: "Building for Bharat, Not Just Big Tech",
      description: "I love solving grassroots problems — like giving local vendors a digital face, or creating mental health tools that speak our languages. Tech should be inclusive, and my goal is to keep it that way — simple, accessible, and human.",
      image: img4
    },
    {
      
      subtitle: "Experimenter at Heart",
      description: "Not every project becomes a startup, but each one teaches something. I’ve built AI-powered apps, quirky games, productivity planners, and more. Some worked great, some flopped — but I learn by doing, always.",      
      image: img5
    },
    {
      
      subtitle: "Always Iterating, Always Evolving",
      description: "Whether it's redesigning a UI at midnight or switching tech stacks for performance, I'm obsessed with making things better. Every repo on my GitHub tells a story of growth, grit, and constant iteration.",     
      image: img6
    },
    
  ];

  return (
    <Box sx={{ backgroundColor: "#2d2645", px: { xs: 2, md: 6 }, py: 4 }}>
      {projects.map((project, index) => (
        <Paper
          key={index}
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
            
<br/><br/>
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

export default BlogResults;