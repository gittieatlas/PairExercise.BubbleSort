describe('Bubble Sort', function() {
  spyOn(bubbleSort, 'swap').and.callThrough();

  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles an single item in array', function() {
    expect(bubbleSort([1])).toEqual([1]);
  });

  it('handles an multiple items in array', function() {
    expect(bubbleSort([1, 3, 2])).toEqual([1, 2, 3]);
  });

  // TODO not use sort method
  // TODO check if using bubble sort algorithm
});
