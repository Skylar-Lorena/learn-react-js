import React,{useState} from "react"; // import react library and the usestate from react package
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import {  faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';


function Task(){

    //initialize the state
  const [toDo , setToDo] =useState([
    {"id":1 , "title": "Task 1" , "completed": false},
    {"id":2 , "title": "Task 2" , "completed": false}
  ]);
    return(
        <div className="container App">
            <h1>TO-DO list</h1>

             {/* add task */}
     <div className='row'> 
      <div className='col'>
        <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
          className='form-add'/>
      </div>
      <div className='col-auto'> 
        <button onClick={addTask} className='buttons'> 
          Add Task
        </button>
      </div>
     </div>
            
            


        </div>

    )

}

export default Task;