export default (target) => {
  const button = document.querySelector(`.top-wrapper ${target}`)
  const buttons = document.querySelectorAll('aside .btn')

  buttons.forEach(button => {
    button.classList.remove('active');
  })

  backgroundPosition(button);
  button.classList.add('active');
}

export const backgroundPosition = (button) => {
  const background = document.querySelector('.top-wrapper .background');
  const top = background.parentElement;

  const parent = top.getBoundingClientRect();
  const child = button.getBoundingClientRect();

  const childToParent = child.top - parent.top;

  background.style.top = `${childToParent}px`;
  background.style.opacity = '1';
}