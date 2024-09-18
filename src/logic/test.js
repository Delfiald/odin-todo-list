import todoManager from "./todoManager";
import projectManager from "./projectManager";
import { add } from "date-fns";

export default () => {
  const date1 = add(new Date(2024, 9, 17, 0, 59, 0), {
    months: -1,
  });
  const date2 = add(new Date(2024, 9, 18, 10, 19, 50), {
    months: -1,
  });
  const date3 = add(new Date(2024, 10, 1, 10, 19, 50), {
    months: -1,
  });

  console.log(date1)

  projectManager.createProject('Project 1', '');
  todoManager.createTodo('Todo 1', date1, "Any", 'high', 1);
  todoManager.createTodo('Todo 2', date2, "Any", 'medium', 1);
  todoManager.createTodo('Todo 3', date3, "Any", 'high', 1);
  projectManager.createProject('Project 2', '');
  todoManager.createTodo('Todo 4', date2, "Any", 'high', 2);

  console.log(projectManager.getProject());
  console.log(todoManager.getTodoByProjectId(2));
}