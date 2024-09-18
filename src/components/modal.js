import element from '../utils/createElement'
import child from '../utils/appendChild'
import projectManager from '../logic/projectManager';
import todoManager from '../logic/todoManager';

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

    const icon = element.create('div', ['input', 'radio'])
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

  const addTodo = (todoId) => {
    modal.innerHTML = '';
    const modalWrapper = element.create('div', ['modal-wrapper']);
    const container = element.create('div', ['modal-container', 'todo'])

    // Title
    const title = element.create('div', ['input', 'text']);
    const inputTitle = element.create('input', [])
    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('id', 'title');
    inputTitle.setAttribute('name', 'title');
    inputTitle.setAttribute('required', '');
    inputTitle.setAttribute('placeholder', 'Todo Title');
    const labelTitle = element.create('label', [], 'Title')
    labelTitle.setAttribute('for', 'title')

    // Description
    const description = element.create('div', ['input', 'text']);
    const inputDescription = element.create('textarea', [])
    inputDescription.setAttribute('id', 'description');
    inputDescription.setAttribute('name', 'description');
    inputDescription.setAttribute('required', '');
    inputDescription.setAttribute('placeholder', 'Todo Description');
    const labelDescription = element.create('label', [], 'Description')
    labelDescription.setAttribute('for', 'description')

    // Date
    const date = element.create('div', ['input', 'date']);
    const inputDate = element.create('input', [])
    inputDate.setAttribute('type', 'datetime-local');
    inputDate.setAttribute('id', 'date');
    inputDate.setAttribute('name', 'date');
    inputDate.setAttribute('required', '');
    const labelDate = element.create('label', [], 'Date')
    labelDate.setAttribute('for', 'date')

    // Priority
    const priority = element.create('div', ['input', 'dropdown', 'priority']);
    const inputPriority = element.create('div', ['dropdown']);
    const labelPriority = element.create('div', [], 'Priority')
    const priorityActive = element.create('div', ['priority-active'], 'High');
    priorityActive.setAttribute('data-value', 'high')
    const priorityItems = element.create('div', ['dropdown-items']);
    const priority1 = element.create('div', ['high'], 'High')
    priority1.setAttribute('data-value', 'high')
    const priority2 = element.create('div', ['medium'], 'Medium')
    priority2.setAttribute('data-value', 'medium')
    const priority3 = element.create('div', ['low'], 'Low')
    priority3.setAttribute('data-value', 'low')

    child.append(priorityItems, priority1, priority2, priority3)
    child.append(inputPriority, priorityActive, priorityItems);
    
    child.append(priorityItems, priority1, priority2, priority3)
    child.append(inputPriority, priorityActive, priorityItems);

    // Project
    const getProject = projectManager.getProject();
    const projectAside = document.querySelector('aside .project-btn.active');
    console.log(projectAside);
    const projectId = projectAside.dataset.project;
    const getActiveProject = getProject.find(item => item.id === parseInt(projectId));

    const project = element.create('div', ['input', 'dropdown', 'project']);
    const inputProject = element.create('div', ['dropdown']);
    const labelProject = element.create('div', [], 'Project')
    const projectActive = element.create('div', ['project-active'], getActiveProject.title);
    projectActive.setAttribute('data-value', getActiveProject.id)
    const projectItems = element.create('div', ['dropdown-items']);
    
    for(let item of getProject){
      const projectItem = element.create('div', ['project-item'], `${item.title}`)
      projectItem.setAttribute('data-value', item.id);
      child.append(projectItems, projectItem);
    }

    if(todoId){
      container.setAttribute('data-id', todoId);
      const todo = todoManager.getTodoById(parseInt(todoId));

      inputTitle.setAttribute('value', todo.title);
      inputDescription.textContent = todo.description;
      console.log(todo.date);
      inputDate.value = todo.date;
      
      priorityActive.textContent = todo.priority;
      priorityActive.setAttribute('data-value', todo.priority);

      const project = getProject.find(project => project.id === todo.projectId);

      projectActive.textContent = project.title;
      projectActive.setAttribute('data-value', todo.projectId);
    }

    child.append(inputProject, projectActive, projectItems);

    child.append(title, inputTitle, labelTitle)
    child.append(description, inputDescription, labelDescription)
    child.append(date, inputDate, labelDate)
    child.append(priority, labelPriority, inputPriority)
    child.append(project, labelProject, inputProject)

    const submitButton = element.create('div', ['submit-btn', 'btn'], 'Submit');
    const cancelButton = element.create('div', ['cancel-btn']);
    const cancelIcon = element.create('i', ['fas', 'fa-x'])
    child.append(cancelButton, cancelIcon);

    child.append(container, title, description, date, priority, project, submitButton, cancelButton);

    child.append(modalWrapper, container);
    child.append(modal, modalWrapper);

    return modal;
  }

  return {
    addProject,
    addTodo,
    removeProject
  };
})()