import { backgroundPosition } from "./navigationButtonHandlers";

export default (button) => {
  const background = document.querySelector('.top-wrapper .background');
  const buttons = Array.from(document.querySelectorAll('aside .btn'));

  buttons.forEach(item => {
    item.classList.remove('active');
  })

  backgroundPosition(button);
  background.style.opacity = '0';

  button.classList.add('active');
}