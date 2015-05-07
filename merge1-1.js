function merge(){
    var obj = {};
    for (var i = 0; i < arguments.length; i++) {
    	for (key in arguments[i]) {
            if (arguments[i].hasOwnProperty(key)) {
                obj[key] = arguments[i][key];
            }
        }
    };
    return obj;
}

console.log(merge({a: 1}, {z: "sarasa"}, {b: true}, {b: false}));