import React,{useState} from 'react'
import {useSelector} from "react-redux";
import Update from './Update';


const TaskList = () => {
  const tasks = useSelector(state => state.reducer.tasks)
 
   const [filter, setFilter] = useState("All");
 return(
  <div>
  <div style={{display :"flex", justifyContent:"center", marginTop : "10px" }}>
    <span className='sp' onClick={()=> setFilter('Done')}>Done</span>
    <span className='sp' onClick={()=> setFilter('NotDone')}>NotDone</span>
    <span className='sp' onClick={()=> setFilter('All')}>All</span>
  </div>
      {
      (filter=== "Done"? tasks.filter(task=> task.isDone === true): 
      filter=== "NotDone" ?tasks.filter(task=> task.isDone === false) : tasks).map((task,i)=>{
         return (
          <div key={i}>
          <Update task={task}/>
        </div>
        )

      })}
  </div>)
   
}

export default TaskList
