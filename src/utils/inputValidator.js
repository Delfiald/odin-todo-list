export default (() => {
  return {
    validateProjectInput: () => {
      const inputs = document.querySelectorAll('.modal input');
      const projectData = {};
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

    }
  }
})()