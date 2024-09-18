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

  return {
    projectEmpty
  }
}