import React from 'react'
import { Button} from 'react-bootstrap';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { changeDone } from '../../Redux/Actions/action';
import { changeSaveTask } from '../../Redux/Actions/action';


const Tasks = ({taskdetails, key }) => {
  
  const dispatch= useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //create a state for edit task text (cuz we have an interaction)
  const [modify, setModify] = useState(" ");

// buttons for functions
  const handleDone=() =>{
    dispatch (changeDone (taskdetails.id));
    //console.log(modify)
  }

  const handleModify=(e) =>{
    setModify (e.target.value);
    // console.log(modify);
  }

  //create a function to edit/save tasks
  const handleSaveTask=(e) =>{
    //console.log(modify);
    dispatch(changeSaveTask({id:taskdetails.id, modify}));
    // console.log(modify)
    handleClose();
  }

  return (
    <div className="tasksss">
        <div className='done-notdone'>
            <div style={{width:"400px",display:"flex", flexWrap:"wrap", textAlign:"justify", fontSize:"17px"}}>
              {taskdetails.description}
            </div>
            <div style={{display:"flex", flexDirection:"row",justifContent: "space-around", height:"30px", border: "solid 2px #3b3b97", borderRadius:"10px", marginTop:"3px"}}>
              {taskdetails.isDone ? (<Button style={{paddingTop:"1px", fontSize:"13px", fontWeight:"bold"}} variant="info" onClick={handleDone}>Done</Button>) 
              : (<Button style={{paddingTop:"1px", border:"transparent"}} variant="outline-danger" onClick={handleDone}><s>Undone</s></Button>)}
            </div>

            <Button style={{backgroundColor:"blue", color:"cyan", height:"30px", border: "solid 2px #3b3b97", borderRadius:"10px", paddingTop:"1px", marginTop:"3px", fontSize:"13px", fontWeight:"bold"}} variant="success" onClick={handleShow}>Edit</Button>
        </div>
     
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit task</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={1}
              defaultValue={taskdetails.description} 
              onChange={handleModify} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveTask}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Tasks