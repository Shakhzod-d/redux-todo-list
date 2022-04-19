import React from "react";
import {
  deleteItemAction,
  editItemAction,
  pickAnItemAction,
} from "../Store/Actions/ActionCreater";

import "./todo.css";

const Todo = ({ isDark, todos, dispatch }) => {
  const deleteItem = (id) => {
    dispatch(deleteItemAction(id));
  };
  const editItem = (id) => {
    dispatch(editItemAction(id));
  };
  const pickAnItem = (id) => {
    dispatch(pickAnItemAction(id));
  };
  let darkMode = {
    backgroundColor: isDark ? "#FFFFFF" : "#25273D",
    color: isDark ? "#494C6B" : "#C8CBE7",
  };
  // console.log(todos);

  return (
    <>
      {todos.map((item) => {
        const { inputText, id, completed } = item;
        return (
          <li className="childLI" style={darkMode} key={id}>
            <span
              className={completed ? `isDoneTodo` : null}
              onClick={() => pickAnItem(id)}
            >
              {inputText}
            </span>
            <div className="btnContainer">
              <button
                className={"btn btn-outline-success btn-sm m-2"}
                onClick={() => editItem(id)}
              >
                edit
              </button>
              <button
                className={"btn btn-outline-danger btn-sm"}
                onClick={() => deleteItem(id)}
              >
                delete
              </button>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default Todo;
