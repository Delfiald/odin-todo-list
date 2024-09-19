import element from '../utils/createElement'
import child from '../utils/appendChild'
import projectManager from '../logic/projectManager';
import { upcomingItemManager } from '../handlers/upcomingHandlers';
import { inboxItemManager } from '../handlers/inboxHandlers';

const createSectionTop = () => {
  // Aside Content
  const section = element.create('section', ['top'])
  const sectionWrapper = element.create('div', ['top-wrapper']);
  const inbox = element.create('div', ['inbox-btn', 'btn'])
  const iconInbox = element.create('i', ['fas', 'fa-inbox'])
  const textInbox = element.create('div', [], 'Inbox')

  const inboxNotifications = element.create('div', ['inbox-notifications'])
  const notifications1 = element.create('div', ['notifications'], inboxItemManager().length)
  child.append(inboxNotifications, notifications1)
  child.append(inbox, iconInbox, textInbox, inboxNotifications);

  const upcoming = element.create('div', ['upcoming-btn', 'btn'])
  const iconUpcoming = element.create('i', ['fas', 'fa-calendar'])
  const textUpcoming = element.create('div', [], 'Upcoming')
  const upcomingNotifications = element.create('div', ['upcoming-notifications'])
  const notifications2 = element.create('div', ['notifications'], upcomingItemManager().length)
  child.append(upcomingNotifications, notifications2)
  child.append(upcoming, iconUpcoming, textUpcoming, upcomingNotifications)

  const completed = element.create('div', ['completed-btn', 'btn'])
  const iconCompleted = element.create('i', ['fas', 'fa-check-circle'])
  const textCompleted = element.create('div', [], 'Completed')
  child.append(completed, iconCompleted, textCompleted);

  const background = element.create('div', ['background']);

  child.append(sectionWrapper, inbox, upcoming, completed, background);
  child.append(section, sectionWrapper);

  return section;
}

const createSectionBottom = () => {
  const section = element.create('section', ['bottom']);
  const sectionWrapper = element.create('div', ['bottom-wrapper'])

  const sectionHeader = element.create('h2', ['bottom-header'], 'Projects')

  const sectionContent = element.create('div', ['projects'])

  createProjects(sectionContent);

  const sectionBottom = element.create('div', ['project-bottom', 'btn', 'add-btn'])
  const addIcon = element.create('i', ['fas', 'fa-add'])
  const addText = element.create('div', [], 'Add Project')
  child.append(sectionBottom, addIcon, addText)

  child.append(sectionWrapper, sectionHeader);
  child.append(sectionWrapper, sectionContent)
  child.append(sectionWrapper, sectionBottom)
  child.append(section, sectionWrapper);

  return section;
}

const createProjects = (sectionContent) => {
  sectionContent.textContent = '';
  const projects = projectManager.getProject();
  for(let projectItem of projects){
    const project = createProject(projectItem);
  
    child.append(sectionContent, project)
  }
}

export const createProject = (projectItem) => {
  const project = element.create('div', ['project-btn', 'btn'])
  // setAttribute
  project.setAttribute('data-project', projectItem.id);
  const projectIcon = element.create('div', ['project-icon'])
  const projectImg = element.create('img', ['icon'])
  projectImg.setAttribute('src', projectItem.icon);
  child.append(projectIcon, projectImg);
  const projectName = element.create('div', ['project-name'], projectItem.title)
  const projectActions = element.create('div', ['project-actions'])
  const projectEditButton = element.create('i', ['fas', 'fa-edit', 'edit-btn'])
  const projectDeleteButton = element.create('i', ['fas', 'fa-trash', 'remove-btn'])

  child.append(projectActions, projectEditButton, projectDeleteButton)

  child.append(project, projectIcon, projectName, projectActions);

  return project;
}

export default () => {
  const aside = element.create('aside');

  // Aside Header
  const asideHeader = element.create('header')
  const headerWrapper = element.create('div', ['header-wrapper'])
  const headerText = element.create('h1', [], 'To Do List')
  child.append(headerWrapper, headerText);
  child.append(asideHeader, headerWrapper);

  // Hide Button
  const hideAside = element.create('div', ['hide-aside-btn']);
  const hideIcon = element.create('i', ['fas','fa-chevron-left'])
  child.append(hideAside, hideIcon)

  // Modes
  const modeButton = element.create('div', ['mode-btn', 'btn'])
  const modeWrapper = element.create('div', ['mode-wrapper']);
  child.append(modeButton, modeWrapper);
  child.append(asideHeader, hideAside, modeButton)

  // Aside Footer
  const footer = element.create('footer');
  const footerWrapper = element.create('div', ['footer-wrapper'])
  const github = element.create('a', [])
  github.setAttribute('href', 'https://github.com/Delfiald')
  github.setAttribute('rel', 'noopener noreferrer')
  github.setAttribute('target', '_blank')
  const githubIcon = element.create('i', ['fab', 'fa-github'])
  child.append(github, githubIcon)
  const linkedin = element.create('a', [])
  linkedin.setAttribute('href', '#')
  const linkedinIcon = element.create('i', ['fab', 'fa-linkedin'])
  child.append(linkedin, linkedinIcon)

  child.append(footerWrapper, github, linkedin)
  child.append(footer, footerWrapper)

  child.append(aside, asideHeader, createSectionTop(), createSectionBottom(), footer);
  return aside;
}