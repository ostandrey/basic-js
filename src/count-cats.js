const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(...matrix) {
  const newMatrix = matrix.flat(Infinity).filter(catEars => catEars === '^^');
  
  return newMatrix === 0 ? 0 : newMatrix.length
}

countCats([
  [0, 1, '^^'],
  [0, '^^', 2],
  ['^^', 1, 2]
])

module.exports = {
  countCats
};
