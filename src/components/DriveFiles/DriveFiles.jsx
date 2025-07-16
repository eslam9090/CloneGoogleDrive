import React from "react";
import styles from "./DriveFiles.module.css";
import ModifiedDateFilter from "../ModifiedDateFilter/ModifiedDateFilter";
import TypeFilter from "../TypeFilter/TypeFilter";
import ToggelView from "../ToggelView/ToggelView";
import FilesList from "../FilesList/FilesList";
import FilesCards from "../FilesCards/FilesCards";
import { useFileContext } from "../../context/ContextFileProvider";
const DriveFiles = () => {
  const { view } = useFileContext();
  return (
    <div className={styles.drivefilesconatiner}>
      <div className={styles.filterContainer}>
        <div className={styles.filters}>
          <ModifiedDateFilter />
          <TypeFilter />
        </div>
        <ToggelView />
      </div>
      {view === "list" ? <FilesList /> : <FilesCards />}
    </div>
  );
};

export default DriveFiles;
