function Person(name,age){
  var _name = name;
  var _age = age;
  return{
    getName:function(){ return _name;},
    getAge: function(){ return _age;},
    setAge: function(x){ return _age = x;}
  };
}
var person = Person("test", 20);
console.log(person.getName());
console.log(person.getAge());
person.setAge(25);
console.log(person.getAge());
