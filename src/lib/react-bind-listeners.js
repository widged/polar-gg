/* jshint esnext: true */

var bindOnFns = (ClassObj, instance) => {
  return Object.getOwnPropertyNames(ClassObj.prototype).filter((d) => { return /^on[A-Z]/.test(d); }).reduce((acc, k) => {
    if(k) {
      acc[k] = instance[k].bind(instance);
    }
    return acc;
  }, {});

};


export {bindOnFns};
