import todoManager from "../logic/todoManager";
import detailsHandlers from "./detailsHandlers";

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
      detailsHandlers(todo);
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
    } else {
      completeText.textContent = 'Incomplete'
      card.classList.remove('completed');
    }
  });
}

const getCard = (todoDataset) => {
  const cards = document.querySelectorAll('.todo-card')
  let card;
  cards.forEach(item => {
    const dataset = parseInt(item.dataset.todo);
    if(dataset === todoDataset){
      card = item;
    }
  })

  return card;
}