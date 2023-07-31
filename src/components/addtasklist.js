import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import './addtask.scss';

const AddTaskList = ({ onAddTask }) => {
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userInput.trim() !== '') {
      onAddTask(userInput);
      setUserInput('');
    }
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <div className="input-button-container">
        <input
          type="text"
          id="taskInput"
          onChange={handleInputChange}
          placeholder="Add a new task"
          value={userInput}
        />
        <button type="submit">
          <FiPlus className="plus-icon" />
        </button>
      </div>
    </form>
  );
};

export default AddTaskList;
