import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <div className="App w-100">
      <Navigation />
      <div className="container-fluid px-0 main-content pt-3">
        <div className="container">
          <Outlet />
          <div className="text-center my-5">
            <p className="text-muted">&copy; 2025 Seuss Treasury</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
