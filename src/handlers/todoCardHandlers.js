import todoManager from "../logic/todoManager";
import completedHandlers from "./completedHandlers";
import detailsHandlers, { removeDetails } from "./detailsHandlers";
import notificationHandlers from "./notificationHandlers";
import upcomingHandlers from "./upcomingHandlers";

export default (e) => {
  const card = e.target.closest('.todo-card') || e.target.closest('.details');

  if(!card) {
    throw new Error('Card Not Found');
  }
  
  const todoDataset = parseInt(card.dataset.todo);

  return {
    setToCompleted: () => {
      todoManager.setCompleted(todoDataset);
      setCardsCompleted();
      const todo = todoManager.getTodoById(todoDataset);
      if(document.querySelector('.details')){
        detailsHandlers(todo);
      }
      notificationHandlers();
    },
    getTodoDetails: () => {
      const todo = todoManager.getTodoById(todoDataset);
      detailsHandlers(todo);
    }
  }
}

export const setCardsCompleted = () => {
  const cards = document.querySelectorAll('.todo-card');
  
  cards.forEach(card => {
    const todoId = parseInt(card.dataset.todo);
    const todo = todoManager.getTodoById(todoId);
    const completeText = card.querySelector('.todo-complete');
    
    if (todo.completed) {
      completeText.textContent = 'Completed'
      card.classList.add('completed');
      if(document.querySelector('aside .active').classList.contains('upcoming-btn')){
        upcomingCardHandler(card);
      }
    } else {
      completeText.textContent = 'Incomplete'
      card.classList.remove('completed');
      if(document.querySelector('aside .active').classList.contains('completed-btn')){
        completedCardHandler(card);
      }
    }
  });
}

const upcomingCardHandler = () => {
  upcomingHandlers();
  removeDetails();
}

const completedCardHandler = () => {
  completedHandlers();
  removeDetails();
}