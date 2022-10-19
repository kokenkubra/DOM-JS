

document.title = "Modifying the DOM";

console.log(document.title);

/*const pink = () => {
  
    document.body.style.backgroundColor = "#FF69B4";
}
pink();*/
/*const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  setBg();*/

//const myElement = document.getElementById('foo');

for (const child of document.body.children) {
  console.log(child.tagName);
}