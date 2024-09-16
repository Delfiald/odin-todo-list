// Utils
import element from '../utils/createElement';
import child from '../utils/appendChild';

// Manager
import todoManager from "../logic/todoManager";

// Dependencies
import { formatDistanceToNow } from "date-fns";

export default (projectId) => {
  const todo = createTodo(todoManager.getTodoByProjectId(projectId));
  
  return todo;
}

const createTodo = (todoList) => {
  const todoWrapper = element.create('div', ['todo-wrapper']);
  todoList.forEach(todo => {

    const dateDistance = formatDistanceToNow(
      todo.date,
      {addSuffix: true}
    )

    const todoCard = element.create('div', ['todo-card', `${todo.priority}`]);
    todoCard.setAttribute('data-todo', todo.id);
    const todoTitle = element.create('div', ['todo-title'], todo.title);
    const todoDate = element.create('div', ['todo-date']);
    const timeIcon = element.create('i', ['fas', 'fa-clock-rotate-left'])
    const todoTime = element.create('div', ['todo-time'], dateDistance)
    child.append(todoDate, timeIcon, todoTime)
    const todoDescription = element.create('div', ['todo-description'], todo.description);
    const todoComplete = element.create('div', ['todo-complete'], 'Complete')
    const todoPriority = element.create('div', ['todo-priority'], todo.priority);
    child.append(todoCard, todoTitle, todoDate, todoDescription, todoPriority, todoComplete);
    child.append(todoWrapper, todoCard);
  });

  return todoWrapper;
}