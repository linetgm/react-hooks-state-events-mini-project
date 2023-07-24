import React from "react";

function Task({ task, onTaskDelete }) {
  const handleDelete = () => {
    onTaskDelete(task);
  };

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
export default Task;