function getMinMax(str) {
  let strings = str.split(' ');
  let nums = strings
      .filter((value) => isFinite(value))
      .map((value) => +value);
  nums.sort((a, b) => {
    if (a > b) {return 1;}
    return a < b ? -1 : 0;
  });
  let lastElementIndex = nums.length - 1;
  let max = nums[lastElementIndex];
  let min = nums[0];
  return {min, max};
}
