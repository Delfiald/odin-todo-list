import element from '../utils/createElement'
import child from '../utils/appendChild'

import getProject from '../logic/getProject';
import todo from "../components/todo";

export default (dataset) => {
  const projects = element.create('section', ['project']);

  const addButton = element.create('div', ['todo-add-btn']);
  const addIcon = element.create('i', ['fas', 'fa-plus']);
  const addText = element.create('div', ['add-text'], 'New Todo');
  child.append(addButton, addIcon, addText);

  child.append(projects, addButton, todo(dataset))

  getProject.getByDataset(dataset);

  return projects;
}