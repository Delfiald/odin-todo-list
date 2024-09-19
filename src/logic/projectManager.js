export default (() => {
  const projectList = JSON.parse(localStorage.getItem('project')) || [];
  let projectIdCounter = projectList.length ? Math.max(...projectList.map(p => p.id)) + 1 : 1;

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
        const json = JSON.stringify(projectList);
        localStorage.setItem('project', json);
        return projectList[index];
      }else {
        const project = newProjectObject(title, icon, id)
        projectList.push(project);
        const json = JSON.stringify(projectList);
        localStorage.setItem('project', json);
        return project;
      }
    },

    removeProject: (id) => {
      const index = findIndex(parseInt(id));

      if(index === -1) {
        throw new Error(`Project with id ${id} not found.`);
      }
      
      projectList.splice(index, 1);
      const json = JSON.stringify(projectList);
      localStorage.setItem('project', json);
    },

    getProject: () => {
      return [...projectList];
    }
  }
})()