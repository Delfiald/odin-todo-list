import todoManager from "../logic/todoManager";

export default (e) => {
  const card = e.target.closest('.todo-card');

  return {
    setToCompleted: () => {
      const todoDataset = parseInt(card.dataset.todo);
      todoManager.setCompleted(todoDataset);
      setCardCompleted(todoDataset, card);
    },
    getTodoDetails: () => {
      console.log("details Show");
    }
  }
}

const setCardCompleted = (todoDataset, card) => {
  const todo = todoManager.getTodoById(todoDataset);
  if(todo.completed){
    card.classList.add('completed');
  }else {
    card.classList.remove('completed');
  }
}