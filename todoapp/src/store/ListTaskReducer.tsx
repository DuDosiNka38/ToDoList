import { Arrayget} from '../asycSaga/ArrayGet';
import {TaskAction, Task, TaskActionTypes, IAddAllTaskAction} from '../types/taskreducer'
import { TaskDelete } from './Function';

const Tasks: Task = {
    task_list: [],
    sorted: [],
    loading: true,
    error: null
}


export const TaskReducer = (state = Tasks, action: TaskAction): Task => {
    switch (action.type) {
        case TaskActionTypes.ADD_All_TASKS:
            return {...state,loading: false, task_list: Arrayget(action.payload), sorted:  Arrayget(action.payload)};

        case TaskActionTypes.ADD_TASK_LIST:
            return {...state, loading: false, error: null, task_list: [...state.task_list, action.payload], sorted: [...state.sorted, action.payload]};

        case TaskActionTypes.DELETE_TASK_LIST:
            return {...state, loading: false, error: null, task_list:  [...state.task_list.filter(event =>  event.id !== action.payload)], sorted: [...state.sorted.filter(event =>  event.id !== action.payload)] };

         case TaskActionTypes.SORTED_TASK_LIST:
                return {...state, loading: false, error: null, task_list:  [...state.task_list.filter(event =>  event.state === action.payload )]}

        case  TaskActionTypes.DONE_TASK_LIST:
            return {...state, loading: false, error: null, task_list: [...state.task_list.filter(event =>  action.payload)], sorted: [...state.sorted.filter((event:any) =>  action.payload)] };

        case TaskActionTypes.SEARCH:
                return {...state, loading:false, error: null, task_list:  action.payload};

        case TaskActionTypes.DELETE_TASK:
                return {...state, loading: true, error: null, task_list: TaskDelete(state.task_list, action.payload.Arr, action.payload.id)};
                
        case  TaskActionTypes.DONE_TASK:
                return {...state, loading: true, error: null, task_list: TaskDelete(state.task_list, action.payload.Arr, action.payload.id)};

        case  TaskActionTypes.ADD_TASK:
                    return {...state, loading: true, error: null, task_list: TaskDelete(state.task_list, action.payload.Arr, action.payload.id)};

        default:
            return state;
    }
}


export const AddAllTaskAction = (payload: IAddAllTaskAction) => ({type: TaskActionTypes.ADD_All_TASKS, payload: payload})

export const AsycFetchTask = () => ({type: TaskActionTypes.FETCH_TASKS})

export const DeleteTaskAction = (id:number) => ({type: TaskActionTypes.DELETE_TASK_LIST, payload: id})

export const AddTaskAction=(id: number,name: string,day: number,month:number,year:number) => (
    {type:TaskActionTypes.ADD_TASK_LIST, payload: {
    id: id + 1, name: name, task: [], date: {d: day, m: month, y: year}, state: "active"}})

export const SortedTaskAction = (payload: string) => ({type: TaskActionTypes.SORTED_TASK_LIST, payload: payload})

 export const SearchAction = (payload: any[]) => ({type: TaskActionTypes.SEARCH, payload: payload})
 export const DoneTaskAction = (payload: any[]) => ({type: TaskActionTypes.DONE_TASK_LIST, payload: payload})

 export const DeleteItemTaskAction = (Arr: any[], id: number) => ({type: TaskActionTypes.DELETE_TASK, payload:{id: id, Arr: Arr}})
 export const DoneItemTaskAction = (Arr: any[], id: number) => ({type: TaskActionTypes.ADD_TASK, payload:{id: id, Arr: Arr}})
 export const AddItemTaskAction = (Arr: any[], id: number) => ({type: TaskActionTypes.ADD_TASK, payload:{id: id, Arr: Arr}})