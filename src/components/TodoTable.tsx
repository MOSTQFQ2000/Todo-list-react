import React from "react";
import TodoRowItem from "./TodoRowItem";

function TodoTable (props:{todos : todoModel[],deleteTodo : Function}){
    return( 
    
    <table className='table table-hover'>
    <thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>Description</th>
        <th scope='col'>assigned</th>
      </tr>
    </thead>
    <tbody>
        {props.todos.map(list => ( 
            <TodoRowItem 
            key = {list.rowNumber}
            rowNumber = {list.rowNumber}
            rowDescription = {list.rowDescription}
            rowAssigned = {list.rowAssigned}
            deleteTodo = {props.deleteTodo}
            />
        ))}

    </tbody>
  </table>

    )
}

export default TodoTable