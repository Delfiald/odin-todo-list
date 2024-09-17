import element from '../utils/createElement'
import child from '../utils/appendChild'
import projectManager from '../logic/projectManager';

export default (() => {
  const modal = element.create('div', ['modal']);

  const addProject = (projectId) => {
    modal.innerHTML = '';
    const modalWrapper = element.create('div', ['modal-wrapper']);
    const container = element.create('div', ['modal-container', 'project'])

    const title = element.create('div', ['input', 'text'])
    const titleInput = element.create('input', [])
    const titleLabel = element.create('label', [], 'Title');
    titleLabel.setAttribute('for', 'title');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('required', '');
    titleInput.setAttribute('placeholder', 'Project Name');

    child.append(title, titleInput, titleLabel);

    const icon = element.create('div', ['input'])
    const icons = [
      {class: 'icon-1', value: 'icon-1'},
      {class: 'icon-2', value: 'icon-2'},
      {class: 'icon-3', value: 'icon-3'}
    ];

    icons.forEach(({ class: iconClass, value }) => {
      const iconDiv = element.create('div', [iconClass]);
      const iconRadio = element.create('input', []);
      iconRadio.setAttribute('type', 'radio');
      iconRadio.setAttribute('name', 'icon');
      iconRadio.setAttribute('id', value);
      iconRadio.setAttribute('value', value);
      const iconLabel = element.create('label');
      iconLabel.setAttribute('for', value);

      if(projectId) {
        const projectList = projectManager.getProject();
        const project = projectList.find(item => item.id === parseInt(projectId));
        container.setAttribute('data-id', projectId);
        titleInput.value = project.title;
  
        if (project && project.icon === value) {
          console.log('here');
          iconRadio.checked = true;
        }
      }

      child.append(iconDiv, iconRadio, iconLabel);
      child.append(icon, iconDiv)
    });

    const submitButton = element.create('div', ['submit-btn', 'btn'], 'Submit');
    const cancelButton = element.create('div', ['cancel-btn']);
    const cancelIcon = element.create('i', ['fas', 'fa-x'])

    child.append(cancelButton, cancelIcon)
    
    child.append(container, title, icon, submitButton, cancelButton)

    child.append(modalWrapper, container);
    child.append(modal, modalWrapper);

    return modal;
  }

  const removeProject = (projectId) => {
    modal.innerHTML = '';
    const modalWrapper = element.create('div', ['modal-wrapper']);
    const container = element.create('div', ['modal-container', 'remove'])
    
    container.setAttribute('data-id', projectId);
    const removeHeader = element.create('div', ['remove-header']);
    const headerIcon = element.create('i', ['fas', 'fa-info']);
    child.append(removeHeader, headerIcon)
    const removeText = element.create('div', ['remove-text'], 'All todos in this project will be deleted. Are you sure you want to proceed?');
    const submitButton = element.create('div', ['submit-btn', 'btn'], 'Proceed');

    const cancelButton = element.create('div', ['cancel-btn']);
    const cancelIcon = element.create('i', ['fas', 'fa-x'])
    child.append(cancelButton, cancelIcon)
    child.append(container, removeHeader, removeText, submitButton, cancelButton)

    child.append(modalWrapper, container);
    child.append(modal, modalWrapper);
    return modal;
  }

  const addTodo = () => {
    
  }

  const editTodo = () => {
    
  }

  return {
    addProject,
    addTodo,
    editTodo,
    removeProject
  };
})()