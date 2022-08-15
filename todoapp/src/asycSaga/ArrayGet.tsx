
export const Arrayget= (arr:any ) => {
const array = arr.map((el:any) => el.ToDoList)
const taskArr = []
let num = 1;
for(let i = 0; i < array.length; i++){
    let arr = array[i]
    for(let j = 0; j < arr.length; j++){
        arr[j].id = num++;
        taskArr.push(arr[j])
    }
}
console.log(taskArr);

return taskArr
}

export const TaskArray= (TaskArr: any[]) =>{
    const taskarray:any = []
    for(let i = 0; i < TaskArr.length; i++){
       let arr = TaskArr[i]
       for(let j = 0; j < arr.length; j++){
           taskarray.push(arr[j])
       }
   } return taskarray
  }

export const ArrayTaskGet= (arr:any, id:number ) => {
    console.log(arr);
    const array = arr.filter((el:any) => el.id === id)
    console.log(array);
    const taskArr = array.map((el:any) => el.task);

     console.log(taskArr);
    
    return taskArr
    }

    export const DeleteTaskGet= (arr:any[], id:number, taskArr: any[] ) => {
        let Id = id - 1;
        arr[Id].task=taskArr
 
        return arr
        }



  
    export const Done= (arr:any ) => {
        const array = arr.filter((el:any) => el.s === true);
        const Arr =  arr.filter((el:any) => el.s === false);
        const TaskArr = []
        const Task = []
        TaskArr.push(array)
        TaskArr.push(Arr)
        for(let i = 0; i < TaskArr.length; i++){
            let arr = TaskArr[i]
            for(let j = 0; j < arr.length; j++){
                Task.push(arr[j])
            }
        }
           return Task 

    }




