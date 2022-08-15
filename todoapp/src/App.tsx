import Navbar from './components/navbar';
import './App.css';
import TaskList from './pages/TaskList';
import {BrowserRouter,Routes, Route,Navigate} from "react-router-dom";
import TaskId from './pages/TaskId';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
     <Navbar/>
   
     
     <BrowserRouter>
  <Routes>

    <Route path='' element={<Home/>} />
    <Route path='/todolist' element={<TaskList/>} />
    <Route path='/:id' element={<TaskId/>}/>

  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
