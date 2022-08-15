import { AddAllTaskAction} from "../store/ListTaskReducer"
import { TaskActionTypes, IAddAllTaskAction } from "../types/taskreducer"
import {put, takeEvery, call} from 'redux-saga/effects' 

import axios from "axios";


export async function fetchUsers(){
   const response: any = await axios.get('https://62f65716612c13062b4c42a1.mockapi.io/ToDoApp/ToDoList')
   return  response.data
}


function* WorkerTask(){ 
const data:IAddAllTaskAction  = yield call(fetchUsers)
yield put(AddAllTaskAction(data))
}


export function* WatcherTask(){
  yield takeEvery(TaskActionTypes.FETCH_TASKS, WorkerTask)
}