import React, { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";

const initialTasks = [
  { id: 1, description: "Homework", completed: false },
  { id: 2, description: "Project", completed: true },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);



  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleCompleteTask = (id,updatedcompleteStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id 
          ? { ...task, completed: updatedcompleteStatus } 
          : task 
      )
    );
  };
  

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1>Task Tracker</h1>
      <Form onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks} 
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleCompleteTask}
      />

    </div>
  );
}

export default App;
