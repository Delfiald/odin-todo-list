import inboxHandlers from "./inboxHandlers";
import upcomingHandlers from "./upcomingHandlers";
import completedHandlers from "./completedHandlers";
import modeButton from './modeButtonHandlers'
import todoCardHandlers from "./todoCardHandlers";
import projectsHandler from "./projectsHandlers";

import {removeDetails} from "./detailsHandlers";
import modalHandlers from "./modalHandlers";
import projectActions from "./projectActions";
import dropdownHandlers from "./dropdownHandlers";
import todoActions from "./todoActions";

export default () => {
  document.addEventListener('click', (e) => {
    const target = e.target;
    if(target.closest('.top-wrapper .inbox-btn')){
      inboxHandlers();
      removeDetails();
    }else if(target.closest('.top-wrapper .upcoming-btn')){
      upcomingHandlers();
      removeDetails();
    }else if(target.closest('.top-wrapper .completed-btn')){
      completedHandlers();
      removeDetails();
    }else if(target.closest('.bottom-wrapper .project-actions .edit-btn')){
      modalHandlers.editProject(e);
    }else if(target.closest('.bottom-wrapper .project-actions .remove-btn')){
      modalHandlers.removeProject(e);
    }else if(target.closest('.bottom-wrapper .project-btn')){
      projectsHandler(e);
      removeDetails();
    }else if(e.target.closest('.details .close-btn')){
      removeDetails();
    }else if(target.closest('.bottom-wrapper .add-btn')){
      modalHandlers.addProject();
    }else if(target.closest('.modal .project .submit-btn')){
      projectActions().addProject();
    }else if(target.closest('.modal .remove .submit-btn')){
      projectActions().removeProject();
    }else if(target.closest('.modal .todo .submit-btn')){
      todoActions().addTodo();
    }else if(target.closest('.details .remove-btn')){
      todoActions().removeTodo();
    }else if(target.closest('.details .edit-btn')){
      modalHandlers.editTodo(e);
    }else if(target.closest('.todo-card .todo-complete') || target.closest('.details .completed')){
      todoCardHandlers(e).setToCompleted();
    }else if(target.closest('.todo-add-btn')) {
      modalHandlers.addTodo();
    }else if(target.closest('.modal .cancel-btn')) {
      modalHandlers.removeModal();
    }
    else if(target.closest('.todo-card')){
      todoCardHandlers(e).getTodoDetails();
    }else if(target.closest('.modal .dropdown') || target.closest('.modal .dropdown-items')){
      dropdownHandlers(e);
    }else if(target.closest('.mode-btn')){
      modeButton();
    }
  })
}