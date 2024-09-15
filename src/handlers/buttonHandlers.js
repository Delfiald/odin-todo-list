import inboxHandlers from "./inboxHandlers";
import upcomingHandlers from "./upcomingHandlers";
import completedHandlers from "./completedHandlers";
import modeButton from './modeButtonHandlers'
import projectsHandler from "./projectsHandler";
import projectRemoveHandlers from "./projectRemoveHandlers";
import projectEditHandlers from "./projectEditHandlers";
import addProjectHandlers from "./addProjectHandlers";

export default () => {
  document.addEventListener('click', (e) => {
    const target = e.target;
    if(target.closest('.top-wrapper .inbox-btn')){
      inboxHandlers();
    }else if(target.closest('.top-wrapper .upcoming-btn')){
      upcomingHandlers();
    }else if(target.closest('.top-wrapper .completed-btn')){
      completedHandlers();
    }else if(target.closest('.bottom-wrapper .project-actions .edit-btn')){
      projectEditHandlers(e);
    }else if(target.closest('.bottom-wrapper .project-actions .remove-btn')){
      projectRemoveHandlers(e);
    }else if(target.closest('.bottom-wrapper .project-btn')){
      projectsHandler(e);
    }else if(target.closest('.bottom-wrapper .add-btn')){
      addProjectHandlers();
    }else if(target.closest('.mode-btn')){
      modeButton();
    }
  })
}