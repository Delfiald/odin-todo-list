import details from "../components/details";

export default (todo) => {
  removeDetails();
  const body = document.querySelector('body');
  body.appendChild(details(todo));
}

export const removeDetails = () => {
  const body = document.querySelector('body');
  const detail = body.querySelector('.details');
  if(detail) {
    detail.remove()
  }

  const cards = document.querySelectorAll('main .todo-card');
  cards.forEach(card => {
    card.classList.remove('detail-active')
  })
}