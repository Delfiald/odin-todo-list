// Utils
import element from '../utils/createElement';
import child from '../utils/appendChild';

// Dependencies
import { formatDistanceToNow } from "date-fns";

export default (todoList) => {
  const todo = createTodoList(todoList);
  
  return todo;
}

export const createTodo = (todo) => {
  let statusText;
  const dateDistance = formatDistanceToNow(
    todo.date,
    {addSuffix: true}
  )

  const todoCard = element.create('div', ['todo-card', `${todo.priority}`]);
  if(todo.completed){
    statusText = 'Completed';
    todoCard.classList.add('completed');
  }else{
    statusText = 'Incomplete';
  }
  todoCard.setAttribute('data-todo', todo.id);
  const todoTitle = element.create('div', ['todo-title'], todo.title);
  const todoDate = element.create('div', ['todo-date']);
  const timeIcon = element.create('i', ['fas', 'fa-clock-rotate-left'])
  const todoTime = element.create('div', ['todo-time'], dateDistance)
  child.append(todoDate, timeIcon, todoTime)
  const todoDescription = element.create('div', ['todo-description'], todo.description);
  const todoComplete = element.create('div', ['todo-complete'], statusText)
  const todoPriority = element.create('div', ['todo-priority'], todo.priority);
  child.append(todoCard, todoTitle, todoDate, todoDescription, todoPriority, todoComplete);

  return todoCard;
}

const createTodoList = (todoList) => {
  const todoWrapper = element.create('div', ['todo-wrapper']);
  todoList.forEach(todo => {
    const todoCard = createTodo(todo);
    
    child.append(todoWrapper, todoCard);
  });

  return todoWrapper;
}