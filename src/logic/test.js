import todoManager from "./todoManager";
import projectManager from "./projectManager";

export default () => {
  projectManager.createProject('Project 1', '');
  todoManager.createTodo('Todo 1', new Date(), "Any", 'High', 1);
  todoManager.createTodo('Todo 2', new Date(), "Any", 'Medium', 1);
  todoManager.createTodo('Todo 3', new Date(), "Any", 'High', 1);
  projectManager.createProject('Project 2', '');
  todoManager.createTodo('Todo 4', new Date(), "Any", 'High', 2);

  console.log(projectManager.getProject());
  console.log(todoManager.getTodoByProjectId(2));
}