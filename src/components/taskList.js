import React, { useState } from "react";
import { FiCheck,FiTrash } from "react-icons/fi";
import "./list.scss";

const TaskList = ({ taskList, onDeleteTask }) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleCompleteTask = (index) => {
    if (completedTasks.includes(index)) {
      setCompletedTasks(completedTasks.filter((i) => i !== index));
    } else {
      setCompletedTasks([...completedTasks, index]);
    }
  };

  return (
    <div className="task-list">
      <ul className="list pa0">
        {taskList.map((taskObj, index) => (
          <li
            key={index}
            className={`task-list-item ${
              completedTasks.includes(index) ? "completed" : ""
            }`}
            onClick={() => handleCompleteTask(index)}
          >
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={completedTasks.includes(index)}
                onChange={() => handleCompleteTask(index)}
              />
              <FiCheck className="checkmark-icon" />
            </label>
            <label className="task-label">{taskObj.task}</label>
            <div className="delete-icon" onClick={() => onDeleteTask(index)}>
              <FiTrash className="trash-icon"/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
