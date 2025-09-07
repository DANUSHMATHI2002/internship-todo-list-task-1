import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      // update task
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      // add new task
      setTasks([...tasks, task]);
    }
    setTask("");
  };

  const handleDelete = (index) => {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
  };

  const handleEdit = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div className="container">
      <h1>TODO LIST</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="add item . . ."
        />
        <button onClick={handleAdd}>{editIndex !== null ? "Update" : "Add"}</button>
      </div>

      <ul className="task-list">
        {tasks.map((t, index) => (
          <li key={index} className="task-item">
            <span>{t}</span>
            <div className="actions">
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleEdit(index)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
