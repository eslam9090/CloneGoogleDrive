// src/context/FileContext.jsx
import { createContext, useContext, useState } from "react";

const FileContext = createContext();

export const ContextFileProvider = ({ children }) => {
  const [files, setFiles] = useState([]);
  const [filteredFilesDate, setFilteredFilesDate] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [view, setView] = useState("list");
  return (
    <FileContext.Provider
      value={{
        view,
        setView,
        files,
        setFiles,
        filteredFilesDate,
        setFilteredFilesDate,
        searchTerm,
        setSearchTerm,
        suggestions,
        setSuggestions,
        setSelectedFile,
        selectedFile,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFileContext = () => useContext(FileContext);
