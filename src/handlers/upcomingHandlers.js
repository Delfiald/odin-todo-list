import createUpcoming from "../components/upcoming"
import navigationButtonHandlers from "./navigationButtonHandlers";
import todoManager from "../logic/todoManager";
import { addDays, isAfter, isBefore } from "date-fns";

export default () => {
  const UPCOMING_BUTTON = '.upcoming-btn';
  const main = document.querySelector('main');

  navigationButtonHandlers(UPCOMING_BUTTON);
  main.innerHTML = '';
  main.appendChild(createUpcoming(upcomingItemManager()));
}

export const upcomingItemManager = () => {
  const todoList = todoManager.getTodoList();

  const now = new Date();
  const oneWeekLater = addDays(now, 7);

  const getInclompleted = todoList.filter(todo => todo.completed === false);

  const datesInOneWeek = getInclompleted.filter(todo => {
    return isAfter(todo.date, now) && isBefore(todo.date, oneWeekLater);
  })

  return datesInOneWeek;
}