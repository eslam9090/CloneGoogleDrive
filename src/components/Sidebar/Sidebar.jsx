import React, { useRef } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useFileContext } from "../../context/ContextFileProvider";
const drawerWidth = 250;

function ResponsiveDrawer() {
  const { setFiles, setFilteredFilesDate } = useFileContext();

  const fileInputRef = useRef();

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    });
  };
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files).map((file) => ({
      name: file.name,
      size: (file.size / 1024).toFixed(2) + " KB",
      type: file.type.includes("pdf") ? "PDF" : "Image",
      url: URL.createObjectURL(file),
      lastModified: formatDate(file.lastModified),
    }));
    setFiles((prev) => [...prev, ...selectedFiles]);
    setFilteredFilesDate((prev) => [...prev, ...selectedFiles]);
  };

  const drawer = (
    <>
      <Box sx={{ display: "flex", alignItems: "center", p: 2, gap: 2 }}>
        <Box
          component="img"
          src="./assets/images/Google_Drive_Logo.svg"
          alt="Dev"
          sx={{ width: 40 }}
        />
        <Typography variant="body1" sx={{ fontSize: 22 }}>
          Drive
        </Typography>
      </Box>
      <Button
        variant="contained"
        startIcon={<AddIcon sx={{ fontSize: 20 }} />}
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
          borderRadius: "16px",
          textTransform: "none",
          width: "110px",
          fontSize: 15,
          px: 3,
          py: 2.2,
          mx: 2,
          "&:hover": {
            backgroundColor: "#E9EEF7",
            boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
          },
        }}
        onClick={handleUploadClick}
      >
        New
      </Button>
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,image/*"
        multiple
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <List>
        {["Home", "My Drive", "Computers", "Shared with me"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth } }}
        aria-label="mailbox folders"
      >
        <Box
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "transparent",
              flexShrink: 0,
            },
          }}
        >
          {drawer}
        </Box>
      </Box>
    </Box>
  );
}
export default ResponsiveDrawer;
