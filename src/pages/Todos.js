import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "../modules/Form";
import Todo from "../modules/ToDo";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Form onCreateTodo={addTodo} />
      {todos.map(({ title, isDone, id }, index) => (
        <Todo
          onClick={() => toggleTodo(index)}
          title={title}
          isDone={isDone}
          key={id}
        />
      ))}
    </>
  );

  function toggleTodo(index) {
    const todo = todos[index];

    setTodos([
      ...todos.slice(0, index),
      { ...todo, isDone: !todo.isDone },
      ...todos.slice(index + 1),
    ]);
  }

  function addTodo(title) {
    setTodos([...todos, { title, isDone: false, id: uuidv4() }]);
  }
}
