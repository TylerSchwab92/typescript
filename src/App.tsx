import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';
import TodoList from './components/TodoList';

// let name:string;
// let age:number | string;
// let isStudent:boolean;
// let hobbies:string | number[];
// let role:[number, string];

// interface Person  {
//   name:string;
//   age?:number;
// }

// let person: Person = {
// name: "tyler",

// }

// let lotsOfPeople: Person[];


const App: React.FC = ()  => {
  const[todo, setTodo] = useState<string>("");
  const[todos, setTodos] = useState<Todo[]>([]);


  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos,{id:Date.now(), todo, isDone:false}])
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">List</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
