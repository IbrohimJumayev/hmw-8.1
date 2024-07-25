import Logout from "../Logout";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <aside
      className={`flex-col w-96 aside rounded-  mx-10 my-10 px-10 py-10 ${
        isLoginPage ? "hidden" : ""
      } `}
    >
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Menu</h1>
          <button>
            <span className="material-symbols-outlined font-black">menu</span>
          </button>
        </div>
        <div className="flex gap-2 items-center px-2 py-1 mt-4  bg-gray-200 rounded-2xl">
          <span className="material-symbols-outlined font-bold text-gray-400">
            search
          </span>
          <input
            className="outline-none bg-transparent text-xl font-semibold text-gray-400 "
            type="text"
            name=""
            id=""
            placeholder="Search..."
          />
        </div>
        <div className="mt-5">
          <h2 className="text-xl font-bold">Tasks</h2>
          <ul className="mt-2 flex-col">
            <NavLink to="/">
              <li className="flex items-center gap-2 cursor-pointer hover:scale-105 pt-5 duration-300">
                <span class="material-symbols-outlined">event_upcoming</span>
                Home
              </li>
            </NavLink>

            <NavLink to="/today">
              <li className="flex items-center gap-2 cursor-pointer hover:scale-105 pt-5 duration-300">
                <span class="material-symbols-outlined">today</span>Today
              </li>
            </NavLink>
            <NavLink to="/upcoming">
              <li className="flex items-center gap-2 cursor-pointer hover:scale-105 pt-5 duration-300">
                <span class="material-symbols-outlined">event_upcoming</span>
                Upcoming
              </li>
            </NavLink>

            <li className="flex items-center gap-2 cursor-pointer hover:scale-105 pt-5 duration-300">
              <span class="material-symbols-outlined">sticky_note_2</span>Sticky
              Wall
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <h2 className="text-xl font-bold">Lists</h2>
          <ul className="mt-5">
            <li className=" bg-gray-200 rounded-2xl px-2 py-2 mt-4 flex gap-2 items-center cursor-pointer hover:scale-105 duration-300">
              <span class="material-symbols-outlined">work</span>Work
            </li>
            <li className=" bg-gray-200 rounded-2xl px-2 py-2 mt-4 flex gap-2 items-center cursor-pointer hover:scale-105 duration-300">
              <span class="material-symbols-outlined">person</span>
              Personal
            </li>
            <li className=" bg-gray-200 rounded-2xl px-2 py-2 mt-4 flex gap-2 items-center cursor-pointer hover:scale-105 duration-300">
              <span class="material-symbols-outlined">import_contacts</span>
              Study
            </li>
            <button className="flex items-center gap-3 mt-4 font-light">
              <span class="material-symbols-outlined">add_circle</span>Add new
              list
            </button>
          </ul>
        </div>
        <div className="bottom">
          <button className="flex items-center gap-5 hover:scale-105 duration-300">
            <span class="material-symbols-outlined">tune</span>Settings
          </button>
          <Logout />
        </div>
      </div>
    </aside>
  );
};

export default Navbar;
