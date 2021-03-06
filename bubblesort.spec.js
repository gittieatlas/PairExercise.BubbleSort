'use-strict';

function generateArray(size, lower, upper) {
  let randomArray = [];
  while (size--) {
    let randomNum = Math.floor(lower + Math.random() * upper);
    randomArray.push(randomNum);
  }
  return randomArray;
}

function numerically(a, b) {
  return a - b;
}

describe('Bubble Sort', function() {
  it('sorts an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('sorts an array of one element', function() {
    expect(bubbleSort([7])).toEqual([7]);
  });

  for (let i = 2; i < 103; i += 20) {
    it('sorts an array of ' + i + ' random items', function() {
      let arr = generateArray(i, 0, 100);
      let sorted = arr.slice(0).sort(numerically);
      expect(bubbleSort(arr)).toEqual(sorted);
    });
  }

  it('compares the expected number of times', () => {
    spyOn(window, 'inOrder').and.callThrough();
    bubbleSort([4, 6, 5, 1]);
    expect(inOrder.calls.count()).toEqual(10);
  });

  it('swaps the expected number of times', () => {
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([4, 6, 5, 1]);
    expect(swap.calls.count()).toEqual(4);
  });
});
