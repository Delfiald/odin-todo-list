import element from '../utils/createElement'
import child from '../utils/appendChild'
import emptyComponentHandlers from './emptyComponentHandlers';
import todo from './todo';

export default (todoList) => {
  const completed = element.create('section', ['completed'])

  if(todoList.length === 0) {
    child.append(completed, emptyComponentHandlers().completedEmpty())
  }else {
    child.append(completed, todo(todoList));
  }

  return completed;
}