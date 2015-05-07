function merge(obj1,obj2){
    var obj3 = {};
    for (var key in obj1) { obj3[key] = obj1[key]; }
    for (var key in obj2) { obj3[key] = obj2[key]; }
    return obj3;
}

var foo = { a: 1};
var bar = { z: "sarasa"};
var res = merge(foo, bar);
console.log(res.a, res.z); // 1 "sarasa"
console.log(foo === res, bar === res); // false false