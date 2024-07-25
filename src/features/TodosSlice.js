import { createSlice } from "@reduxjs/toolkit";

const TodosSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: "todo1", checked: false },
    { id: 2, title: "todo2", checked: false },
    { id: 3, title: "todo3", checked: true },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        checked: false,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = TodosSlice.actions;
export default TodosSlice.reducer;
