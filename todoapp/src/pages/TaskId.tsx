
import { Link, useParams } from 'react-router-dom'
import { useTypeSelector } from '../hooks/TypeHookSelector'
import { ArrayTaskGet, Done, TaskArray } from '../asycSaga/ArrayGet'
import TaskItem from '../components/TaskItem'
import { useDispatch } from 'react-redux'
import { AddItemTaskAction, DeleteItemTaskAction, DoneItemTaskAction, SearchAction } from '../store/ListTaskReducer'
import { useState } from 'react'
import { Done_taskIn } from '../store/Function'

const TaskId = () => {
    const parems = useParams()
    const dispatch = useDispatch()
    const [body, Setbody] = useState('')
    const {task_list} = useTypeSelector(state => state.Task)
    const TaskArr = ArrayTaskGet(task_list, Number(parems.id))
 
    const listOfTask = TaskArray(TaskArr)


    const deleteTask = (id: number) => {  
        console.log(listOfTask)
        const DeleteTask = listOfTask.filter((e: any) => e.Taskid !== id)
        const idNumber = Number(parems.id) -1 ;
     return dispatch(DeleteItemTaskAction(DeleteTask,idNumber)) }

    const addtask = (body: string) => {  
        const DeleteTask = listOfTask.concat({TaskId: TaskArr.length+1, body: body, state: "active"})
        const idNumber = Number(parems.id) -1 ;
         Setbody("")
     return dispatch(AddItemTaskAction(DeleteTask,idNumber)) }


    const donetask = (id:number)=>{
         const ArrayTask = Done_taskIn(id, listOfTask)
         const idNumber = Number(parems.id) -1 ;
          dispatch(DoneItemTaskAction(ArrayTask,idNumber))}

  return (
    <div className={'TaskBlock'}>
     <Link to='/todolist'> Back to List </Link>
     <div>  
         <input className={'Forminput'} placeholder='Title of Task' value={body} onChange={event => Setbody(event.target.value)}></input>
         <button onClick={() => addtask(body)}>Add Task</button>
     </div>
   
    <h1>ToDo </h1> 
    <h1>{task_list[Number(parems.id)-1].name} </h1> 
    
    <div className={'task-block'}>
      {listOfTask.length ? listOfTask.map((el:any, index:number) => <TaskItem index={index + 1} key={el.Taskid} id={el.Taskid} body={el.body} deleteTask={deleteTask} donetask={donetask} state={el.state}/>) :
          <h1 className='EmptyField'>You don't have anything to do in this ToDoList</h1>
      }
    </div> 
   
  </div>
  )
}

export default TaskId