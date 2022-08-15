export enum TaskActionTypes {
    ADD_All_TASKS = "ADD_All_TASKS",
    FETCH_TASKS = "FETCH_TASKS",
    ADD_TASK_LIST= "ADD_TASK_LIST",
    DELETE_TASK_LIST = "DELETE_TASK_LIST",
    DONE_TASK_LIST = "DONE_TASK_LIST",
    ADD_TASK = "ADD_TASK",
    DELETE_TASK = "DELETE_TASK",
    DONE_TASK = "DONE_TASK",
    SEARCH="SEARCH",
    SORTED_TASK_LIST ="SORTED_TASK_LIST"
   }
 
  export interface Task{
    task_list: any[],
    sorted: any[],
    loading: boolean,
    error: null | string
    
}
   interface SEARCH {
       type: TaskActionTypes.SEARCH;
       payload: any[]
   }

   interface ADD_All_TASKS {
    type: TaskActionTypes.ADD_All_TASKS;
    payload: any[]
}

  interface ADD_TASK_LIST {
    type: TaskActionTypes.ADD_TASK_LIST;
    payload: { id: number,
        name: string,
        task: any[],
        date: {d: number,m: number,y: number }
        state: boolean
    }
}

   interface DELETE_TASK_LIST {
       type: TaskActionTypes.DELETE_TASK_LIST;
       payload: number
   }

   interface SORTED_TASK_LIST {
    type: TaskActionTypes.SORTED_TASK_LIST;
    payload: string
}
   interface DONE_TASK_LIST {
       type: TaskActionTypes.DONE_TASK_LIST;
       payload: any[]}
   
    
       interface ADD_TASK  {
           type: TaskActionTypes.ADD_TASK;
           payload: any
       }
       interface DELETE_TASK{
           type: TaskActionTypes.DELETE_TASK;
           payload: any}
          
           interface DONE_TASK {
               type: TaskActionTypes.DONE_TASK;
               payload: any
           }


  export  type TaskAction = ADD_TASK_LIST | 
  DELETE_TASK_LIST | DONE_TASK_LIST | ADD_TASK | DELETE_TASK | DONE_TASK | ADD_All_TASKS | SEARCH | SORTED_TASK_LIST




 export interface IAddAllTaskAction{
    ToDoList: any
}