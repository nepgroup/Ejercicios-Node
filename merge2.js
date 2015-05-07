function sumarPropiedades (obj) {
	var counter = 0;
	for (key in obj){
		counter = counter+obj[key];
	}
	return counter;
}

var obj = {a: 1, b:1,c:2,d:3};
console.log(sumarPropiedades(obj)); // 7