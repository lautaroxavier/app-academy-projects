/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

const permutations = (array) => {
  let result = [];
  // caso base
  if(array.length <= 1){
    return [array];
  }
  // caso recursivo
  array.forEach((elem, i) => {
    let rest = [...array.slice(0,i),...array.slice(i+1)];
    let subPerms = permutations(rest);
    for(let subPerm of subPerms){
      result.push([elem,...subPerm]);
    }
  });
  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
