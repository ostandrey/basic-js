const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const newArr = [];
  
  if(!(arr instanceof Array)) {
    // throw new Error("'arr' parameter must be an instance of the Array!")
    return "'arr' parameter must be an instance of the Array!"
  };

  if(arr.length === 0) {
    return []
  }



  
  arr.map((el, index) => {

    if(typeof el === 'number') {
      newArr.push(el);
    }

    switch (el) {
      case '--discard-next':
        newArr.pop();
        break;
      case '--discard-prev':
        newArr.shift();
        break;
      case '--double-next':
        let nextNumDouble = arr[index + 1];
        newArr.push(nextNumDouble);
        break;
      case '--double-prev':
        let prevNumDouble = arr[index - 1];
        newArr.push(prevNumDouble);
        break;
      default: 
        null
    }
  })

  console.log(newArr);
}

transform(1)

module.exports = {
  transform
};
