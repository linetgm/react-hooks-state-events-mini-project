import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
    const [text, setText] = useState ("");
    const [category, setCategory] = useState ("Code")

    const handleSubmit = (e) => {
      e.preventDefault();
      const newTask = { text, category };
      onTaskFormSubmit(newTask);
      setText("");
    };
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value ={text} onChange={(event)=> 
          setText(event.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value ={category} onChange={(e) => 
        setCategory(e.target.value)}> 
          {categories.map((category, index) =>
            category !== "All" ? (
              <option key={index} value={category}>
                {category}
              </option>
            ) : null
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;