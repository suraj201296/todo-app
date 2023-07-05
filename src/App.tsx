import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import './styles/inputField.css'

import TodoList from './components/TodoList';


const App: React.FC = () => {

  const [todo , setTodo] = useState<string>("");
  const [todoList , setTodoList] = useState<Todo[]>([]);

  const handleForm = (e : React.FormEvent) => {
    e.preventDefault();
    if(todo) {
      setTodoList([...todoList,{ id: Date.now() , task : todo , isDone : false }]);
      setTodo('');
    }
  }
  console.log(todoList);

  return (
    <div className="App">
      <span className='heading'> Todo App</span>
      <InputField todo={todo} setTodo={setTodo} handleForm={handleForm}/>
      <TodoList todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
