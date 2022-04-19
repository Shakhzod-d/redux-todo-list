import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { IoMoonOutline } from "react-icons/io5";
import { BsSun } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import Todo from "./components/Todo";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  addTodoAction,
  isDarkToggleAction,
  clearCompletedAction,
  isActiveToggleAction,
  isCopletedToggleAction,
  getAllTodosAction,
} from "./Store/Actions/ActionCreater";
import { Strings } from "./utils/Strings";

function App() {
  const state = useSelector((state) => state);
  const todos = state.showTodoItems;
  const isDark = state.isDark;
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const classNameRef = useRef("");

  const newSingleTodoItem = {
    inputText,
    id: Date.now(),
    completed: false,
    isEditing: false,
  };
  const addTodo = () => {
    if (newSingleTodoItem.inputText.length >= 3) {
      dispatch(addTodoAction(newSingleTodoItem));
      setInputText("");
    } else {
      alert("Enter 2 chars to create todo");
    }
  };
  const isDarkToggle = () => {
    dispatch(isDarkToggleAction());
  };
  const clearCompleted = () => {
    dispatch(clearCompletedAction());
  };
  const isActiveToggle = () => {
    dispatch(isActiveToggleAction());
  };
  const isCopletedToggle = () => {
    dispatch(isCopletedToggleAction());
  };
  const getAllTodos = (e) => {
    // selectBtn(e);
    dispatch(getAllTodosAction());
  };
  // const selectBtn = (e) => {
  //   const currentItem = "currentItem";
  //   if (e.target.className.includes(currentItem)) {
  //     console.log(e.target.className, "3");
  //   } else {
  //     console.log(e.target.className, "4");
  //   }
  // };
  let darkMode = {
    backgroundColor: isDark ? "#FFFFFF" : "#25273D",
    color: isDark ? "#9495A5" : "#767992",
  };
  // const onSave = () => {
  //   // dispatch(saveNotes());
  // };

  return (
    <div className="app" style={darkMode}>
      <div className="appChildContainer">
        <div className="lightModeToggleContainer">
          <h2 className="lightLogo">{Strings.appTitle}</h2>
          <span className="lightIcon" onClick={isDarkToggle}>
            {isDark ? <IoMoonOutline /> : <BsSun />}
          </span>
        </div>
        <div className="inputContainer">
          <div className="input-group mb-3">
            <input
              type="text"
              style={darkMode}
              className="form-control"
              placeholder={Strings.input.placeholder}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button
              className={`btn`}
              style={darkMode}
              type="button"
              id="button-addon2"
              onClick={addTodo}
            >
              {Strings.buttons.addTodo}
            </button>
          </div>
        </div>

        <ul className="parentUL">
          {todos.length === 0 ? (
            <li className="childLI" style={darkMode}>
              {Strings.li.noTodoDisplayed}
            </li>
          ) : (
            <Todo isDark={isDark} todos={todos} dispatch={dispatch} />
          )}
          <li className="childLIParent" style={darkMode}>
            <span>
              {todos.length} {Strings.lengthOfTodos}
            </span>

            <ul className="list-group" ref={classNameRef}>
              <li className={`all currentItem`} onClick={getAllTodos}>
                {Strings.buttons.allTodos}
              </li>
              <li className={`active`} onClick={isActiveToggle}>
                {Strings.buttons.activeTodos}
              </li>
              <li className={`completed`} onClick={isCopletedToggle}>
                {Strings.buttons.completedTodos}
              </li>
            </ul>

            <span onClick={clearCompleted} className="clearCompleted">
              {Strings.buttons.clearCompletedTodos}
            </span>
          </li>
        </ul>
      </div>
      {/* <button onClick={onSave}>click me</button> */}
    </div>
  );
}

App.propTypes = {
  todo: PropTypes.array,
  dispatch: PropTypes.func,
};

export default App;
