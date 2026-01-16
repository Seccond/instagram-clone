import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@app/route/route.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
