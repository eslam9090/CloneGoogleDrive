import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ImageIcon from "@mui/icons-material/Image";
import Box from "@mui/material/Box";
import { useFileContext } from "../../context/ContextFileProvider";

const TypeFilter = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selected, setSelected] = React.useState("");

  const { files, setFilteredFilesDate } = useFileContext();
  console.log("TypeFilter rendered with selected:", files);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option) => {
    if (option) {
      setSelected(option);

      let filtered = [];
      if (option === "PDF") {
        filtered = files.filter((file) => file.type.includes("PDF"));
      } else if (option === "Image") {
        filtered = files.filter((file) => file.type.includes("Image"));
      }
      console.log(filtered);

      setFilteredFilesDate(filtered);
    }
    setAnchorEl(null);
  };

  const handleClear = (e) => {
    e.stopPropagation();
    setSelected("");
    setFilteredFilesDate(files);
  };

  const options = [
    {
      label: "PDF",
      icon: (
        <PictureAsPdfIcon fontSize="small" sx={{ mr: 1, color: "#D32F2F" }} />
      ),
    },
    {
      label: "Image",
      icon: <ImageIcon fontSize="small" sx={{ mr: 1, color: "#1976D2" }} />,
    },
  ];

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
          {selected || "Type"}
        </Button>
        {selected && (
          <CloseIcon
            onClick={handleClear}
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
      <Menu anchorEl={anchorEl} open={anchorEl} onClose={() => handleClose()}>
        {options.map((option) => (
          <MenuItem
            key={option.label}
            onClick={() => handleClose(option.label)}
            sx={{
              "&:hover": {
                backgroundColor: "#D8DAD8",
              },
            }}
          >
            {option.icon}
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default TypeFilter;
