// add class
const addClass = (target, classname) => {
  if (target !== null) {
    const targetClass = target.classList;
    targetClass.add(classname);
    // console.log('add class', target, classname, targetClass);
  }
};

// remove class
const removeClass = (target, classname) => {
  if (target !== null) {
    const targetClass = target.classList;
    const check = targetClass.contains(classname);
    if (check) {
      targetClass.remove(classname);
    }
    // console.log('remove class', target, classname, targetClass);
  }
};

export {
  addClass,
  removeClass,
};
