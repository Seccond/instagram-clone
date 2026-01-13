import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./route/route.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <AppRoutes />
        BrowserRouter
      </div>
    </BrowserRouter>
  );
}

export default App;
