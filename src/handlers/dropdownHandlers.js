export default (e) => {
  const dropdown = e.target.closest('.dropdown')
  const dropdownItem = e.target.closest('.dropdown-items > div')
  const dropdownActive = dropdown.querySelector('div');

  if(dropdownItem){
    dropdownActive.textContent = dropdownItem.textContent;
    dropdownActive.setAttribute('data-value', dropdownItem.dataset.value);
  }

  dropdown.classList.toggle('open')
}