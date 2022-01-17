import {v4 as uuidv4} from "uuid";


const intialState = {tasks :[{id : uuidv4(), name :"first task", isDone : false}, {id : uuidv4(), name :"second task", isDone : false}]}
console.log(intialState);
const reducer = (state =intialState, {type, payload} )=>{
    switch (type) {
        case "add":
            
       return  ({tasks :[{id : uuidv4(), name :payload, isDone : false}, ...state.tasks]})  ;
       case "delete":
         return ({tasks :[...state.tasks].filter(tasks=>tasks.id !== payload)});
         case  "filter":
         return ("")
         case "done":
            return ({tasks :[...state.tasks].map(tasks=>tasks.id === payload? {...tasks, isDone: !tasks.isDone}: tasks)});
           case "update" :
              return ({tasks :[...state.tasks].map(tasks => tasks.id === payload.id? {...tasks, name : payload.name}: tasks )})
        default:
            return (state) ;
    }

}
export default reducer;
/* case "update":
                let newTask = [...state.tasks]
                let index =-1;
                for (let i = 0; i < newTask.length; i++) {
                    index++;
                    if(newTask[i].id === payload.id){
                        break;
                    }
                    
                }
                if(index!==-1){
                    newTask[index] = payload
                    return newTask;
                }*/