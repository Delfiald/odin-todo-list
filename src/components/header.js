import element from '../utils/createElement'
import child from '../utils/appendChild'

export default () => {
  const header = element.create('header', [])
  const headerButton = element.create('div', ['header-btn']);
  const headerIcon = element.create('div', ['header-icon']);
  const icon = element.create('i', ['fas', 'fa-bars']);
  child.append(headerIcon, icon);
  const headerText = element.create('div', ['header-text'], 'Project 1');

  child.append(headerButton, headerIcon, headerText)

  child.append(header, headerButton);

  return header;
}