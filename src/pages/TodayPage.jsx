import { useState } from "react";

const TodayPage = () => {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  const [newTask, setNewTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim().length !== 0) {
      const TODO = {
        id: Date.now(),
        taskName: newTask,
        done: false,
      };
      setTodos([...todos, TODO]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    const updatedTodos = todos.filter((t) => t.id !== id)
    setTodos(updatedTodos) 
  }
  return (
    <div className="flex-1">
      <h1 className="mt-10 text-3xl font-semibold ">Today</h1>
      <div className="-ml-5 mr-5 my-10 px-10 py-10 today">
        <p className="text-3xl font-semibold">Today</p>
        <div className="flex gap-3 border rounded-xl items-center px-4  pt-2 pb-1 mt-5">
          <form className="flex items-center  gap-3">
            <button onClick={addTask}>
              <span class="material-symbols-outlined">add_circle</span>
            </button>
            <input
              required
              type="text"
              placeholder="Add new task"
              className="bg-transparent outline-none pb-2 text-xl font-thin"
              onChange={(e) => setNewTask(e.target.value)}
              value={newTask}
            />
          </form>
        </div>
        <div>
          {todos.map((t) => (
            <ul
              className="mt-5 flex justify-between border-b pb-3 px-5"
              key={t.id}
            >
              <li className=" text-xl font-bold">{t.taskName}</li>
              <button onClick={() => deleteTask(t.id)} className="hover:scale-110 duration-300">
                <span class="material-symbols-outlined">delete</span>
              </button>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodayPage;
