export default (() => {
  
  const appendChildren = (parent, ...children) => {
    children.forEach(child => {
      parent.appendChild(child);
    })
  }

  return {
    append: (parent, ...children) => {
      appendChildren(parent, ...children);
    }
  }
})()