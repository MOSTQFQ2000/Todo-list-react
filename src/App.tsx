import React, { useState } from 'react';
import TodoTable from './components/TodoTable';
import NewTododForm from './components/NewTodoForm'

function App() {

const [todos,setTodos] = useState( [
  {rowNumber:1 , rowDescription: 'feed dog' , rowAssigned: 'user 1'},
  {rowNumber:2 , rowDescription: 'water palnts' , rowAssigned: 'user 2'},
  {rowNumber:3 , rowDescription: 'prapare diner' , rowAssigned: 'user 1'},
  {rowNumber:4 , rowDescription: 'play video games' , rowAssigned: 'user 3'}
])

const addTodo = (description :string , assigned :string) => {
  let rowNumber = 0;
  if (todos.length > 0){
    rowNumber = todos[todos.length -1].rowNumber +1;
  }else{
    rowNumber = 1;
  }
    const newTodo = {
      rowNumber : todos.length +1,
      rowDescription : description,
      rowAssigned : assigned
    };
    setTodos(todos => [...todos,newTodo]);
}

const deleteTodo = (deleteRowNomber :number) => {
  let filtred = todos.filter(function (value){
    return value.rowNumber !== deleteRowNomber;
  })
  setTodos(filtred);
}

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
        your todo's
        </div>
        <div className='card-body'>
        <TodoTable todos={todos} deleteTodo={deleteTodo} />
        <button className='btn btn-primary' ></button>
        <NewTododForm addTodo = {addTodo} />
        </div>
      </div>
      
    </div>
  );
}

export default App;

