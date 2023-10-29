import React,{useState} from "react"; // import react library and the usestate from react package
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import {  faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';


function Task(){

    //initialize the use state
  const [toDo , setToDo] =useState([
    {"id":1 , "title": "Task 1" , "completed": false},
    {"id":2 , "title": "Task 2" , "completed": false}
  ]);

  // function to add task
  const addTask =()=> {
    if(newTask){
      let num = toDo.length +1;//calculates the new id for the task to be added
      let newEntry = { id:num, title: newTask}// new task entered is created as an object
      setToDo([...toDo, newEntry])//create a new array by copying the toDo and appending newEntry at the end
      setNewTask('')//clear input field
    }
  } 

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
            {/* display Todos */}
            {toDo
       .map((task,index) =>{
        return(
          <React.Fragment key={task.id}>

            <div className='col taskBg'> 
            <span className ="taskNumber">{index + 1}</span>
            <span className ="taskTest">{task.title}</span>  
            <div className='iconsWrap'>y
            <label>
                Complete?
                <input type="checkbox" 
                onChange={(e) => statusTask(task.id, e.target.checked)}
                className="check"  checked={task.completed}/>
               </label>

            </div>
            
            </div>
            
          </React.Fragment>
        )
       })
       }
            


        </div>

    )

}

export default Task;