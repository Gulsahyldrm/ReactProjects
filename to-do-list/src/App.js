import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState(""); 

  const addTask = () => {
    if (newTask.trim() === "") return; 
    setTasks([...tasks, newTask]); 
    setNewTask("");
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Görev ekle..."
      />
      <button onClick={addTask}>Ekle</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
