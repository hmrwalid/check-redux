import React,{useState} from "react";
import {Modal,Button,Form} from "react-bootstrap" ;
import {useDispatch} from "react-redux";
const AddTask = () => {
  const dispatch = useDispatch()
       const [newTask, setNewTask] = useState('');
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const addFunc =()=>{
        if(newTask.trim()){
          dispatch ({type:"add", payload : newTask})
          handleClose();
        }
      }
 
    
    return(
        <div className="Add">
          <Button variant="primary" onClick={handleShow}>
            Add Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
          <Form>
       <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control type="text" required onChange={e=> setNewTask(e.target.value)} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  
          </Form>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addFunc}  >
            Add task
          </Button>
        </Modal.Footer>
      </Modal>
          
    </div>

    )
}

export default AddTask


/*<div className="col-md-2">
<button style={{marginLeft : "50%"}}
  type="button"
  className="btn btn-primary btn-block"
  id="btn_add"
>
  ADD TASK
</button>
</div>*/