export default (() => {
  const Element = () => {
    let tagName = '';

    return {
      createElement: (tag) => {
        tagName = tag;

        return document.createElement(tagName);
      }
    }
  }

  const ElementBuilder = () => {
    let newElement = null;
    let classes = [];
    let textContent = '';

    const addClasses = (classesArray) => {
      classes = classesArray;
    }

    const addTextContent = (text) => {
      textContent = text;
    }

    const buildElement = () => {
      if(classes.length > 0){
        for(let className of classes){
          newElement.classList.add(className)
        }
      }

      if(textContent){
        newElement.textContent = textContent;
      }
    }

    return {
      build: (tagName, classesArray, text) => {
        const elementModule = Element();
        newElement = elementModule.createElement(tagName);

        addClasses(classesArray);
        addTextContent(text);

        buildElement();

        return newElement;
      }
    }
  }

  return {
    create: (tag, classes = [], textContent = '') => {
      const builder = ElementBuilder();
      return builder.build(tag, classes, textContent)
    }
  }
})()

