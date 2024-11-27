import React, { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (description.trim() === "") {
      alert("Task description cannot be empty.");
      return;
    }

    const newTask = {
      id: Date.now(), 
      description: description.trim(),
      completed: false,
    };

    onAddTask(newTask); 
    setDescription(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        placeholder="Enter task description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
