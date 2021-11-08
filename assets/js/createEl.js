/**
 * 
 * @param {string} type 
 * @param {object} options 
 * @param {string} options.typeEvent
 * @param {string[]} options.classNames
 * @param {function} options.onClick
 * @param {Node[]} children 
 * return {Node}
 */
 function createElement(type='div',{attributes={}, classNames=[], events={}, styles={}}, ...children){
  const elem = document.createElement(type);
  for(const [attrName, attrValue] of Object.entries(attributes)){
    elem.setAttribute(attrName, attrValue);
  }
  for(const [eventType, eventHandler] of Object.entries(events)){
    elem.addEventListener(eventType, eventHandler);
  }
  for(const [styleProp,styleValue] of Object.entries(styles)){
    elem.style[styleProp] = styleValue;
  }
  elem.classList.add(...classNames);
  elem.append(...children);
  return elem;
}

