/* eslint-disable no-unused-vars */

import { useState } from "react";

/* eslint-disable react/prop-types */
const Task = ({ task, onChangeTask, onDeleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            onChangeTask({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) =>
            onChangeTask({
              ...task,
              done: e.target.checked,
            })
          }
        />
        {taskContent}
        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      </label>
    </li>
  );
};

export default Task;
