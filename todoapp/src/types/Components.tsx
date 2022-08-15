export interface NavBar{
    width?: string,
    height?: string,
    children?: React.ReactNode
}

export interface TasKItem{
    id: number,
    key?: number,
    body: string,
    index: number,
    deleteTask(id: number): void ,
    donetask(id: number): void ,
    state: string
    } 

    export interface TasKListItem{
        id: number,
        key?: number,
        name: string,
        index: number,
        delete_task_list(id: number): void ,
        Done_task_list_id(id: number): void ,
        date?: {d: number,m: number,y: number},
        state: string
        } 