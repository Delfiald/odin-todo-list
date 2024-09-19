export default (title) => {
  const headerText = document.querySelector('.header-text');

  if(title) {
    if (headerText) {
      headerText.textContent = title;
    } else {
      console.error("Error: .header-text element not found.");
    }
  }else {
    headerText.textContent = document.querySelector('aside .active .project-name').textContent;
  }
}

export const asideToggler = () => {
  document.querySelector('aside').classList.toggle('show');
}