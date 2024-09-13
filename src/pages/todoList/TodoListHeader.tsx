import { useState } from "react";

// define the Task interface
interface Task {
  id: number;
  title: string;
  description: string;
  time: string;
  status: "Pending" | "In Progress" | "Completed";
}

// define the TodoListHeaderProps interface
interface TodoListHeaderProps {
  onAddTask: (task: Task) => void;
}

// define the TodoListHeader component
const TodoListHeader = ({ onAddTask }: TodoListHeaderProps) => {
  // define state for the title, description, time, and status
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // check if the title, description, and time are available
    if (title && description && time) {
      onAddTask({ title, description, time, status: status as "Pending" | "In Progress" | "Completed", id: Date.now() });
      setTitle("");
      setDescription("");
      setTime("");
      setStatus("Pending");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <h2>Add New Task</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        required
      />
      <input
        type="datetime-local"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoListHeader;
