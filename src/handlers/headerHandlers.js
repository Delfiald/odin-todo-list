export default (title) => {
  const headerText = document.querySelector('.header-text');

  if (typeof title !== 'string') {
    const projectNameElement = title.target.closest('aside .active .project-name');
    
    if (projectNameElement) {
      title = projectNameElement.textContent;
    } else {
      console.error("Error: .project-name element not found.");
      return;
    }
  }

  if (headerText) {
    headerText.textContent = title;
  } else {
    console.error("Error: .header-text element not found.");
  }
}

export const asideToggler = () => {
  document.querySelector('aside').classList.toggle('show');
}