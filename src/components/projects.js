import element from '../utils/createElement'
import child from '../utils/appendChild'

import getProject from '../logic/getProject';

export default (dataset) => {
  const projects = element.create('section', ['project']);

  getProject.getByDataset(dataset);

  return projects;
}