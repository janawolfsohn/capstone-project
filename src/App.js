import { useState } from "react";
import Form from "./modules/Form";
import Header from "./modules/Header";
import Nav from "./modules/Nav";
import Todo from "./modules/ToDo";
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todos, setTodos] = useState([])

  
  return (
    <div className="App">
    <Header />
    <Form onCreateTodo={addTodo} />
      {todos.map(({title, isDone, id}, index) =>
      <Todo onClick={() => toggleTodo(index)} title={title} isDone={isDone} key={id} />)}
    <Nav />
    
    </div>
  );
  

 function toggleTodo(index) {
  const todo = todos[index]

  setTodos([
    ...todos.slice(0, index),
    {...todo, isDone: !todo.isDone},
    ...todos.slice(index + 1)
  ])
 }

   function addTodo(title) {
    setTodos([...todos, {title, isDone: false, id: uuidv4() }])
   }

}

export default App;

