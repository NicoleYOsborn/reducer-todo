import React, {useReducer, useState} from 'react';
import './App.css';
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';
import {initialState, reducer} from './reducers/reducer'

function App() {
  const [task, setTask] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const handleChanges = e => {
      setTask(e.target.value);
  }
  return (
    <div className="App">
      <h1>To Do List</h1>
      <input
                type='text'
                value={task}
                onChange = {handleChanges}
                />
             <button onClick = {()=>{
                 dispatch({ type: 'ADD_ITEM', payload: task})
                 setTask('');
                    }} 
             >Add Item
                </button>  
        <h3>Tasks:</h3> 
        <div> {state.map(todo => (
                    <p onClick={() => dispatch({ type: 'MARK_COMPLETED', payload: todo.id })} key={todo.id} className={`${todo.completed ? ' completed' : ''}`}>{todo.task}</p>
                ))}
</div>           
 

       <button onClick={()=> dispatch({type: 'REMOVE_ITEM'})}> Clear completed </button>
    </div>
  );
}

export default App;
