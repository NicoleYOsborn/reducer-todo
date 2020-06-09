// import React, {useState, useReducer} from 'react';
// import {initialState, reducer} from '../reducers/reducer'

// const TodoForm = ()=>{
//     const [newTodoItem, setNewTodoItem] = useState('');
//     const [state, dispatch] = useReducer(reducer, initialState);

//     const handleChanges = e => {
//         setNewTodoItem(e.target.name);
//     }


//     return(
//         <div>
//             <input
//                 type='text'
//                 name='newTodoItem'
//                 value={newTodoItem}
//                 onChange = {handleChanges}
//                 />
//              <button onClick = {()=>{
//                  dispatch({ type: 'ADD_ITEM', payload: newTodoItem})
//                  setNewTodoItem('');
//                     }} 
//              >Add Item
//                 </button>  
//         </div>

//     )
// }

// export default TodoForm;