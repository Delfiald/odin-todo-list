import element from '../utils/createElement'
import child from '../utils/appendChild'

export default () => {
  const projectEmpty = () => {
    const emptyProject = element.create('div', ['empty-container']);
    const emptyProjectTitle = element.create('div', ['empty-text'], "Yay, Nothing Todo")
    const addButton = element.create('div', ['todo-add-btn']);
    const addIcon = element.create('i', ['fas', 'fa-plus']);
    const addText = element.create('div', ['add-text'], 'New Todo');
    child.append(addButton, addIcon, addText);
    child.append(emptyProject, emptyProjectTitle, addButton)

    return emptyProject;
  }

  const createEmptyComponent = (iconClass, text) => {
    const emptyComponent = element.create('div', ['empty-components']);
    const emptyIcon = element.create('i', iconClass.split(' '));
    const emptyText = element.create('div', ['empty-text'], text);
  
    child.append(emptyComponent, emptyIcon, emptyText);
    return emptyComponent;
  };

  const inboxEmpty = () => createEmptyComponent('fas fa-inbox', 'Inbox is empty');
  
  const upcomingEmpty = () => createEmptyComponent('fas fa-calendar', 'No upcoming tasks');
  
  const completedEmpty = () => createEmptyComponent('fas fa-check-circle', `You haven't completed any tasks`);

  return {
    projectEmpty,
    inboxEmpty,
    upcomingEmpty,
    completedEmpty
  }
}