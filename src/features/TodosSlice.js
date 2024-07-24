import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tomorrow: [],
  thisWeek: [],
};

const TodosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      const TODO = {
        id: Date.now(),
        title: payload,
        completed: false,
      };
      state.push(TODO);
    },
    deleteTodo: (state, { payload }) => {
        const updatedTodos = state.filter((todo) => todo.id !== payload)
        state.push(updatedTodos)
    }
  },
});

export const {addTodo, deleteTodo} = TodosSlice.actions
export default TodosSlice.reducer
