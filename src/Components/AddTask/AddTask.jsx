import React from 'react'
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { addTask } from '../../Redux/Actions/action';
import { useDispatch } from 'react-redux';

const AddTask = () => {
  const dispatch= useDispatch();
  const [NewTask, setNewTask]= useState (" ");

  const handleChange= (e) => {
      setNewTask (e.target.value);
      //console.log(NewTask)
  };
  
  const handleSubmit=() => {
    dispatch (addTask (NewTask))
    //console.log("subm",NewTask);
    setNewTask ("");
  };



  return (
    <div className='add-task' style={{width:"500px"}}>
        <input style={{ width:"400px", height:"40px", borderRadius:"10px", background:"#61ccd1", color:"#111104", border:"solid 1px blue"}} type="text" placeholder="enter new task here" 
        onChange={handleChange} value={NewTask}/>
        <Button variant="warning" onClick={handleSubmit} style={{ width:"100px", height:"40px", borderRadius:"20", border:"solid 1px blue", marginTop:"-4px", backgroundColor:"yellow", fontFamily:"cambria"}}>Add task</Button>

    </div>
  )
}

export default AddTask;