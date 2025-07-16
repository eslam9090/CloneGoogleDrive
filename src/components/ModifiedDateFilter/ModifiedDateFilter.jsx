import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import { useFileContext } from "../../context/ContextFileProvider";
const ModifiedDateFilter = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState("");
  const open = Boolean(anchorEl);
  const { files, setFilteredFilesDate } = useFileContext();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option) => {
    if (option) {
      setSelected(option);
      console.log(option);

      const now = new Date();
      let filtered = [];

      if (option === "Today") {
        filtered = files.filter((file) => {
          const fileDate = new Date(file.lastModified);
          return fileDate.toDateString() === now.toDateString();
        });
      } else if (option === "Last 7 days") {
        const weekAgo = new Date();
        weekAgo.setDate(now.getDate() - 7);

        filtered = files.filter((file) => {
          const fileDate = new Date(file.lastModified);
          return fileDate >= weekAgo && fileDate <= now;
        });
      } else if (option === "Last 30 days") {
        const monthAgo = new Date();
        monthAgo.setDate(now.getDate() - 30);

        filtered = files.filter((file) => {
          const fileDate = new Date(file.lastModified);
          return fileDate >= monthAgo && fileDate <= now;
        });
      } else {
        filtered = files;
      }

      setFilteredFilesDate(filtered);
    }

    setAnchorEl(null);
  };
  const handleClear = () => {
    setSelected("");
    setFilteredFilesDate(files);
  };
  const options = ["Today", "Last 7 days", "Last 30 days"];

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button
          variant="outlined"
          onClick={handleClick}
          endIcon={<ArrowDropDownIcon />}
          sx={{
            borderRadius: selected ? "8px 0 0 8px " : "8px",
            textTransform: "none",
            backgroundColor: selected ? "#ABD4F0" : "#fff",
            borderColor: selected ? "transparent" : "#000",
            color: selected ? "#064A77" : "#878889",
            px: 2,
            py: 0.5,
            fontWeight: 500,
            fontSize: 14,
            "&:hover": {
              backgroundColor: "#90c8ec",
            },
          }}
        >
          {selected || "Modified"}
        </Button>
        {selected && (
          <CloseIcon
            onClick={(e) => {
              e.stopPropagation();
              handleClear();
            }}
            sx={{
              ml: 0.2,
              backgroundColor: "#ABD4F0",
              borderColor: "#ccc",
              color: "#064A77",
              width: 35,
              height: 35,
              py: 0.5,
              fontWeight: 500,
              fontSize: 0,
              borderRadius: "0px 8px 8px 0px ",

              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#90c8ec",
              },
            }}
          />
        )}
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        sx={{ top: 0 }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            onClick={() => handleClose(option)}
            sx={{
              "&:hover": {
                backgroundColor: "#D8DAD8",
              },
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ModifiedDateFilter;
