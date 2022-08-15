import {useMemo} from "react";
import { useDispatch } from "react-redux";
import { SearchFunction } from "../store/Function";
import {  SearchAction, SortedTaskAction } from "../store/ListTaskReducer";



export const useSearchTask = (Tasks: any, search: string, sorted: any) => {
    let dispatch= useDispatch()
    const sortedAndSearchedTasks = useMemo(() => {
        if(search){
     let arr = SearchFunction(search, Tasks)
       return  dispatch(SearchAction(arr))
     }else{ return dispatch(SearchAction(sorted))}

    }, [search])

    return sortedAndSearchedTasks ;
}


export const useSortTask = ( sort: string, sorted: any) => {
  let dispatch= useDispatch()
  const selectedSort = (sort: string, sorted: any[])=>{
    if(sort === "All"){
      console.log(sorted)
      dispatch(SearchAction(sorted))
    }if(sort === "active" || sort === "completed"){
      dispatch(SearchAction(sorted))
      dispatch(SortedTaskAction(sort))}
   }
   let SortedTask = useMemo(()=>{
      selectedSort(sort, sorted)
    },[sort])
  

  return SortedTask ;
}