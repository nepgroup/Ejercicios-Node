function agregarIndice (string) {
	var str = '';
	for (var i = 0; i < string.length; i++) {
		str = str+string[i]+[i];
	};
	return str;
}