import React, { useState } from 'react';
import Task from './components/task.jsx';
import TaskForm from './components/taskForm.jsx';
import AllTasksButton from './components/allButton.jsx';
import CompletedTasksButton from './components/completedButton.jsx';
import PendingTasksButton from './components/pendingButton.jsx';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

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

  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true; 
  });

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Daily Planner</h1>
      <div className="container">
        <TaskForm onAddTask={addTask} />
        <h2>You have {tasks.filter(task => !task.completed).length} tasks remaining</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <AllTasksButton setFilter={() => setFilter("all")} />
          <CompletedTasksButton setFilter={() => setFilter("completed")} />
          <PendingTasksButton setFilter={() => setFilter("pending")} />
        </div>
      </div>
      <div className="task-list">
        {filteredTasks.map(task => (
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
