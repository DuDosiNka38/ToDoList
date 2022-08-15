



export function SearchFunction(string: string, arr: any[]){  
if(string){

    return  arr.filter(event => event.name.toLowerCase().includes(string))
}else{
    return arr
}



}




export function TaskDelete(Arr: any[], arr: any[], id: number){  
   Arr[id].task = arr;
   console.log(Arr)
  return Arr
}

export const Done_task= (id: number, arr: any[]) => {
    for(let i = 0; i < arr.length; i++){
      if(arr[i].id === id){
        if(arr[i].state === 'active'){
          arr[i].state = 'completed';
        }
         else{arr[i].state = 'active';}
      }}
       return arr 
}
export const Done_taskIn= (id: number, arr: any[]) => {
  for(let i = 0; i < arr.length; i++){
    if(arr[i].Taskid === id){
      if(arr[i].state === 'active'){
        arr[i].state = 'completed';
      }
       else{arr[i].state = 'active';}
    }}
     return arr 
}




