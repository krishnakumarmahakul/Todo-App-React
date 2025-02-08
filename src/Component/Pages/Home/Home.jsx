import React, { useState, useEffect } from "react";
import style from "./Home.module.css";

const Home = () => {
    const [tasks, setTasks] = useState([]);

    // Load tasks from local storage when component mounts
    useEffect(() => {
      const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      setTasks(storedTasks);
    }, []);
  
    // Save tasks to local storage whenever they change
    useEffect(() => {
      if (tasks.length > 0) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
    }, [tasks]);
  
    // Toggle task completion
    const toggleComplete = (index) => {
      const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
    };
  
    // Edit a task
    const editTask = (index) => {
      const newTaskText = prompt("Edit your task:", tasks[index].text);
      if (newTaskText !== null && newTaskText.trim() !== "") {
        const updatedTasks = tasks.map((task, i) =>
          i === index ? { ...task, text: newTaskText } : task
        );
        setTasks(updatedTasks);
      }
    };
  
    // Delete a task
    const deleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };

  return (
    <div className={style.homeContainer}>
      <h2>Your Tasks</h2>
      <ul className={style.taskList}>
        {tasks.map((task, index) => (
          <li key={index} className={`${style.taskItem} ${task.completed ? style.completed : ""}`}>
            <span>{task.text}</span>
            <div className={style.taskButtons}>
              <button onClick={() => toggleComplete(index)} className={style.completeButton}>
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => editTask(index)} className={style.editButton}>Edit</button>
              <button onClick={() => deleteTask(index)} className={style.deleteButton}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
