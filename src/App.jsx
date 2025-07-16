import MyDrive from "./components/myDrive/MyDrive.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";
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
