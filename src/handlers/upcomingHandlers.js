import createUpcoming from "../components/upcoming"
import navigationButtonHandlers from "./navigationButtonHandlers";

export default () => {
  const UPCOMING_BUTTON = '.upcoming-btn';
  const main = document.querySelector('main');

  navigationButtonHandlers(UPCOMING_BUTTON);
  main.innerHTML = '';
  main.appendChild(createUpcoming);
}