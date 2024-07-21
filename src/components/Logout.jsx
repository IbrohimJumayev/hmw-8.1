import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../context/UserContext";

const Logout = () => {
  const { setUser } = useContext(userContext);
  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login", { replace: true });
  }
  return (
    <div>
      <button
        onClick={logOut}
        className="flex items-center gap-5 hover:scale-105 duration-300"
      >
        <span class="material-symbols-outlined">logout</span>Sign Out
      </button>
    </div>
  );
};

export default Logout;
