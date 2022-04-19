import {
  ADD_TODO,
  DELETE_ITEM,
  EDIT_ITEM,
  PICK_A_TODO_ITEM,
  CHANGE_BG_COLOR,
  CLEAR_COMPLETED,
  IS_ACTIVE,
  IS_COMPLETED,
  All_TODOS,
} from "./Store/Actions/ActionTypes";

const initialState = {
  baseTodoData: [],
  showTodoItems: [],
  isDark: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        baseTodoData: [{ ...action.payload }, ...state.showTodoItems],
        showTodoItems: [{ ...action.payload }, ...state.showTodoItems],
        isDark: state.isDark,
      };
    case DELETE_ITEM:
      let deletedItemArr = state.baseTodoData.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        baseTodoData: [...deletedItemArr],
        showTodoItems: [...deletedItemArr],
        isDark: state.isDark,
      };
    case EDIT_ITEM:
      const filteredItems = state.baseTodoData.filter(
        (item) => item.id !== action.payload.id
      );
      const selectedItem = state.baseTodoData.find(
        (item) => item.id === action.payload.id
      );
      // setInputText(selectedItem.inputText);

      return {
        baseTodoData: [...filteredItems],
        showTodoItems: [...filteredItems],
        isDark: state.isDark,
      };
    case PICK_A_TODO_ITEM:
      const notPickedItems = state.baseTodoData.filter(
        (item) => item.id !== action.payload.id
      );
      const pickedItem = state.baseTodoData.find(
        (elem) => elem.id === action.payload.id
      );
      return {
        baseTodoData: [
          ...notPickedItems,
          { ...pickedItem, completed: !pickedItem.completed },
        ],
        showTodoItems: [
          ...notPickedItems,
          { ...pickedItem, completed: !pickedItem.completed },
        ],
        isDark: state.isDark,
      };
    case CHANGE_BG_COLOR:
      return { ...state, isDark: !state.isDark };
    case CLEAR_COMPLETED:
      const clearCompleted = state.baseTodoData.filter(
        (item) => item.completed !== true
      );
      return {
        baseTodoData: [...clearCompleted],
        showTodoItems: [...clearCompleted],
        isDark: state.isDark,
      };
    case IS_ACTIVE:
      const isActiveTodosWith = state.baseTodoData.filter(
        (element) => element.completed === false
      );
      return {
        baseTodoData: [...state.baseTodoData],
        showTodoItems: [...isActiveTodosWith],
        isDark: state.isDark,
      };
    case IS_COMPLETED:
      const isCompletedTodosWith = state.baseTodoData.filter(
        (item) => item.completed === true
      );
      return {
        baseTodoData: [...state.baseTodoData],
        showTodoItems: [...isCompletedTodosWith],
        isDark: state.isDark,
      };
    case All_TODOS:
      return {
        baseTodoData: [...state.baseTodoData],
        showTodoItems: [...state.baseTodoData],
        isDark: state.isDark,
      };
    default:
      return state;
  }
}
export default reducer;
