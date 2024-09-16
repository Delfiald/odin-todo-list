export default (() => {
  const projectList = [];
  let projectIdCounter = 1;

  const newProjectObject = (title, icon, id) => ({
    id: id,
    title: title,
    icon: icon
  })
  
  const findIndex = (id) => {
    return projectList.findIndex(project => project.id === id);
  }
  
  return {
    createProject: (title, icon, id = projectIdCounter++) => {
      const index = findIndex(id);

      if(index !== -1){
        projectList[index] = newProjectObject(title, icon, id);
      }else {
        const project = newProjectObject(title, icon, id)
        projectList.push(project);
      }
    },

    removeProject: (id) => {
      const index = findIndex(id);

      if(index === -1) {
        throw new Error(`Project with id ${id} not found.`);
      }
      
      projectList.splice(index, 1);
    },

    getProject: () => {
      return [...projectList];
    }
  }
})()