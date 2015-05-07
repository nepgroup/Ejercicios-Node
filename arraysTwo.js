function transformarATipos (valor) {
	var arr = [];
	for (var i = 0; i < valor.length; i++) {
		console.log(Object.prototype.toString.call(valor[i]));
		arr.push(typeof (valor[i]));
	};
	return arr;
}