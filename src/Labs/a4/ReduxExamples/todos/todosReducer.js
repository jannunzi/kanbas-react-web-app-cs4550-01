import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ],
  todo: { title: "Learn Mongo" },
};

const todoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodo: (state, action) => {
      state.todo = action.payload;
    },
    addTodo: (state, action) => {
      const newTodos = [
        ...state.todos,
        { ...state.todo, id: new Date().getTime().toString() },
      ];
      state.todos = newTodos;
      state.todo = { title: "" };
    },
    deleteTodo: (state, action) => {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);

      state.todos = newTodos;
    },
    updateTodo: (state, action) => {
      const newTodos = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.todos = newTodos;
      state.todo = { title: "" };
    },
  },
});

export const { setTodo, addTodo, deleteTodo, updateTodo } = todoReducer.actions;
export default todoReducer.reducer;
