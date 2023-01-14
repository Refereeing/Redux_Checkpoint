import React from 'react'
import { useSelector } from 'react-redux';
import Tasks from "../Tasks/Tasks";
import { Button } from 'react-bootstrap';
import { useEffect , useState} from 'react';
import { useDispatch } from 'react-redux';
import { changeDone } from '../../Redux/Actions/action';
//the state= read only
//use the hook useSelector() to display the state = TodoReducer
//define our path with Redux devtools (state --> TodoReducer --> ListTodo)

const ListTask = () => {
  
  const dispatch = useDispatch ()
  const toDoList = useSelector ((state) => state.TodoReducer.ListTodo);
  //console.log(toDoList)
  
  const [list, setList]= useState (toDoList);

  const [done, setDone]= useState (false);
  const [notDone, setNotDone]= useState (false);

  //console.log(list)

// filtring tasks
const handleList =() => {
  if (done ===true){
    setList (list.filter((task)=>
    {
        return task.isDone === true;
      }
    ));
  } else if (notDone===true) {
    setList(list.filter((task)=>
    {
        return task.isDone === false;
      }));
  }
   //else {
   //  setList (list.filter((task)=> 
  //  task.isDone ===false
    // ));
  
  // }
  };


useEffect (()=>{
  setList (toDoList);
  handleList();
}, [done, notDone, toDoList]);

const handleDone =() => {
setDone (true);
setNotDone (false);

};
const handleNotDone =() => {
  setDone (false);
  setNotDone (true);
  
};

//reset: brings all tasks false
// 
const handleReset =() => {
  setDone (false);
  setNotDone (false);

//add dispatch to replace the else of the if condition
  dispatch (changeDone());
  
};
    return (
    // {} map each task in a single map
    //using map () method: create a new array in which every element 
    //is processed with the callback function --> mapping: to extraxt data
    //each task take {tasdetails as props}
    // destructuring in Tasks component

    <div>
      <div className="filter-btn">
          <Button style={{fontSize:"12px", fontWeight:"bold", color:"white"}} variant="outline-primary" onClick={handleDone}>{" "}Filter_Done{" "}</Button>
          <Button style={{fontSize:"12px", fontWeight:"bold", color:"white"}} variant="outline-primary" onClick={handleNotDone}>{" "}Filter_notDone{" "}</Button>
          <Button style={{fontSize:"12px", fontWeight:"bold", color:"white"}} variant="outline-primary" onClick={handleReset}>Reset</Button>
      </div>
      <div className="list-task">
        {list.map((taskdetails, key) => (<Tasks taskdetails={taskdetails} 
         key={key}/>))}
      </div>
    </div>
  );
  }
export default ListTask;