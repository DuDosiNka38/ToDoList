import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {AddTaskAction} from '../store/ListTaskReducer';
import { useTypeSelector } from '../hooks/TypeHookSelector';
import "../components/components.css"

const TaskForm = () => {
    const dispach = useDispatch()
    const {task_list} = useTypeSelector(state => state.Task)
    let id =  task_list.length
    const [name, Setaddname] = useState('')
    const [day, Setday] = useState('')
    const [month, Setmonth] = useState('')
    const [year, Setyear] = useState('')
    const [error, Seterror] = useState("")


    const add_task_list = () => {
        dispach(AddTaskAction(id, name, Number(day), Number(month),Number(year)))
        Setday('')
        Setaddname('')
        Setmonth('')
        Setyear('')
        Seterror('') }


        
  return (
    <div className={'Form'}>
        <input className={'Forminput'} placeholder='Title of ToDoList' value={name} onChange={event => Setaddname(event.target.value)}></input>
        <div className={'date'}>
        <input className={'Forminput'}  placeholder='Day' value={day} type="number" onChange={event => Number(event.target.value) > 31 || Number(event.target.value)  < 0 ? Seterror("Error, Try again") : Setday(event.target.value)}></input>

        <input className={'Forminput'} placeholder='Month' type="number" value={month} onChange={event => Number(event.target.value) > 12 || Number(event.target.value)  < 0 ? Seterror("Error, Try again") : Setmonth(event.target.value)}></input>

        <input className={'Forminput'} placeholder='year' type="number" value={year} onChange={event => Number(event.target.value) > 3000 || Number(event.target.value)  < 0 ? Seterror("Error, Try again") : Setyear(event.target.value)}></input>
        </div>

        <h1>{error}</h1>
       

      
        <button onClick={() => add_task_list()}>Add comment</button>
    </div>
  )
}

export default TaskForm