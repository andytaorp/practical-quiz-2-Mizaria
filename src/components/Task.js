import React from "react";

export default function Task({ task, onDeleteTask, onToggleTask }) {

    const taskStyle = task.completed ? { textDecoration: "line-through" } : null;

   
    const handleCompleteTask = (event) => {
        onToggleTask(task.id, event.target.checked); 
    };

    return (
        <li style={taskStyle}>
            {task.description}{" "}
            <button
                aria-label={`Delete ${task.description}`} 
                onClick={() => onDeleteTask(task.id)} 
            >
                Delete
            </button>
            
            
            <input
                type="checkbox"
                checked={task.completed} 
                onChange={handleCompleteTask} 
            />
        </li>
    );
}

