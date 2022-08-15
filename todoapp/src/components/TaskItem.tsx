import { FC } from 'react';
import "../components/components.css"
import { TasKItem } from '../types/Components';



const TaskItem: FC<TasKItem> = function({id, index,deleteTask,donetask,body,state}){

  return(  
    
<div className={state === "active" ? 'task' : 'task-black'}>
  
   <h1>{index}. {body}</h1>
 
   
   {state === "active" ? 
   <input type="checkbox" onChange={() => donetask(id)} className="checkbox"/>
   : 
   <input type="checkbox" onChange={() => donetask(id)} className="checkbox"  checked/>
   }
   

  <button className='' onClick={() => deleteTask(id)}>Delete</button> 
</div>

)
};

export default TaskItem;