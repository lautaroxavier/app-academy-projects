function chooseNumber(max,...nums){
  let result = nums[0];
  for(let i = 1; i < nums.length; i++){
    let num = nums[i];
    if(max && num > result){
      result = num;
    } else if (!max && num < result){
      result = num;
    }
  }
  return result;
}

function multiplyBiggerNumByTwo(num1, num2) {
  return chooseNumber(true, num1, num2) * 2;
}

function divideBiggerNumByThree(num1, num2) {
  return chooseNumber(true, num1, num2) / 3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum = chooseNumber(true, sum1, sum2);
  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog = chooseNumber(false, weight1, weight2);
  return `I adopted a dog that weighs ${smallDog} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};