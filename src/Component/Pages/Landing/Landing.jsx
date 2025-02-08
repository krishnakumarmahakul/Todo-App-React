import React, { useState, useEffect } from "react";
import style from "./Landing.module.css";

const Landing = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]); 


  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);


  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);


  const addTask = () => {
    if (task.trim() !== "") {
      const newTask = { text: task, completed: false };
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
      setTask("");
    }
  };


  

  return (
    <>
      <div className={style.LandingMainContainer}>
        <div className={style.landingContainer}>
          <div className={style.head}>
            <div className={style.taskInput}>
              <input
                type="text"
                placeholder="Add a new task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className={style.inputField}
              />
              <button onClick={addTask} className={style.addButton}>
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
