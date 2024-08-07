/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { MdDelete } from "react-icons/md";

interface TodoListBodyProps {
  todoData: any[];
  handleDelete: Function;
}

const TodoListBody = ({ todoData, handleDelete }: TodoListBodyProps) => {
  return (
    <div className="todoListBody">
      {todoData?.map((data, i) => (
        <div className="todoItem" key={i}>
          <p className="title">{data?.title}</p>
          <p className="time">{data?.time}</p>
          <select
            name="status"
            id=""
            className="status"
            defaultValue={data?.status}
          >
            <option value="Completed">Completed</option>
            <option value="Created">Created</option>
            <option value="Ongoing">Ongoing</option>
          </select>
          <p className="created_at">{data?.created_at.toLocaleString()}</p>
          <MdDelete
            color="red"
            className="deleteBtn"
            onClick={() => handleDelete(i)}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoListBody;