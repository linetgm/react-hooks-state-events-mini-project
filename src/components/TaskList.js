import React from "react";
import Task from "./Task"

function TaskList({ tasks, onTaskDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={index} task={task} onTaskDelete={onTaskDelete} />
      ))}
    </div>
  );
}

export default TaskList;