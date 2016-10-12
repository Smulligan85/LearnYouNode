var nums = process.argv.slice(2).map(Number);
var total = 0;

function addNums(numArr) {
  for(var i = 0; i < numArr.length; i++) {
    total += numArr[i];
  }
  return total;
}

console.log(addNums(nums));
