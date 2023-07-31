import React, {useState} from "react";
import AddTaskList from "../components/addtasklist";
import TaskList from "../components/taskList";
import './todolist.css';
import 'tachyons';

const ToDoList = () =>{
    const [taskList,setTaskList] = useState([]);

    const handleTaskList = (task) => {
        setTaskList([...taskList,{task,isCompleted:false}]);
    }

    const handleDeleteTask = (index) => {
        const updatedList = taskList.filter((_,i) => i!== index);
        setTaskList(updatedList);
    }


    return(
        <div className="tc">
            <h1>To Do List</h1>
            <p>YOUR DAILY DAY TO DAY TASKS MANAGER APP !!</p>
            <AddTaskList onAddTask={handleTaskList}/>
            <TaskList 
                taskList={taskList} 
                onDeleteTask={handleDeleteTask} 
            />
        </div>
    )
}

export default ToDoList;