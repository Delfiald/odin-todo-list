import createCompleted from "../components/completed"
import navigationButtonHandlers from "./navigationButtonHandlers";

export default () => {
  const COMPLETED_BUTTON = '.completed-btn';
  const main = document.querySelector('main')

  navigationButtonHandlers(COMPLETED_BUTTON);
  main.innerHTML = '';
  main.appendChild(createCompleted);
}