import styled from "styled-components";
import TodoList from "./pages/todoList/TodoList";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;

  .todoList {
    background-color: skyblue;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .todoListHeader {
    display: flex;
    gap: 12px;

    input {
      padding: 12px;
      border-radius: 8px;
      border-color: 1px solid #eaeaea;
      width: 300px;
    }

    button {
      padding: 12px;
      border-radius: 8px;
      border: 1px solid #eaeaea;
      background-color: skyblue;
    }
  }

  .todoListBody {
    .todoItem {
      display: flex;
      justify-content: space-between;
      border: 1px solid green;
      padding: 10px;
      align-items: center;
      border-radius: 8px;

      .title {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
`;

const App = () => {
  return (
    <>
      <Wrapper>
        <TodoList />
      </Wrapper>
    </>
  );
};

export default App;