import React, { useState } from 'react';
import Task from './components/Task';
import TaskForm from './components/taskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Daily Planner</h1>
      <div className="container">
        <TaskForm onAddTask={addTask} />
        <h2>You have {tasks.filter(task => !task.completed).length} tasks remaining</h2>
      </div>
      <div className="task-list">
        {tasks.map(task => (
          <Task 
            key={task.id} 
            task={task} 
            onToggle={toggleTask} 
            onDelete={deleteTask} 
          />
        ))}
      </div>
    </div>
  );
};

export default App;