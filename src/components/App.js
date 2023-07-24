import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  
  const handleCategoryChange = (category) => {
    if (category === "All") {
      setTasks(TASKS);
    } else {
      const filteredTasks = TASKS.filter((task) => task.category === category);
      setTasks(filteredTasks);
    }
  };

  const handleTaskFormSubmit = (task) => {
    setTasks([...tasks, task]);
  };

  const handleTaskDelete = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryChange={handleCategoryChange} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={tasks} onTaskDelete={handleTaskDelete} />
    </div>
  );
}

export default App;