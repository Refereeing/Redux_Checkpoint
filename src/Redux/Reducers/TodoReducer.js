import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ADD_TASK, CHANGE_DONE, CHANGE_SAVETEXT } from '../Constants/action-types';


const initialState= {ListTodo:[
    {id: uuidv4(), description:"Time to master Redux", isDone:false},
    {id: uuidv4(), description:"Getting familiar with React Hooks", isDone:true},
    {id: uuidv4(), description:"Wandering in the woods", isDone:true},
    {id: uuidv4(), description:"Feeding my cute kitty", isDone:true},

]}

// reducer= pure function: it takes 2 parameters (state, action)
// action: type, payload

function TodoReducer(state=initialState, action) {
  const {type, payload}=action;

  switch (type){
    case ADD_TASK:
      //console.log ("redu",payload);
      return {
        ListTodo: [
          ...state.ListTodo, 
          {id:uuidv4(), description: payload , isDone:false},
        ],
      };

      case CHANGE_DONE:
        //console.log ("redu",payload);
        return {
        ListTodo:state.ListTodo.map((task) => (task.id ===payload) ? 
        {...task, isDone: !task.isDone} : task),
      };

      case CHANGE_SAVETEXT:
        console.log ("reduC",payload);

        return {
          ListTodo: state.ListTodo.map((task) => (task.id ===payload.id) ? 
          {...task, description:payload.modify} : task)
    }; 
    
    default: 
      return state;
  


}
}
export default TodoReducer;