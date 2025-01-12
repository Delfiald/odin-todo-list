import element from '../utils/createElement'
import child from '../utils/appendChild'

import todo from "../components/todo";
import todoManager from '../logic/todoManager';

import emptyComponentHandlers from './emptyComponentHandlers';

export default (dataset) => {
  const projects = element.create('section', ['project']);
  const todoList = todoManager.getTodoByProjectId(parseInt(dataset));

  if(todoList.length === 0) {
    child.append(projects, emptyComponentHandlers().projectEmpty())
  }else{
    const addButton = element.create('div', ['todo-add-btn']);
    const addIcon = element.create('i', ['fas', 'fa-plus']);
    const addText = element.create('div', ['add-text'], 'New Todo');
  
    child.append(addButton, addIcon, addText);
    child.append(projects, addButton, todo(todoList))
  }

  return projects;
}