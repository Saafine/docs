function getProperty(propertyName, object) {
  const parts = propertyName.split('.');
  const length = parts.length;

  let property = object;
  for (let i = 0; i < length; i++) {
    property = property[parts[i]];
  }

  return property;
}

const obj = {
  a: {
    b: {
      c: 'works'
    }
  }
};

const result = getProperty('a.b.c', obj);
console.log(result); // works