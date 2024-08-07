/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

interface TodoListHeaderProps {
  setTodoData: (data: any) => void;
}

const TodoListHeader = ({ setTodoData }: TodoListHeaderProps) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoTime, setTodoTime] = useState("");

  const handleSubmit = () => {
    const todo = {
      title: todoTitle,
      time: todoTime,
      status: "Created",
      created_at: new Date(),
    };

    setTodoData((prev: any) => [...prev, todo]);
  };

  return (
    <div className="todoListHeader">
      <input
        type="text"
        placeholder="Type your todo list here"
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <input type="time" onChange={(e) => setTodoTime(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TodoListHeader;