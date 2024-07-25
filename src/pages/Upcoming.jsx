import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo, deleteTodo } from "../features/TodosSlice";

const Upcoming = () => {
  const dispatch = useDispatch();
  const todayTodos = useSelector((state) => state.todos);
  console.log(todayTodos);
  const [todayValue, setTodayValue] = useState("");

  const addTodayTasks = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        title: todayValue,
      })
    );
    setTodayValue("");
  };

  const deleteTodosTody = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div>
      <div className="flex gap-4 ">
        <h1 className="mt-10 text-3xl font-semibold">Upcoming</h1>
        <span className="mt-11 rounded-xl border-2 border-gray-200 font-bold  px-4 rounded-tr-3xl py-1"></span>
      </div>
      <div className="-ml-5 mr-5 my-10 px-10 py-10 today1 max-h-96 overflow-y-auto mt-5">
        <p className="text-3xl font-semibold">Today</p>
        <div className="flex gap-3 border rounded-xl items-center px-4 pt-2 pb-1 mt-5">
          <form className="flex items-center gap-3">
            <button onClick={addTodayTasks}>
              <span className="material-symbols-outlined">add_circle</span>
            </button>
            <input
              onChange={(e) => setTodayValue(e.target.value)}
              required
              value={todayValue}
              type="text"
              placeholder="Add new task"
              className="bg-transparent outline-none pb-2 text-xl font-thin"
            />
          </form>
        </div>
        <div className="">
          {todayTodos.map((t) => (
            <ul className="flex justify-between border-b pb-3 px-5" key={t.id}>
              <li className="text-xl font-bold">{t.title}</li>
              <button
                onClick={() => deleteTodosTody(t.id)}
                className="hover:scale-110 duration-300"
              >
                <span className="material-symbols-outlined">delete</span>
              </button>
            </ul>
          ))}
        </div>
      </div>
      <div className="flex gap-5">
        <div className="-ml-5 mr-5  px-10 py-10 today2 flex-1">
          <p className="text-3xl font-semibold">Tomorrow</p>
          <div className="flex gap-3 border rounded-xl items-center px-4 pt-2 pb-1 mt-5">
            <form className="flex items-center gap-3">
              <button>
                <span className="material-symbols-outlined">add_circle</span>
              </button>
              <input
                required
                type="text"
                placeholder="Add new task"
                className="bg-transparent outline-none pb-2 text-xl font-thin"
              />
            </form>
          </div>
        </div>
        <div className="-ml-5 mr-5  px-10 py-10 today3 flex-1">
          <p className="text-3xl font-semibold">This Week</p>
          <div className="flex gap-3 border rounded-xl items-center px-4 pt-2 pb-1 mt-5">
            <form className="flex items-center gap-3">
              <button>
                <span className="material-symbols-outlined">add_circle</span>
              </button>
              <input
                required
                type="text"
                placeholder="Add new task"
                className="bg-transparent outline-none pb-2 text-xl font-thin"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
