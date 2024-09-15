import projects from "../components/projects"
import projectButtonHandler from "./projectButtonHandler";

export default (e) => {
  const main = document.querySelector('main')

  const project = e.target.closest('.project-btn');
  const projectData = project.dataset.project;
  
  main.innerHTML = '';
  
  projectButtonHandler(project);
  main.appendChild(projects(projectData));
}