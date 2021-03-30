import { useState } from "react";
import "./App.css";
const ModernTodo = () => {
  const [currentTask, setcurrentTask] = useState("");
  const [tasks, settasks] = useState([]);
  const [doneCounter, setdoneCounter] = useState(0);
  const handleOnChange = (e) => {
    setcurrentTask(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (currentTask.trim().length !== 0)
      settasks(tasks.concat(currentTask.trim()));
    setcurrentTask("");
  };

  const handleStrikeThroughOnClick = (i) => {
    document.getElementById(i).classList.toggle("task-item");
    if (document.getElementById(i).classList.contains("task-item"))
      setdoneCounter(doneCounter + 1);
    else setdoneCounter(doneCounter - 1);
  };
  return (
    <div>
      ToDo App:
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={currentTask}
          onChange={handleOnChange}
        ></input>
        <button onClick={handleOnSubmit}>Add</button>
      </form>
      <p>
        {tasks.length - doneCounter} tasks remaining out of {tasks.length} tasks
      </p>
      <ul>
        {tasks.map((task, i) => (
          <li id={i} onClick={() => handleStrikeThroughOnClick(i)}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModernTodo;
