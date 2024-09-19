import element from '../utils/createElement'
import child from '../utils/appendChild'
import emptyComponentHandlers from './emptyComponentHandlers';
import todo from "../components/todo";

export default (todoList) => {
  const inbox = element.create('section', ['inbox'])

  if(todoList.length === 0) {
    child.append(inbox, emptyComponentHandlers().inboxEmpty())
  }else {
    child.append(inbox, todo(todoList))
  }

  return inbox;
}