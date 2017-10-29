function makeIterator(array){
  var index = 0;
  return{
    next: function(){
      if(index < array.length){
        return{ value:array[index++], done: false};
      } else {
        return { value: undifined, done: true};
      }
    }
  };
}
var iter = makeIterator(["A","B","C"]);
console.log(iter.next());

var a = [2,4,5,];
var iter = a[Symbol.iterator]();
while(true){
  var iteratorResult = iter.next();
  if(iteratorResult.done == true) break;
  var v = iteratorResult.value;
  console.log(v);
}

var a =[5,4,3];
for(var v of a) console.log(v);


var iterable ={};
iterable[Symbol.iterator] = function(){ return iter;};
for(var v of iterable ) console.log(v);
