import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  checkTodo,
  deleteTodo,
  filterActive,
  filterAll,
  filterCompleted,
} from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const { filtered } = useSelector((state) => state.task);
  const [input, setInput] = useState("");
  const [order, setOrder] = useState(1);

  const addTask = () => {
    if (input === "") {
      return;
    }
    const id = uuidv4();
    const data = {
      id,
      isChecked: false,
      title: input,
    };

    dispatch(addTodo(data));
    setInput("");
  };

  const handleEdit = (curr) => {
    setInput(curr.title);
    dispatch(deleteTodo(curr));
  };

  const handleOptions = (number) => {
    
    if (number === 1) {
      setOrder(1);
      dispatch(filterAll());
    }

    if (number === 2) {
      setOrder(2);
      dispatch(filterActive());
    }

    if (number === 3) {
      setOrder(3);
      dispatch(filterCompleted());
    }
  };
  return (
    <>
      <div className="container">
        <h1>ToDo</h1>
        <div className="todo-nav">
          <div className="children-wrapper" onClick={() => handleOptions(1)}>
            <div className="nav-childrens">All</div>
            <div
              className={
                order === 1
                  ? "child-bottom-border"
                  : "children-bottom-border-none"
              }
            ></div>
          </div>
          <div className="children-wrapper" onClick={() => handleOptions(2)}>
            <div className="nav-childrens">Active</div>
            <div
              className={
                order === 2
                  ? "child-bottom-border"
                  : "children-bottom-border-none"
              }
            ></div>
          </div>
          <div className="children-wrapper" onClick={() => handleOptions(3)}>
            <div className="nav-childrens">Completed</div>
            <div
              className={
                order === 3
                  ? "child-bottom-border"
                  : "children-bottom-border-none"
              }
            ></div>
          </div>
        </div>
        <hr className="line" />

        <div className="input-btn-wrapper">
          <input
            type="text"
            placeholder="add details"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addTask}>add</button>
        </div>
        <div className="tasks-container">
          {filtered &&
            filtered.map((curr) => {
              return (
                <div className="tasks" key={curr.id}>
                  <input
                    type="checkbox"
                    checked={curr.isChecked}
                    onChange={() => {
                      dispatch(
                        checkTodo({ ...curr, isChecked: !curr.isChecked })
                      );
                    }}
                  />
                  <div className="title">
                    <p className={curr.isChecked ? "active" : "unactive"}>
                      {curr.title}
                    </p>
                  </div>
                  <div className="btns-wrapper">
                    <div className="btn-edit" onClick={() => handleEdit(curr)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                        <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                      </svg>
                    </div>
                    <div
                      className="btn-dlt"
                      onClick={() => dispatch(deleteTodo(curr))}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-2 h-2"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
