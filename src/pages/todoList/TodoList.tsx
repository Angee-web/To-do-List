import { useEffect, useState } from "react";
import TodoListHeader from "./TodoListHeader";
import TodoListBody from "./ToDoListBody";

// define the Task interface 
interface Task {
  id: number;
  title: string;
  description: string;
  time: string;
  status: "Pending" | "In Progress" | "Completed";
}

const TodoList = () => {
  // define state for the tasks and load tasks from local storage or initialize as an empty array
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  // fetch the stored tasks from localStorage on first render
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    // check if there is tasks in storage and parse them
    if (storedTasks) {
      try {
        const parsedTasks = JSON.parse(storedTasks);
        setTasks(parsedTasks);
      } catch (e) {
        console.error("Error parsing JSON from localStorage:", e);
      }
    }
  }, []);

  // update the localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // define the addTask function to add task even when there is a previous tasks
  const addTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  // define the editTask function to edit a task
  const editTask = (updatedTask: Task) => {
    setTasks(
      // map through the tasks using the id and update the task with the updatedTask
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  // define the deleteTask function to delete a task using id
  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // define the toggleComplete function to toggle the status of a task
  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "Completed" ? "Pending" : "Completed",
            }
          : task
      )
    );
  };

  return (
    <div className="todo-list">
      <TodoListHeader onAddTask={addTask} />
      <TodoListBody
        tasks={tasks}
        onEditTask={editTask}
        onDeleteTask={deleteTask}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
};

export default TodoList;
