import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const handleAddTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { text: task, completed: false }]);
    setTask("");
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTodo}>Add Task</button>

      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => handleToggleTodo(index)}
            style={{
              cursor: "pointer",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
