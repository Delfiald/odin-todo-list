import createInbox from "../components/inbox"
import navigationButtonHandlers from "./navigationButtonHandlers";

export default () => {
  const INBOX_BUTTON = '.inbox-btn';
  const main = document.querySelector('main')

  navigationButtonHandlers(INBOX_BUTTON);
  main.innerHTML = ''
  main.appendChild(createInbox);
}