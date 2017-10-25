function norm(x){
  var sum2 = sumSqure();
  console.log(arguments.length);
  return Math.sqrt(sum2);
  function sumSqure(){
    sum = 0;
    for(var i=0; i<x.length;i++) sum += x[i]*x[i];
    return sum;
  }
}
var a =[2,1,3,5,7];
var n = norm(a);
console.log(n);
