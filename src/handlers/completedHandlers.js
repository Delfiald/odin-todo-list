import createCompleted from "../components/completed"
import todoManager from "../logic/todoManager";
import navigationButtonHandlers from "./navigationButtonHandlers";

export default () => {
  const COMPLETED_BUTTON = '.completed-btn';
  const main = document.querySelector('main')

  navigationButtonHandlers(COMPLETED_BUTTON);
  main.innerHTML = '';
  main.appendChild(createCompleted(completedItemManager()));
}

const completedItemManager = () => {
  const todoList = todoManager.getTodoList();

  return todoList.filter(todo => todo.completed === true);
}