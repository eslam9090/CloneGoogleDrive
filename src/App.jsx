import MyDrive from "./components/MyDrive/MyDrive.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import "./index.css";
function App() {
  return (
    <>
      <div className="app_container">
        <Sidebar />
        <MyDrive />
      </div>
    </>
  );
}

export default App;
