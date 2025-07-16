import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import { useFileContext } from "../../context/ContextFileProvider";
import ImageIcon from "@mui/icons-material/Image";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
const Search = () => {
  const {
    files,
    setSuggestions,
    setSearchTerm,
    suggestions,
    searchTerm,
    setFilteredFilesDate,
  } = useFileContext();
  const handelSearch = (searchTerm) => {
    setSearchTerm(searchTerm);

    const filtered = files.filter((file) =>
      file.name.toLowerCase().includes(searchTerm)
    );
    setSuggestions(searchTerm ? filtered.slice(0, 5) : []);
    setFilteredFilesDate(filtered);
  };
  const handelCloseIcone = () => {
    setSearchTerm("");
    setSuggestions([]);
    setFilteredFilesDate(files);
  };
  return (
    <Box
      sx={{
        position: "relative",
        width: "722px",
        maxWidth: "100%",
        mt: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#E9EEF7",
          borderRadius: "999px",
          px: 2,
          py: 1.4,
          "&:focus-within": {
            backgroundColor: "#fff",
            boxShadow: "0 1px 3px rgba(0,0,0,0.4)",
          },
        }}
      >
        <SearchIcon sx={{ color: "#000", mr: 1 }} />

        <InputBase
          placeholder="Search in Drive"
          value={searchTerm}
          onChange={(e) => handelSearch(e.target.value)}
          sx={{
            flex: 1,
            fontSize: 17,
            fontWeight: 500,
            color: "#000",
          }}
        />
        {searchTerm && (
          <IconButton onClick={() => handelCloseIcone()}>
            <CloseIcon fontSize="small" />
          </IconButton>
        )}
        <TuneIcon sx={{ color: "#555", ml: 1 }} />
      </Box>

      {suggestions.length > 0 && (
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            bgcolor: "#fff",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            borderRadius: 1,
            mt: 1,
            zIndex: 10,
          }}
        >
          {suggestions.map((file) => (
            <Box
              key={file.id}
              sx={{
                display: "flex",
                alignItems: "center",
                px: 2,
                py: 1,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
              onClick={() => {
                setSearchTerm(file.name);
                setSuggestions([]);
                setFilteredFilesDate([file]);
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
              {file.name}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Search;
