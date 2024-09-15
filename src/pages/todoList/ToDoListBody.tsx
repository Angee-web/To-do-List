import { useState } from "react";

// define the Task interface
interface Task {
  id: number;
  title: string;
  description: string;
  time: string;
  status: "Pending" | "In Progress" | "Completed";
}

// define the TodoListBodyProps interface
interface TodoListBodyProps {
  tasks: Task[];
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

// define the TodoListBody component
const TodoListBody = ({
  tasks,
  onEditTask,
  onDeleteTask,
  onToggleComplete,
}: TodoListBodyProps) => {
  
  // define state for the editing task
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  // define the handleEditChange function to handle the change event
  const handleEditChange = (
    // define the event type
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    // check if there is an editing task
    if (editingTask) {
      setEditingTask({ ...editingTask, [e.target.name]: e.target.value });
    }
  };

  // define the handleEditSubmit function to handle the submit event
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTask) {
      onEditTask(editingTask);
      setEditingTask(null);
    }
  };

  return (
    <div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.status.toLowerCase()}`}
          >
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due: {new Date(task.time).toLocaleString()}</p>
            <p>Status: {task.status}</p>
            <button onClick={() => onToggleComplete(task.id)}>
              Mark as {task.status === "Completed" ? "Incomplete" : "Completed"}
            </button>
            <button onClick={() => setEditingTask(task)}>Edit</button>
            <button
              onClick={() => {
                if (
                  window.confirm("Are you sure you want to delete this task?")
                ) {
                  onDeleteTask(task.id);
                }
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* editing card for when the edit button is clicked */}
      {editingTask && (
        <form onSubmit={handleEditSubmit} className="edit-form">
          <h2>Edit Task</h2>
          <input
            type="text"
            name="title"
            value={editingTask.title}
            onChange={handleEditChange}
            placeholder="Task Title"
            required
          />
          <textarea
            name="description"
            value={editingTask.description}
            onChange={handleEditChange}
            placeholder="Task Description"
            required
          />
          <input
            type="datetime-local"
            name="time"
            value={editingTask.time}
            onChange={handleEditChange}
            required
          />
          <select
            name="status"
            value={editingTask.status}
            onChange={handleEditChange}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button type="submit">Save Changes</button>
          <button type="button" onClick={() => setEditingTask(null)}>
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default TodoListBody;
