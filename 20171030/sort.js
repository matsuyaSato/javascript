function compare(key){
  return function(a,b){
    console.log( 'a :: ' + a.age);
    console.log('b :: ' + b.age);
    return a[key] - b[key];
  }
}
var persons = [
  {name: "Tom", age:17},
  {name: "Huck", age:18},
  {name: "Becky", age: 16}
];
persons.sort(compare("age"));
