import { FC } from 'react';
import "../components/components.css"
import  {useNavigate} from "react-router-dom";
import { TasKListItem } from '../types/Components';


const TaskListItem: FC<TasKListItem> = function({id, index, delete_task_list, Done_task_list_id,name,date,state}){
  const param = useNavigate()
  let ID ="/ " + id;

  return(  
<div className={state === "active" ? 'task' : 'task-black'}>
  
   <h1 >{index}. {name}</h1>
    {date ? <h2>Until {date.d}/{date.m}/{date.y}</h2> :
    <h2></h2>}

      <button className='' onClick={() => param(ID)}>See more</button>
   
   {state === "active" ? 
   <input type="checkbox" onChange={() => Done_task_list_id(id)} className="checkbox"/>
   : 
   <input type="checkbox" onChange={() => Done_task_list_id(id)} className="checkbox"  checked/>
   }
   

  <button className='' onClick={() => delete_task_list(id)}>Delete</button>
</div>

)
};

export default TaskListItem;