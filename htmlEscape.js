function htmlEscape(strings, ...values){
  var result = strings[0];
  for(var i=0; i<values.length; i++){
    result += escape(values[i]) + strings[i+1];
  }
  console.log(arguments.length);
  return result;
  function escape(s){
    return s.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#039;")
    .replace(/"/g, "&quot;")
    .replace(/`/g, "&#096;");
  }
}
var userinput = "<script>alert('test');</script>";
var message = htmlEscape`<p>${userinput}</p>`;
console.log(message);

function test(test, ...value){
  console.log(test);

  console.log(value);
}
var num = 1;
test`<p>${num}</p>`;
