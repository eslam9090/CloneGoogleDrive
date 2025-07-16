import { useState } from "react";
import { IconButton, Box, Tooltip, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GridViewIcon from "@mui/icons-material/GridView";
import InfoIcon from "@mui/icons-material/Info";
import FileDetails from "../FileDetails/FileDetails"; // Adjust the path if needed
import { useFileContext } from "../../context/ContextFileProvider";
import CheckIcon from "@mui/icons-material/Check";
const ToggelView = () => {
  const { view, setView } = useFileContext();

  const [clickedEl, setclickedEl] = useState(null);

  const handleInfoClick = (event) => {
    setclickedEl(event.currentTarget);
  };

  const handleClose = () => {
    setclickedEl(null);
  };

  return (
    <Box display="flex" alignItems="flex-start" gap={1}>
      <Box
        display="flex"
        justifyContent={"space-around"}
        borderRadius="20px"
        bgcolor="white"
        border={1}
        borderColor="#000"
        width="120px"
      >
        <IconButton
          onClick={() => setView("list")}
          sx={{
            bgcolor: view === "list" ? "lightblue" : "transparent",
            borderRadius: "20px 0 0 20px",
            flexGrow: 1,
            padding: 0,
          }}
        >
          {view === "list" && (
            <CheckIcon
              color="success"
              fontSize="small"
              sx={{ color: "#000", mr: 1 }}
            />
          )}
          <MenuIcon fontSize="small" sx={{ color: "#000" }} />
        </IconButton>
        <Divider orientation="vertical" flexItem sx={{ bgcolor: "#000" }} />
        <IconButton
          onClick={() => setView("grid")}
          sx={{
            bgcolor: view === "grid" ? "lightblue" : "transparent",
            borderRadius: "0 20px 20px 0",
            flexGrow: 1,
          }}
        >
          {view === "grid" && (
            <CheckIcon
              color="success"
              fontSize="small"
              sx={{ color: "#000", mr: 1 }}
            />
          )}
          <GridViewIcon fontSize="small" sx={{ color: "#000" }} />
        </IconButton>
      </Box>
      <Tooltip title="View Details">
        <IconButton onClick={handleInfoClick}>
          <InfoIcon color="action" />
        </IconButton>
      </Tooltip>

      <FileDetails clickedEl={clickedEl} handleClose={handleClose} />
    </Box>
  );
};

export default ToggelView;
