import React , {useState} from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
const Update = ({task}) => {
    const dispatch = useDispatch();

    const [edit, setEdit] = useState(false);
    const [name, setName] = useState("")
    const funDelet= (id)=>{
        dispatch({type :"delete", payload : id})
      }
      const funcDone=(id)=>{
        dispatch({type :"done", payload: id})
      }
      const funcUpdate=(id, name)=>{
        if(name.trim())  {
          dispatch({type :"update", payload : {name,id}})}
      }
    return (
        <div>
            <div className="container" style={{ margin : "50px"}}>
          <div >
            
            <div className="col-md-12" >
              <hr />
              
              <div className="list-group" id="result">
                <div 
                  className="list-group-item list-group-item-info undone 'todoDiv'"
                  id="todolist"
                >
                  <div   style={task.isDone? { backgroundColor: "green"}: {task}}>
                 {edit? <input type= "text" className='foem-control' value={name}
                   onChange={(e)=> setName(e.target.value)}
                 /> :<p>{task.name}</p>}
                  <div className="pull-right del">
                  <Button variant="danger" onClick={()=> funDelet(task.id) }>Delete</Button>
                            </div>
                            <div className="pull-right done">
                  
                  <Button variant="success" onClick={()=>funcDone(task.id)}>done</Button>
                            </div>
                 
                  <div className="pull-right edit" >
                  <Button variant="primary" onClick={()=> {
                      funcUpdate(task.id, name)
                      if(edit){ setName(task.name)}
                    setEdit(!edit)}} >
                      {edit? "update" :"Edit"}</Button>

                   </div>
                   </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        </div>
    )
}

export default Update
