import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Collapse,
  Divider,
  useMediaQuery,
  useTheme
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function WhyHireSabaBlock() {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => setExpanded(!expanded);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        bgcolor: '#2d2645',
        p: isMobile ? 4 : 10,
        borderRadius: 2,
        mb: 4,
        color: 'white',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          display: 'flex',
          alignItems: 'center',
          color: '#a687cb',
          fontSize: isMobile ? '1.1rem' : '1.3rem',
        }}
      >
        <Box component="span" sx={{ mr: 2 }}>✦</Box>
        AI Overview 
      </Typography>

      <Typography fontSize={isMobile ? '0.9rem' : '1rem'} sx={{ mb: 2 }}>
        You searched for <strong>“why hire Saba?”</strong> — and that’s the kind of curiosity I appreciate.
        I’m not just a developer — I’m an{' '}
        <Box component="span" sx={{ bgcolor: '#6f5fa5', px: 1, borderRadius: 1 }}>
          engineer, researcher, designer, and problem-solver
        </Box>{' '}
        rolled into one. From building AI systems for {' '}
        <Box component="span" sx={{ bgcolor: '#6f5fa5', px: 1, borderRadius: 1 }}>
        autism detection 
        </Box>{' '}
        to launching community-first platforms like 
        <Box component="span" sx={{ bgcolor: '#6f5fa5', px: 1, borderRadius: 1 }}>
        Far-e-wala,
        </Box>{' '}
        I thrive at the intersection of <strong>tech for good</strong> and <strong>meaningful design</strong>.
      </Typography>

      

      <Collapse in={expanded} collapsedSize={0}>
      <Typography fontSize={isMobile ? '0.9rem' : '1rem'} sx={{ mb: 2 }}>
        My recent projects include:
        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
          <li>
            <Box component="span" sx={{ bgcolor: '#6f5fa5', px: 1, borderRadius: 1 }}>
              AI color analysis platform
            </Box>{' '}
            inspired by Korean tone-matching trends
          </li>
          <li>
          <Box component="span" sx={{ bgcolor: '#6f5fa5', px: 1, borderRadius: 1 }}>
            A women’s safety application
            </Box>
            {' '}with {' '}
            <Box component="span" sx={{ textDecoration: 'underline', color: '#c9b3f5' }}>
              live anomaly detection and many more features.
            </Box>
          </li>
          <li>
            Image segmentation tools to{' '}
            <Box component="span" sx={{ bgcolor: '#6f5fa5', px: 1, borderRadius: 1 }}>
              detect road potholes and calculate distances
            </Box>{' '}
            
          </li>
        </ul>
      </Typography>
        <Typography fontSize={isMobile ? '0.9rem' : '1rem'} sx={{ mb: 2 }}>
          Here’s what sets me apart:
          <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
            <li><strong>Adaptability</strong> — I dive into new stacks and domains like it's second nature.</li>
            <li><strong>Communication</strong> — From user research to backend logic, I connect the dots clearly.</li>
            <li>
              <Box component="span" sx={{ bgcolor: '#6f5fa5', px: 1, borderRadius: 1 }}>
                Human-centered thinking
              </Box>{' '}
              — I build tech with empathy and accessibility.
            </li>
            <li><strong>Creative problem-solving</strong> — From fuzzy logic to CNNs, I build elegant solutions.</li>
          </ul>
          <br />
          I’ve maintained an <strong>8.7 CGPA</strong> at SPIT while balancing research, freelance work, and impact-driven projects.
          My mindset is always: <Box component="span" sx={{ fontStyle: 'italic', color: '#c0a7ff' }}>"Let’s build this beautifully."</Box>
        </Typography>
      </Collapse>

      <Button
        variant="outlined"
        onClick={handleToggle}
        sx={{
          mt: 3,
          borderRadius: 28,
          px: 4,
          py: 1.5,
          borderColor: '#3d3d55',
          color: 'white',
          '&:hover': {
            borderColor: '#5d5d75',
          },
          width: '100%',
        }}
        endIcon={<ExpandMoreIcon sx={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0)', transition: '0.3s' }} />}
      >
        {expanded ? 'Show Less' : 'Show More'}
      </Button>

      <Divider sx={{ my: 3, bgcolor: '#3d3d55' }} />

      <Typography variant="body1" sx={{ mb: 2, fontSize: isMobile ? '0.85rem' : '1rem' }}>
        Your search — <em>why hire a saba</em> — did not match any doubts.
      </Typography>

      <Typography variant="body1" sx={{ mb: 1.5, fontSize: isMobile ? '0.85rem' : '1rem' }}>
        Suggestions:
      </Typography>

      <ul style={{ paddingLeft: '2rem', fontSize: isMobile ? '0.85rem' : '1rem' }}>
        <li>Try asking: <strong>"Can Saba lead our next innovation sprint?"</strong></li>
        <li>Explore Saba’s <strong>projects, résumé, or published research</strong></li>
        <li>Or better yet — just reach out: <strong>sabatanji23@gmail.com</strong></li>
      </ul>
    </Box>
  );
}
