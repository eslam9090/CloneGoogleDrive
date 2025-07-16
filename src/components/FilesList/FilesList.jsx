import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useFileContext } from "../../context/ContextFileProvider";

const FilesList = () => {
  const { filteredFilesDate, setSelectedFile, selectedFile } = useFileContext();

  return (
    <TableContainer
      component={Paper}
      elevation={2}
      sx={{
        maxHeight: "100vh", // Adjust as needed
        overflowY: "scroll",
        mt: "100px",
        boxShadow: "none",
      }}
    >
      {selectedFile && (
        <Box
          sx={{
            px: 2,
            py: 0.5,
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "#F0F4F9",
              my: 2,
              width: "fit-content",
              borderRadius: 5,
              fontSize: 14,
              px: 2,
              py: 1.5,
            }}
            onClick={() => setSelectedFile(null)}
          >
            <CloseIcon fontSize="small" sx={{ mr: 1 }} />
            Remove Selection
          </IconButton>
        </Box>
      )}

      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Name</strong>
            </TableCell>
            <TableCell>
              <strong>Type</strong>
            </TableCell>
            <TableCell>
              <strong>Date Modified</strong>
            </TableCell>
            <TableCell>
              <strong>File Size</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            maxHeight: "40vh",
            overflowY: "auto",
          }}
        >
          {filteredFilesDate.map((file, index) => (
            <TableRow
              key={index}
              onClick={() => {
                setSelectedFile(file);
              }}
              sx={{
                backgroundColor:
                  selectedFile && selectedFile.name === file.name
                    ? "#B5D7ED"
                    : "inherit",
                cursor: "pointer",
              }}
            >
              <TableCell>{file.name}</TableCell>
              <TableCell>{file.type}</TableCell>
              <TableCell>{file.lastModified}</TableCell>
              <TableCell>{file.size}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FilesList;
