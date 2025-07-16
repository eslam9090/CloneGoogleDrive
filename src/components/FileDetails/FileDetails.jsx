import { Popover, Typography, Box, Divider, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useFileContext } from "../../context/ContextFileProvider";
import { memo } from "react";

const FileDetails = memo(({ clickedEl, handleClose }) => {
  const { selectedFile } = useFileContext();

  return (
    <Popover
      open={clickedEl}
      anchorEl={clickedEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Box sx={{ padding: 2, width: 250 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">File Details</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ my: 2 }} />

        {selectedFile?.type === "Image" ? (
          <Box
            sx={{
              mb: 2,
              borderRadius: 1,
              overflow: "hidden",
              border: "1px solid #ccc",
            }}
          >
            <img
              src={selectedFile?.url}
              alt={selectedFile.name}
              style={{ width: "100%", height: "100px", display: "block" }}
            />
          </Box>
        ) : selectedFile?.type === "PDF" ? (
          <Box
            sx={{
              mb: 2,
              borderRadius: 1,
              overflow: "hidden",
              border: "1px solid #ccc",
            }}
          >
            <iframe
              src={selectedFile?.url}
              title="PDF Preview"
              style={{
                width: "100%",
                height: "100px",
                border: "none",
                overflow: "hidden",
                objectFit: "contain",
              }}
            />
          </Box>
        ) : (
          ""
        )}

        <Typography variant="body2">
          <strong>Name:</strong> {selectedFile?.name}
        </Typography>
        <Typography variant="body2">
          <strong>Size:</strong> {selectedFile?.size}
        </Typography>
        <Typography variant="body2">
          <strong>Last Modified:</strong> {selectedFile?.lastModified}
        </Typography>
      </Box>
    </Popover>
  );
});

export default FileDetails;
