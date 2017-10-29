function memorize(f){
  var cache = {};
  return function(){
    var key = "";
    for(var i=0; i<arguments.length; i++) key += arguments[i] + ",";
    if(chche[key] == undefined) chche[key] = f.apply(null,arguments);
    return chche[key];
  }
}

console.log(memorize(function(n){
  if(n<2) return n;

}));
