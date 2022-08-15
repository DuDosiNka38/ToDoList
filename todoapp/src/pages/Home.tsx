
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import '../components/components.css'
import { AsycFetchTask } from "../store/ListTaskReducer";


const Home = function(){
    const dispatch = useDispatch();
    useEffect(() => { dispatch(AsycFetchTask()) }, [])
  return(
   <div className={'Home'}>
   <h1>ToDoList</h1>
   <h2><Link to='/todolist'>Show My ToDoList</Link></h2>
    
   </div>
)
};

export default Home;