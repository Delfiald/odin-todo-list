export default (() => {
  return {
    validateProjectInput: () => {
      const inputs = document.querySelectorAll('.modal input');
      const projectData = {};
      console.log(projectData);
      for(let input of inputs){
        if(!input.reportValidity()){
          return;
        }

        if(input.type === 'radio' && input.checked){
          projectData[`${input.name}`] = input.value;
        }else if(input.type !== 'radio'){
          projectData[`${input.name}`] = input.value;
        }
      }

      return projectData;
    },
    validateTodoInput: () => {
      const inputWrappers = document.querySelectorAll('.modal .input');

      const todoData = {};
      console.log(todoData);
      for(let wrapper of inputWrappers) {
        const input = wrapper.querySelector('input') || wrapper.querySelector('textarea') || wrapper.querySelector('.priority-active') || wrapper.querySelector('.project-active');
        
        if(input.classList.contains('priority-active')){
          todoData[`priority`] = input.dataset.value;
        }else if(input.classList.contains('project-active')){
          todoData[`projectId`] = parseInt(input.dataset.value);
        }else if(!input.reportValidity()){
          return;
        }else {
          todoData[`${input.name}`] = input.value;
        }
      }

      return todoData
    }
  }
})()