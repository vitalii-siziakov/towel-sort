function minMaxSort (arr) {return arr.sort((a,b) => a - b)}; 
function maxMinSort (arr) {return minMaxSort(arr).reverse()};

module.exports = function towelSort (matrix) {
  let resultArr = [];

  if (arguments.length) {
    matrix.forEach((element, i) => {
      if ((i + 1) % 2 === 0) {
        resultArr = resultArr.concat(maxMinSort(element.slice()));
      } else {
        resultArr = resultArr.concat(minMaxSort(element.slice()));
      }
    });
  }

  return resultArr;
};
