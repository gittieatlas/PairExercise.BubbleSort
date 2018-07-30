console.log('___________');
function split(wholeArray) {
  const midPoint = Math.round(wholeArray.length) / 2;

  const firstHalf = wholeArray.slice(0, midPoint);
  const secondHalf = wholeArray.slice(midPoint);
  console.log(midPoint);
  /* your code here to define the firstHalf and secondHalf arrays */
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2){
  let newArr = [];

  while (arr1.length || arr2.length) {
    if (!arr1[0]) newArr.push(arr2.shift());
    else if (!arr2[0]) newArr.push(arr1.shift());

    else {
      if (arr1[0] < arr2[0]) newArr.push(arr1.shift())
      else newArr.push(arr2.shift());
    }
  }

  return newArr;
}

console.log(merge([1, 2, 3], [4, 5, 6]));

function mergeSort(){

}
