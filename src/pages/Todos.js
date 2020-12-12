import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "../modules/Form";
import Todo from "../modules/ToDo";
import Header from "../modules/Header";
import saveLocally from "../lib/saveLocally";
import loadLocally from "../lib/loadLocally";

export default function Todos(props) {
  const [todos, setTodos] = useState( loadLocally("todos")|| []);

  useEffect(() => {
    saveLocally("todos", todos);
  }, [todos]);

  
  return (
    <>
      <Header title="ToDo" />
      <Form onCreateTodo={addTodo} />
      {todos.map(({ title, isDone, completed, id }, index) => (
        <Todo
          onToggleTodo={() => toggleTodo(index)}
          title={title}
          isDone={isDone}
          key={id}
          onDelete={() => onDelete(title)}
          completed={completed}
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
    setTodos([
      ...todos,
      { title, isDone: false, id: uuidv4(), date: new Date().toLocaleString() },
    ]);
    saveLocally("toodoo", Todos);
  }

  function onDelete(title) {
    setTodos(todos.filter((todo) => todo.title !== title));
  }
}
