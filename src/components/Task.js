import React from "react";

/**
 * TODO: implement the Task component
 * @function Task
 * @returns {React.Component} A <li> containing the task description and a checkbox to toggle completion
 */

  
export default function Task({ task, onDeleteTask, onToggleTask }) {

    const taskStyle = task.completed ? { textDecoration: "line-through" } : null;
  
    const handleCompleteTask = (event) => {
     
    onToggleTask(task.id, event.target.checked);
    };
  
    return (
     
      <li style={taskStyle}>
        {task.description}{" "}
        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        <input
            type="checkbox"
            checked={task.completed} 
            onChange={handleCompleteTask} 
         />
      </li>
     
    );
}
