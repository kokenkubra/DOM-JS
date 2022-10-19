// -- Navigate  1-- //

/*const ol = document.querySelector("ol");

const lastOlChild = ol.lastElementChild;

ol.prepend(lastOlChild);*/

//append = mettre à  la fin
//prepend = mettre au début

// -- Navigate  2 -- //


var secondparent = document.querySelectorAll("section")[1];
var thirdparent = document.querySelectorAll("section")[2];

var secondchild = secondparent.childNodes[1];
var thirdchild = thirdparent.childNodes[1].childNodes[1];

console.log(secondparent);
console.log(thirdparent);
console.log(secondchild);
console.log(thirdchild);

removeChild(secondchild)
secondparent.prepend(thirdchild);
//removeChild(thirdchild)
//thirdparent.prepend(secondchild);

