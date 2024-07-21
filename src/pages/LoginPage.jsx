import facebookIcon from "../../src/assets/facebook.svg";
import googleIcon from "../../src/assets/google.svg";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { userContext } from "../context/UserContext";

function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { setUser } = useContext(userContext);

  const navigate = useNavigate();

  async function login() {
    setError(null);
    setLoading();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
      });
      if (!response.ok) {
        throw new Error(error);
      }

      const user = await response.json();
      setUser(user);
      saveUser(user);
      navigate("/");
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    login();
  }
  return (
    <div className="flex my-10 px-20  gap-10  ">
      <div className="flex-1 ">
        <img
          style={{ width: 800, height: 730 }}
          src="/img.jpeg"
          alt=""
          className="rounded-3xl w-full"
        />
      </div>
      <div className="flex-1 bg-gray-200 rounded-3xl px-10 py-10">
        <div className="px-24 mt-32">
          <h1 className="text-4xl font-light">Sign in</h1>
          <form className="mt-10" onSubmit={handleSubmit}>
            <div className="border border-black px-2 py-1 text-lg rounded-xl">
              <input
                className="bg-transparent outline-none "
                type="text"
                name=""
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                id=""
                placeholder="example@mail.com"
              />
            </div>
            <div className="border border-black px-2 py-1 text-lg rounded-xl mt-5">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent outline-none "
                required
                type="password"
                name=""
                id=""
                placeholder="*********"
              />
            </div>

            <button
              disabled={loading}
              className="rounded-xl bg-green-500 w-full mt-8 py-3 hover:scale-105 duration-300"
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
          <div className="text-center mt-3">
            <p>or</p>
          </div>
          <div className="flex justify-between mt-5">
            <button className="flex items-center gap-3 bg-gray-300 px-5 py-1 rounded-xl hover:scale-105 duration-300">
              <img style={{ width: 30, height: 30 }} src={googleIcon} alt="" />
              Google
            </button>
            <button className="flex items-center gap-3 bg-gray-300 px-4 py-1 rounded-xl hover:scale-105 duration-300">
              <img
                style={{ width: 30, height: 30 }}
                src={facebookIcon}
                alt=""
              />
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
