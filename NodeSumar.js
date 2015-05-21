var array = process.argv;
var obj = array.splice(2); // array.slice(0, process.argv);
var counter = 0;
for (var i = 0; i < obj.length; i++) { // For Each
	counter = counter+parseInt(obj[i]); //Number()
};
console.log(counter);