export default (() => {
  let todoList = [];
  let todoIdCounter = 1;

  const createTodoObject = (title, date, description, priority, projectId, id, completed = false) => ({
      id: id,
      title: title,
      date: date,
      description: description,
      priority: priority,
      completed: completed,
      projectId: projectId
  })

  const findIndex = (id) => {
    return todoList.findIndex(todo => todo.id === id);
  }

  return {
    createTodo: (title, date, description, priority, projectId, id = todoIdCounter++) => {
      const existingIndex = findIndex(id);

      if(existingIndex !== -1) {
        const completed = todoList[existingIndex].completed
        todoList[existingIndex] = createTodoObject(title, date, description, priority, projectId, id, completed);
        return todoList[existingIndex];
      }else {
        const todo = createTodoObject(title, date, description, priority, projectId, id);
        todoList.push(todo);
        return todo;
      }
    },
    setPriority: (id, priority) => {
      const index = findIndex(id);

      if(index === -1) {
        throw new Error(`Todo with id ${id} not found.`);
      }

      todoList[index].priority = priority;
    },
    setCompleted: (id) => {
      const index = findIndex(id);

      if(index === -1) {
        throw new Error(`Todo with id ${id} not found.`);
      }

      console.log(`todoList ${index} set to true`);

      todoList[index].completed = !todoList[index].completed;
    },
    removeTodo: (id) => {
      const index = findIndex(id);

      if(index === -1) {
        throw new Error(`Todo with id ${id} not found.`);
      }

      todoList.splice(index, 1);
    },
    removeTodoByProject: (projectId) => {
      todoList = todoList.filter(todo => todo.projectId !== projectId);
    },
    getTodoList: () => {
      return [...todoList];
    },
    getTodoByProjectId: (projectId) => {
      return todoList.filter(todo => todo.projectId === projectId);
    },
    getTodoById: (id) => {
      const index = findIndex(id);

      if(index === -1) {
        throw new Error(`Todo with id ${id} not found.`);
      }

      return todoList[index];;
    }
  }
})()