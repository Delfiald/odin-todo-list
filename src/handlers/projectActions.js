import { createProject } from "../components/aside";
import projectManager from "../logic/projectManager"
import todoManager from "../logic/todoManager";
import inputValidator from "../utils/inputValidator"
import inboxHandlers from "./inboxHandlers";

export default () => {
  return {
    addProject: () => {
      const project = document.querySelector('aside .projects');
      const projectData = inputValidator.validateProjectInput();

      if(!projectData) {
        return;
      }

      const projectId = parseInt(document.querySelector('.modal .modal-container').dataset.id);

      if(projectId) {
        projectManager.createProject(projectData.title, projectData.icon, parseInt(projectId));

        editProject(projectId, projectData);
      }else {
        const newProject = projectManager.createProject(projectData.title, projectData.icon)
    
        project.appendChild(createProject(newProject));
      }
    
      const modal = document.querySelector('.modal');
      modal.remove();
    },
    removeProject: () => {
      const projectId = parseInt(document.querySelector('.modal .modal-container').dataset.id);

      projectManager.removeProject(projectId)
      todoManager.removeTodoByProject(projectId);
      
      const projects = Array.from(document.querySelectorAll('aside .project-btn'))

      const project = projects.find(item => item.dataset.project == projectId);
      project.remove();

      const modal = document.querySelector('.modal');
      modal.remove();
      
      if(document.querySelector('main .project')){
        inboxHandlers()
      }
    }
  }
}

const editProject = (projectId, projectData) => {
  const projects = Array.from(document.querySelectorAll('aside .project-btn'))

  const project = projects.find(item => item.dataset.project == projectId);

  project.querySelector('.project-icon').textContent = projectData.icon;

  project.querySelector('.project-name').textContent = projectData.title;
}