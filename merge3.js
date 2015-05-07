function poseenMismasPropiedades (obj1,obj2) {
	if (Object.keys(obj1).length === Object.keys(obj2).length) {
		for (key in obj1) {
			if (obj1.hasOwnProperty(key) === obj2.hasOwnProperty(key)) {
				if (obj1[key] === obj2[key]) {
					return true;
				} else{
					return false;
				};
			} else{
				return false;
			};
		}
	} else{
		return false;
	};
}

console.log(poseenMismasPropiedades({ a: 1}, { z: "sarasa"}));