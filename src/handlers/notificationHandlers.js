import { inboxItemManager } from "./inboxHandlers";
import { upcomingItemManager } from "./upcomingHandlers";

export default () => {
  const inbox = document.querySelector('aside .inbox-notifications');
  const upcoming = document.querySelector('aside .upcoming-notifications');

  const inboxCount = inboxItemManager().length;
  const upcomingCount = upcomingItemManager().length;
  
  inbox.textContent = inboxCount;
  if(inboxCount <= 0){
    inbox.style.opacity = '0';
    inbox.style.visibility = 'hidden';
  }else{
    inbox.style.opacity = '1';
    inbox.style.visibility = 'visible';
  }

  upcoming.textContent = upcomingCount;
  if(upcomingCount <= 0){
    upcoming.style.opacity = '0';
    upcoming.style.visibility = 'hidden';
  }else {
    upcoming.style.opacity = '1';
    upcoming.style.visibility = 'visible';
  }
}