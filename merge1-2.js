function merge(orig){
    var obj = {};
    for (var key in orig) { obj[key] = orig[key]; }
    return obj;
}

var orig = {a: 1, z: "sarasa", b: true};
console.log(merge(orig));