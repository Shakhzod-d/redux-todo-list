import {
  ADD_TODO,
  CHANGE_BG_COLOR,
  CLEAR_COMPLETED,
  IS_ACTIVE,
  IS_COMPLETED,
  All_TODOS,
  DELETE_ITEM,
  EDIT_ITEM,
  PICK_A_TODO_ITEM,
} from "./ActionTypes";

export const addTodoAction = (newSingleTodoItem) => ({
  type: ADD_TODO,
  payload: newSingleTodoItem,
});

export const isDarkToggleAction = () => ({ type: CHANGE_BG_COLOR });
export const clearCompletedAction = () => ({ type: CLEAR_COMPLETED });
export const isActiveToggleAction = () => ({ type: IS_ACTIVE });
export const isCopletedToggleAction = () => ({ type: IS_COMPLETED });
export const getAllTodosAction = () => ({ type: All_TODOS });

export const deleteItemAction = (id) => ({
  type: DELETE_ITEM,
  payload: { id },
});

export const editItemAction = (id) => ({
  type: EDIT_ITEM,
  payload: { id },
});

export const pickAnItemAction = (id) => ({
  type: PICK_A_TODO_ITEM,
  payload: { id },
});
