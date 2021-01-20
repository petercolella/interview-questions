function maxInArray(arr) {
  let elementObj = {};
  let max = 0;
  let maxKey;
  arr.forEach(element => {
    if (!elementObj[element]) {
      elementObj[element] = 1;
    } else {
      elementObj[element]++;
    }
  });
  Object.keys(elementObj).forEach(key => {
    if (elementObj[key] > max) {
      max = elementObj[key];
      maxKey = key;
    }
  });
  return maxKey;
}
