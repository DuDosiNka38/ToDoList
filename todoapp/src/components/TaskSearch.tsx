import  {  useState } from 'react'
import { useTypeSelector } from '../hooks/TypeHookSelector';
import { useSearchTask, useSortTask } from '../hooks/searchAndSort';
import "../components/components.css"


const TaskSearch= () => {
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const {task_list, sorted} = useTypeSelector(state => state.Task)
    useSearchTask(task_list,search,sorted)

useSortTask(sort,sorted)
 
  return (
    <div>
        <input className={'SearchInput'}
        placeholder='Search'
        value={search}
        onChange={event => setSearch(event.target.value)}/>
        <select value={sort}  onChange={event => setSort(event.target.value)}>
           <option disabled value="">Options</option>
           <option value="All">All</option>
           <option value="active">Active</option>
           <option value="completed">Сompleted</option>

        </select>
    </div>
  )
}

export default TaskSearch