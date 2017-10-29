function * gen(){
  yield 1;
  yield 2;
  yield 3;
}
var iter = gen();
console.log(iter.next());
console.log(iter.next());


function* createNum(from,to){
  while( from <= to) yield from++;
}
var iter = createNum(10,20);
console.log(iter);
