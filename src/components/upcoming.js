import element from '../utils/createElement'
import child from '../utils/appendChild'
import emptyComponentHandlers from './emptyComponentHandlers';
import todo from './todo';

export default (todoList) => {
  const upcoming = element.create('section', ['upcoming'])

  if(todoList.length === 0) {
    child.append(upcoming, emptyComponentHandlers().upcomingEmpty())
  }else {
    child.append(upcoming, todo(todoList))
  }

  return upcoming;
}