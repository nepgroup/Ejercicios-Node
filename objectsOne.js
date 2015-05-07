function aArrayDeValores (valor) {
	var arr = [];
	for (key in valor){
		arr.push(valor[key]);
	}
	return arr;
}