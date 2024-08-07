import { useState } from "react";
import TodoListHeader from "./TodoListHeader";
import TodoListBody from "./ToDoListBody";

const TodoList = () => {
  const [todoData, setTodoData] = useState([]);

  const handleDelete = (i: number) => {
    const todo = [...todoData];
    const newTodo = todo.filter((_, index) => index !== i);

    setTodoData(newTodo);
  };

  return (
    <div className="todoList">
      <TodoListHeader setTodoData={setTodoData} />
      <TodoListBody todoData={todoData} handleDelete={handleDelete} />
    </div>
  );
};

export default TodoList;