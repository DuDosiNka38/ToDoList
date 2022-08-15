import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypeSelector } from '../hooks/TypeHookSelector';
import {DeleteTaskAction,DoneTaskAction, SearchAction } from '../store/ListTaskReducer';
import TaskListItem from "../components/TaskListItem"
import "../components/components.css"
import { Done } from '../asycSaga/ArrayGet';
import { Done_task } from '../store/Function';
import { Link } from 'react-router-dom';
import TaskForm from '../components/TaskFormList';
import TaskSearch from '../components/TaskSearch';



const TaskList: FC = () => {
const dispatch = useDispatch();

const {loading, task_list} = useTypeSelector(state => state.Task)
useEffect(() => { dispatch(SearchAction(task_list)) }, [])

const delete_task_list = (id: number) => {
 dispatch(DeleteTaskAction(id))
}

const Done_task_list_id = (id:number)=>{
  const ArrayTask = Done_task(id, task_list)
  const DoneArrayTask= Done(ArrayTask)
  dispatch(DoneTaskAction(DoneArrayTask))
}



  return (
    <div className={'TaskBlock'}>
    <div> <Link to='/'> Back Home </Link></div>
     <TaskForm/>
     <TaskSearch/>
    <h1>ToDoList</h1> 
    <div className={'task-block'}>
      {loading ? <h1>Loading...</h1> : task_list.length ? task_list.map((el, index) => <TaskListItem index={index + 1} id={el.id} name={el.name} state={el.state}
          delete_task_list ={delete_task_list}  Done_task_list_id ={Done_task_list_id}  date = {el.date} />) :
          <h1 className='EmptyField'>You don't have anything to do</h1>
      }
    </div> 
   
  </div>
  )
}

export default TaskList