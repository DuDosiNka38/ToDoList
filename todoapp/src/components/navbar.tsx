import  { FC } from 'react'
import { useTypeSelector } from '../hooks/TypeHookSelector';
import { NavBar } from '../types/Components';
import './components.css'



const Navbar: FC<NavBar> = function() {

  const {task_list} = useTypeSelector(state => state.Task)
  return (
    <div className={'navbar'}>
      
      <div><h1 >Your To Do List</h1></div>
     
      <div><h1>Number of tasks: {task_list.length}</h1></div>  


    </div>
  )
}

export default Navbar