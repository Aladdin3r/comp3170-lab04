import React from 'react';

const Task = ({ task, onToggle, onDelete }) => {
  return (
    <div className="task" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => onToggle(task.id)} 
      />
      <h3 style={{ margin: '0 10px', textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </h3>
      <button onClick={() => onDelete(task.id)} style={{ marginLeft: 'auto', padding: '5px 10px' }}>
        Remove
      </button>
    </div>
  );
};

export default Task;