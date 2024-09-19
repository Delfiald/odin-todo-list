import inputValidator from "../utils/inputValidator";
import todoManager from "../logic/todoManager";
import {createTodo} from "../components/todo"
import {removeDetails} from "./detailsHandlers";
import { formatDistanceToNow } from "date-fns";
import details from "../components/details";
import emptyComponentHandlers from "../components/emptyComponentHandlers";
import projects from "../components/projects";
import notificationHandlers from "./notificationHandlers";
import upcomingHandlers from "./upcomingHandlers";

export default () => {
  return {
    addTodo: () => {
      let todoData = inputValidator.validateTodoInput();

      if(!todoData) {
        return;
      }

      const projectWrapper = document.querySelector('main .project');
      const todo = document.querySelector('main .todo-wrapper')

      const todoId = parseInt(document.querySelector('.modal .modal-container').dataset.id);

      let projectActive = document.querySelector('aside .projects .active');

      if(projectActive){
        projectActive = projectActive.dataset.project;
      }

      if(todoId) {
        todoData = todoManager.createTodo(todoData.title, todoData.date, todoData.description, todoData.priority, todoData.projectId, parseInt(todoId));

        todoEditDOMHandler(todoId, todoData, projectActive, projectWrapper);
      }else {
        const newTodo = todoManager.createTodo(todoData.title, todoData.date, todoData.description, todoData.priority, todoData.projectId);

        if(todo){
          if(parseInt(projectActive) === todoData.projectId){
            todo.appendChild(createTodo(newTodo));
          }
        }else{
          projectWrapper.remove();
          const main = document.querySelector('main')
          main.appendChild(projects(todoData.projectId));
        }
      }
    
      const modal = document.querySelector('.modal');
      modal.remove();
      notificationHandlers();
    },
    removeTodo: () => {
      const projectWrapper = document.querySelector('main .project');
      const todoId = parseInt(document.querySelector('.details').dataset.todo);

      const todoCards = Array.from(document.querySelectorAll('main .todo-card'));

      let todoCard = todoCards.find(card => parseInt(card.dataset.todo) === todoId)

      if(todoCards.length <= 1){
        if(projectWrapper){
          projectWrapper.textContent = '';
          projectWrapper.appendChild(emptyComponentHandlers().projectEmpty());
        }else{
          const getActiveAside = document.querySelector('.todo-wrapper').parentElement;
          if(getActiveAside.className === 'inbox'){
            getActiveAside.appendChild(emptyComponentHandlers().inboxEmpty());
          }else if(getActiveAside.className === 'upcoming'){
            getActiveAside.appendChild(emptyComponentHandlers().upcomingEmpty());
          }else if(getActiveAside.className === 'completed'){
            getActiveAside.appendChild(emptyComponentHandlers().completedEmpty());
          }
        }
      }

      if(todoCard) {
        todoCard.remove();
      }

      todoManager.removeTodo(todoId);
      removeDetails();
      notificationHandlers();
    }
  }
}

const todoEditDOMHandler = (todoId, todoData, projectActive, projectWrapper) => {
  if(parseInt(projectActive) === todoData.projectId){
    const todos = Array.from(document.querySelectorAll('main .todo-card'))

    const todo = todos.find(item => item.dataset.todo == todoId);

    const detail = document.querySelector('.details');
    detail.remove();
    const body = document.querySelector('body');
    body.appendChild(details(todoData));

    console.log(todoData.date);

    const todoDate = formatDistanceToNow(
      todoData.date,
      {addSuffix: true}
    )
    
    todo.querySelector('.todo-title').textContent = todoData.title;
    todo.querySelector('.todo-time').textContent = todoDate;
    todo.querySelector('.todo-description').textContent = todoData.description;
    todo.querySelector('.todo-priority').textContent = todoData.priority;
    
    todo.classList.remove('high')
    todo.classList.remove('medium')
    todo.classList.remove('low')
    todo.classList.add(`${todoData.priority}`);
  }else {
    const todos = Array.from(document.querySelectorAll('main .todo-card'));

    const todo = todos.find(item => item.dataset.todo == todoId);
    
    if(todos.length <= 1){
      const upcoming = document.querySelector('main .upcoming')
      if(projectWrapper){
        todo.remove();
        projectWrapper.textContent = '';
        projectWrapper.appendChild(emptyComponentHandlers().projectEmpty());
      }else if(upcoming){
        upcomingHandlers();
      }
      removeDetails();
    }
  }
}