// -- create 1 and 2 not finished -- //
/*const sect = document.createElement("section");
const para = document.createElement("p");
const node = document.createTextNode("lerner 1");
var element = document.getElementById("article");


console.log(para.appendChild(node));
console.log(sect.appendChild(para));
console.log(element.appendChild(sect));

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
   para.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
    if(color.innerHTML <= 'r(128)')
    {
        console.log('YES');
    }
}
  setBg();*/

// -- create 3 not finished -- //

var body = document.querySelector('body');
for (var i = body.children.length; i >= 0; i--) {
    body.appendChild(body.children[Math.random() * i | 0]);
}