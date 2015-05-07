function contarOcurrencias (string, parametro) {
	var counter = 0;
	position = string.indexOf(parametro);
	while ( position != -1 ) {
	   counter++;
	   position = string.indexOf(parametro,position+1);
	}
	return counter;
}