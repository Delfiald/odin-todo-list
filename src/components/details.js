import element from '../utils/createElement'
import child from '../utils/appendChild'
import { add } from 'date-fns'

export default (todo) => {
  const todoDate = convertDate(todo.date);
  const details = element.create('section', ['details'])
  details.setAttribute('data-todo', todo.id);
  const detailsWrapper = element.create('div', ['details-wrapper']);
  const title = element.create('div', ['title'], todo.title);
  const priority = element.create('div', ['priority']);
  const priorityIndicator = element.create('div', ['priority-indicator', `${todo.priority}`])
  const priorityText = element.create('div', ['priority-text'], todo.priority)
  child.append(priority, priorityIndicator, priorityText)
  const date = element.create('div', ['date'], todoDate);
  const descriptions = element.create('div', ['description'], todo.description);
  const completed = element.create('div', ['completed']);
  const completedText = element.create('div', ['completed-text'], isCompleted(todo.completed))
  child.append(completed, completedText)
  const detailsBottom = element.create('div', ['details-bottom']);
  const editButton = element.create('div', ['edit-btn', 'btn']);
  const editIcon = element.create('i', ['fas', 'fa-edit'])
  child.append(editButton, editIcon)
  const removeButton = element.create('div', ['remove-btn', 'btn']);
  const removeIcon = element.create('i', ['fas', 'fa-trash'])
  child.append(removeButton, removeIcon);
  child.append(detailsBottom, editButton, removeButton)

  child.append(detailsWrapper, title, priority, date, descriptions, completed, detailsBottom);

  const detailClose = element.create('div', ['close-btn']);
  const closeIcon = element.create('i', ['fas', 'fa-chevron-right'])
  child.append(detailClose, closeIcon)
  child.append(details, detailsWrapper, detailClose)
  
  return details;
}

const isCompleted = (completed) => {
  if(completed) {
    return 'Completed';
  }
  else {
    return 'Incomplete';
  }
}

const convertDate = (date) => {
  return add(new Date(date), {})
}