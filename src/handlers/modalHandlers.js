import modal from "../components/modal"

export default (() => {
  const body = document.querySelector('body');

  return {
    addProject: () => {
      const modalComponent = modal.addProject();
      body.appendChild(modalComponent)
    },
    addTodo: () => {
      const modalComponent = modal.addTodo();
      body.appendChild(modalComponent)
    },
    editProject: (e) => {
      const projectId = e.target.closest('.project-btn').dataset.project;
      const modalComponent = modal.addProject(projectId);
      body.appendChild(modalComponent)
    },
    editTodo: () => {
      const modalComponent = modal.editTodo();
      body.appendChild(modalComponent)
    },
    removeProject: (e) => {
      const projectId = e.target.closest('.project-btn').dataset.project;
      const modalComponent = modal.removeProject(projectId);
      body.appendChild(modalComponent);
    },
    removeModal: () => {
      const modal = document.querySelector('.modal');
      modal.remove();
    }
  }
})()