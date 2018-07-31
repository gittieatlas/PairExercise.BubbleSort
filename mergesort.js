function split(array) {
  const midPoint = array.length / 2;
  const firstHalf = array.slice(0, midPoint);
  const secondHalf = array.slice(midPoint);
  return [firstHalf, secondHalf];
}

function merge(left, right) {
  const merged = [];
  let leftIdx = 0,
    rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      merged.push(left[leftIdx++]);
    } else {
      merged.push(right[rightIdx++]);
    }
  }
  for (; leftIdx < left.length; leftIdx++) merged.push(left[leftIdx]);
  for (; rightIdx < right.length; rightIdx++) merged.push(right[rightIdx]);
  return merged;
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const splits = split(arr),
    left = splits[0],
    right = splits[1];

  return merge(mergeSort(left), mergeSort(right));
}
