import { useState } from "react";
import { initialTask } from '../data/tasks';
import AddTask from "./AddTask";
import TaskList from "./TaskList";
 

const TaskMain = () => {
  const [tasks, setTasks] = useState(initialTask);

  const getNextId = (data) => {
    const maxId = data.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );
    return maxId + 1;
  };

  const handleTaskAdd = (text) => {
    setTasks([...tasks, { id: getNextId(tasks), text: text, done: false }]);
  };

  const handleChangeTask = (task) => {
    const nextTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });

    setTasks(nextTasks);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <>
      <AddTask onAdd={handleTaskAdd} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};

export default TaskMain;
