function bubbleSort(array) {
  let sortedArr = [];

  while (array.length) {
    if (array.length === 1) {
      sortedArr.unshift(array.pop());
      break;
    }

    for (let i = 0; i < array.length - 1; i++) {
      const leftElement = array[i];
      const rightElement = array[i + 1];

      if (rightElement > leftElement) {
        let obj = swap(leftElement, rightElement);
        array[i] = obj.right;
        array[i + 1] = obj.left;
      }
    }
  }

  return sortedArr;
}

function swap(left, right) {
  return {
    left: left < right ? left : right,
    right: left > right ? left : right
  };
}
