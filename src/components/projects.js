import element from '../utils/createElement'
import child from '../utils/appendChild'

import getProject from '../logic/getProject';
import todo from "../components/todo";

export default (dataset) => {
  const projects = element.create('section', ['project']);
  child.append(projects, todo(dataset))

  getProject.getByDataset(dataset);

  return projects;
}