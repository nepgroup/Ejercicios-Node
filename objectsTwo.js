function concatenarObj (valor) {
	var str = '';
	for (key in valor){
		str = str + valor[key];
	}
	return str;
}