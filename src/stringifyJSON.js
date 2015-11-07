// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var arr = [];
  var objArray = [];

  if(typeof(obj) === "number" || obj === null || typeof(obj) === "boolean") {
  	return String(obj);

  } else if(typeof(obj) === "string") {	
	return '"'+ obj + '"';

  } else if(Array.isArray(obj)) {
	  obj.forEach(function(val) {
	  	arr.push(stringifyJSON(val));
	  });
	  return "[" + arr + "]";

  } else if(obj instanceof Object) {
  	for(var key in obj) {
		var keyString = '"' + key + '":';
	    var value = obj[key];

	    if (value instanceof Function || typeof value === undefined) {
	        objArray.push('');

	    } else if (value instanceof Object) {
	        objArray.push(keyString + stringifyJSON(value));

	    } else if (typeof value === 'string') {
	        objArray.push(keyString + '"' + value + '"');

	    } else if (typeof value === 'boolean' || typeof keValOut === 'number' || value === null) {
	        objArray.push(keyString + value);
	    }
  	}
  	return "{" + objArray + "}";
  }
};