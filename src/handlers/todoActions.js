import inputValidator from "../utils/inputValidator";
import todoManager from "../logic/todoManager";
import {createTodo} from "../components/todo"
import {removeDetails} from "./detailsHandlers";
import { formatDistanceToNow } from "date-fns";
import details from "../components/details";
import emptyComponentHandlers from "./emptyComponentHandlers";
import projects from "../components/projects";

export default () => {
  return {
    addTodo: () => {
      const projectWrapper = document.querySelector('main .project');
      const todo = document.querySelector('main .todo-wrapper')
      let todoData = inputValidator.validateTodoInput();

      if(!todoData) {
        return;
      }

      const todoId = parseInt(document.querySelector('.modal .modal-container').dataset.id);

      let projectActive = document.querySelector('aside .projects .active');

      if(projectActive){
        projectActive = projectActive.dataset.project;
      }

      if(todoId) {
        todoData = todoManager.createTodo(todoData.title, todoData.date, todoData.description, todoData.priority, todoData.projectId, parseInt(todoId));

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
          const todos = Array.from(document.querySelectorAll('main .todo-card'))

          const todo = todos.find(item => item.dataset.todo == todoId);

          todo.remove();

          if(todos.length <= 1){
            projectWrapper.textContent = '';
            projectWrapper.appendChild(emptyComponentHandlers().projectEmpty());
            removeDetails();
          }
        }
      }else {
        const newTodo = todoManager.createTodo(todoData.title, todoData.date, todoData.description, todoData.priority, todoData.projectId);

        if(todo){
          if(parseInt(projectActive) === todoData.projectId){
            todo.appendChild(createTodo(newTodo));
          }
        }else{
          projectWrapper.textContent = '';
          projectWrapper.appendChild(projects(todoData.projectId));
        }
      }
    
      const modal = document.querySelector('.modal');
      modal.remove();
    },
    removeTodo: () => {
      const projectWrapper = document.querySelector('main .project');
      const todoId = parseInt(document.querySelector('.details').dataset.todo);

      const todoCards = Array.from(document.querySelectorAll('main .todo-card'));

      let todoCard = todoCards.find(card => parseInt(card.dataset.todo) === todoId)

      if(todoCards.length <= 1){
        projectWrapper.textContent = '';
        projectWrapper.appendChild(emptyComponentHandlers().projectEmpty());
      }

      if(todoCard) {
        todoCard.remove();
      }


      todoManager.removeTodo(todoId);
      removeDetails();
    }
  }
}