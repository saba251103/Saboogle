import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  IconButton,
  Typography,
  Collapse,
  Box,
  Tooltip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ComposeMailModal = ({ open, handleClose }) => {
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [cc, setCc] = useState("");
  const [bcc, setBcc] = useState("");
  const [showCc, setShowCc] = useState(false);
  const [showBcc, setShowBcc] = useState(false);

  const handleSend = () => {
    const to = "sabatanji23@gmail.com";
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `From: ${from}\n\n${message}`
    )}${cc ? `&cc=${encodeURIComponent(cc)}` : ""}${bcc ? `&bcc=${encodeURIComponent(bcc)}` : ""}`;

    window.location.href = mailtoLink;
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <Box sx={{ backgroundColor: "#221d35", color: "white" }}>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#2d2645",
          }}
        >
          <Typography variant="h6">New Message</Typography>
          <IconButton onClick={handleClose} sx={{ color: "#aaa" }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ backgroundColor: "#221d35" }}>
            <br/>
          <TextField
            fullWidth
            label="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            variant="filled"
            InputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "#aaa" } }}
            sx={{ mb: 2 }}
          />

          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Typography variant="body2" sx={{ color: "#aaa" }}>
              To: <strong style={{ color: "#fff" }}>sabatanji23@gmail.com</strong>
            </Typography>
            <Tooltip title="Add CC">
              <IconButton size="small" onClick={() => setShowCc(!showCc)} sx={{ color: "#a782d9" }}>
                {showCc ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />}
              </IconButton>
            </Tooltip>
            <Tooltip title="Add BCC">
              <IconButton size="small" onClick={() => setShowBcc(!showBcc)} sx={{ color: "#a782d9" }}>
                {showBcc ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />}
              </IconButton>
            </Tooltip>
          </Box>

          <Collapse in={showCc}>
            <TextField
              fullWidth
              label="CC"
              value={cc}
              onChange={(e) => setCc(e.target.value)}
              variant="filled"
              InputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "#aaa" } }}
              sx={{ mb: 2 }}
            />
          </Collapse>

          <Collapse in={showBcc}>
            <TextField
              fullWidth
              label="BCC"
              value={bcc}
              onChange={(e) => setBcc(e.target.value)}
              variant="filled"
              InputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "#aaa" } }}
              sx={{ mb: 2 }}
            />
          </Collapse>

          <TextField
            fullWidth
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            variant="filled"
            InputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "#aaa" } }}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Message"
            multiline
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            variant="filled"
            InputProps={{ style: { color: "white" } }}
            InputLabelProps={{ style: { color: "#aaa" } }}
          />
        </DialogContent>

        <DialogActions sx={{ backgroundColor: "#2d2645" }}>
          <Button onClick={handleClose} sx={{ color: "#aaa" }}>
            Cancel
          </Button>
          <Button
            onClick={handleSend}
            variant="contained"
            sx={{ backgroundColor: "#a782d9", color: "#1b1a2e", fontWeight: "bold" }}
          >
            Send
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default ComposeMailModal;
