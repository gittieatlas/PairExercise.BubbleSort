function split(wholeArray) {
  const midPoint = Math.round(wholeArray.length) / 2;

  const firstHalf = wholeArray.slice(0, midPoint);
  const secondHalf = wholeArray.slice(midPoint);
  /* your code here to define the firstHalf and secondHalf arrays */
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let newArr = [];

  // TODO does 0 work here
  while (arr1.length || arr2.length) {
    if (!arr1[0]) newArr.push(arr2.shift());
    else if (!arr2[0]) newArr.push(arr1.shift());
    else {
      if (arr1[0] < arr2[0]) newArr.push(arr1.shift());
      else newArr.push(arr2.shift());
    }
  }

  return newArr;
}

function mergeSort(arr) {
  //   Merge Sort (Recursive)
  // If array is one element - its sorted ; base case
  if (arr.length === 1) {
    return arr;
  }

  // Otherwise split it and merge sort each half - call mergeSort(smaller array)

  const midPoint = Math.round(arr.length) / 2;
  let left = arr.slice(0, midPoint);
  let right = arr.slice(midPoint);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([1, 5, 0, 7, 8, 4, 3, 2, 1, 5]));
