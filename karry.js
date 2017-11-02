var pow = function(num1){
  return function(num2){
    return num1 * num2;
  }
}
var test = pow(3)(2);
console.log(test);
