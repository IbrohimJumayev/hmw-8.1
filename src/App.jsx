import Navbar from "./components/common/Navbar";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import TodayPage from "./pages/TodayPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/protectedRoutes/ProtectedRoute";

function App() {
  return (
    <div>
      <div className="flex">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/today" element={<TodayPage />} />
          </Route>

          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
