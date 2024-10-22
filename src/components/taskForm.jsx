import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      onAddTask(taskTitle.trim());
      setTaskTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', marginBottom: '20px' }}>
      <input 
        type="text" 
        value={taskTitle} 
        onChange={(e) => setTaskTitle(e.target.value)} 
        placeholder="Type in New Task..." 
        style={{ flexGrow: 1, marginRight: '10px', padding: '8px' }}
      />
      <button type="submit" style={{ padding: '8px 12px' }}>Add Task</button>
    </form>
  );
};

export default TaskForm;