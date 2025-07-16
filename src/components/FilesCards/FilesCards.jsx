import { Box, IconButton, Typography } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useFileContext } from "../../context/ContextFileProvider";
import CloseIcon from "@mui/icons-material/Close";

const FilesCards = () => {
  const { filteredFilesDate, setSelectedFile, selectedFile } = useFileContext();

  return (
    <Box sx={{ mt: "100px", overflowY: "scroll", maxHeight: "60vh" }}>
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
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
        }}
      >
        {filteredFilesDate.map((file) => (
          <Box
            key={file.name}
            onClick={() => {
              setSelectedFile(file);
            }}
            sx={{
              backgroundColor:
                selectedFile && selectedFile.name === file.name
                  ? "#B5D7ED"
                  : "inherit",
              display: "grid",
              alignItems: "center",
              border: "1px solid #ddd",
              borderRadius: 2,
              p: 2,
              width: 241,
              height: 241,
              cursor: "pointer",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                mb: 1,

                fontWeight: 500,
                wordBreak: "break-word",
                display: "flex",
                alignItems: "center",
              }}
            >
              {file.type === "Image" ? (
                <ImageIcon fontSize="small" sx={{ mr: 1, color: "#1976D2" }} />
              ) : (
                <PictureAsPdfIcon
                  fontSize="small"
                  sx={{ mr: 1, color: "#D32F2F" }}
                />
              )}
              {file.name.length > 10 ? file.name.slice(0, 6) + "…" : file.name}
            </Typography>
            {file.type === "Image" ? (
              <img
                src={file.url}
                alt={file.name}
                style={{
                  width: "100%",
                  height: "170px",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
            ) : (
              <PictureAsPdfIcon
                sx={{
                  width: "100%",
                  height: "170px",
                  objectFit: "cover",
                  borderRadius: "4px",
                  fontSize: 60,
                  color: "#d32f2f",
                  mr: 2,
                }}
              />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FilesCards;
