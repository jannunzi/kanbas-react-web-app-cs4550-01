import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { setTodo, addTodo, updateTodo, deleteTodo } from "./todosReducer";
function TodoList() {
  const { todos, todo } = useSelector((state) => state.todosReducer);

  return (
    <div>
      <h2>Todo List</h2>
      <ul className="list-group">
        <TodoForm />
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
