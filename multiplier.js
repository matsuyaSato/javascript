function makeMultiplier(x){
  return function(y){
    return x * y;
  };
}
var multi2 = makeMultiplier(2);
var multi12 = makeMultiplier(12);
console.log(multi2(5));
console.log(multi12(3));
