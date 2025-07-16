import React from "react";
import Search from "../Search/Search";
import Box from "@mui/material/Box";
import DriveFiles from "../DriveFiles/DriveFiles";


const MyDrive = () => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Search />
        <DriveFiles />

      </Box>
    </>
  );
};

export default MyDrive;
