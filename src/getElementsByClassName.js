// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var elementsArr = [];
  function findElement(parent, foundElements, className) {
  	var node = parent;
  	if(node.nodeType == document.ELEMENT_NODE) { 
	  	if(node.classList.contains(className)) {
	  		elementsArr.push(node);
	  	} 
		for(var i = 0; i < node.children.length; i++) {
	  		if(node.children[i].classList.contains(className)) {
	  			elementsArr.push(node.children[i]);
	  		}
	  		//Recurse if the grandchild is present
	  		if(node.children[i].children.length > 0) {
		  		findElement(node.children[i], elementsArr, className)
		  	}
	  	}
  	}
  }
  findElement(document.body, elementsArr, className);
  console.log(elementsArr);
  return elementsArr;
}