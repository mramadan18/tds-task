import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import StudioDetailsPage from "./pages/StudioDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/studios/:id" element={<StudioDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
