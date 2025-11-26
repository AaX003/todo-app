import { useState } from 'react';
import './Todo.css' // css file


function Todo() {

  const [tasks, setTasks] = useState([]); // task array
  const [task, setTask] = useState(""); // task name

  const [isComplete, setIsComplete] = useState(false); // completion status

  // adding a task
  const AddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { name: task.trim(), isComplete: false }]);
      setTask("");
      setIsComplete(false);
    }
  };

  // deleting a task
  const DeleteTask = (index) => {
    setTasks(tasks.filter((_, t) => t !== index));
  };

  // marking as complete 
  const MarkAsComplete = (index) => {
    const completedTasks = [...tasks];

    completedTasks[index].isComplete = !completedTasks[index].isComplete;
    setTasks(completedTasks);
  }

  // pressing "Enter" to add a task
  const PressEnter = (event) => {
    if (event.key === "Enter") {
      if (task.trim() !== "") {
        setTasks([...tasks, { name: task.trim(), isComplete: false}]);
        setTask("");
        setIsComplete(false);
      }
    }
  };

  return (
    <div className="todo-container">
      <header>
        <h2 className="header-title">
          To-Do List
        </h2>
        <p className="header-subtitle">
          Complete tasks using this simple to-do list
        </p>
      </header>

      <div className="input-container">
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} onKeyDown={PressEnter} placeholder="What's the plan?"/>
        <button className="add-btn" onClick={AddTask}>Add</button>
      </div>

      {tasks.length === 0 ? 
      <p className="no-task-msg">It's empty here...</p>
      :
      <div className="task-container">
        {tasks.map((t, idx) => (
          <div key={idx} className="task-card">
            <input type="checkbox" checked={t.isComplete} onChange={() => MarkAsComplete(idx)}/>

            <span style={{ textDecoration: t.isComplete ? "line-through" : "none", textDecorationColor: t.isComplete ? "black" : "none", textDecorationThickness: t.isComplete ? "2px" : "initial"}}>
              {t.name}
            </span>
            
            <button className="del-btn" onClick={() => DeleteTask(idx)}>X</button>
            
          </div>
        ))}
      </div>
      }
    </div>
  );
}

export default Todo;
