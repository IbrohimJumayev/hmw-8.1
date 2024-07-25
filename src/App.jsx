import Navbar from "./components/common/Navbar";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import TodayPage from "./pages/TodayPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/protectedRoutes/ProtectedRoute";
import Upcoming from "./pages/Upcoming";
import { useDispatch, useSelector } from "react-redux";

function App() {
  return (
    <div>
      <div className="flex">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/today" element={<TodayPage />} />
            <Route path="/upcoming" element={<Upcoming />} />
          </Route>

          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
