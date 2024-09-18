import projects from "../components/projects"
import projectButtonHandler from "./projectButtonHandler";

export default (e) => {
  const main = document.querySelector('main');
  const project = e.target.closest('.project-btn');
  let projectData = project.dataset.project;
  main.innerHTML = '';
  projectButtonHandler(project);
  projectData = parseInt(projectData);
  main.appendChild(projects(projectData));
}