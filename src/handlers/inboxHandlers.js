import createInbox from "../components/inbox"
import todoManager from "../logic/todoManager";
import navigationButtonHandlers from "./navigationButtonHandlers";

export default () => {
  const INBOX_BUTTON = '.inbox-btn';
  const main = document.querySelector('main')

  navigationButtonHandlers(INBOX_BUTTON);
  main.innerHTML = ''
  main.appendChild(createInbox(inboxItemManager()));
}

export const inboxItemManager = () => {
  const todoList = todoManager.getTodoList();
  
  return todoList;
}