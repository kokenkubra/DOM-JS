// -- show time and color --//
const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())

}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

// -- duplicate on click + add li --//



const clonesquare = () => {
    var new_row = document.createElement('div');
    new_row.className = "displayedsquare green";
    var parentofnew_row = document.querySelector("section");
    parentofnew_row.appendChild(new_row);
    var new_li = document.createElement('li');
    const parent = document.querySelectorAll('section')[2].childNodes[3];
    new_li.append(getElapsedTime() + " created a new green square");
    parent.appendChild(new_li);
}
const clonesquarevi = () => {
    var new_row = document.createElement('div');
    new_row.className = "displayedsquare violet";
    var parentofnew_row = document.querySelector("section");
    parentofnew_row.appendChild(new_row);
    var new_li = document.createElement('li');
    const parent = document.querySelectorAll('section')[2].childNodes[3];
    new_li.append(getElapsedTime() + " created a new violet square");
    parent.appendChild(new_li);
   
}
const clonesquareor = () => {
    var new_row = document.createElement('div');
    new_row.className = "displayedsquare orange";
    var parentofnew_row = document.querySelector("section");
    parentofnew_row.appendChild(new_row);
    var new_li = document.createElement('li');
    const parent = document.querySelectorAll('section')[2].childNodes[3];
    new_li.append(getElapsedTime() + " created a new orange square");
    parent.appendChild(new_li);

}
const squaregreen = document.getElementsByClassName("actionsquare")[0];
const squarevi = document.getElementsByClassName("actionsquare")[1];
const squareor = document.getElementsByClassName("actionsquare")[2];

squaregreen.addEventListener('click', clonesquare);
squarevi.addEventListener('click', clonesquarevi);
squareor.addEventListener('click', clonesquareor);

// -- add eventlistener to body --//
document.body.addEventListener('keypress', function(e){
  
  if (e.code == "Space") {
    console.log('right key spacebar');
  
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
   document.body.style.backgroundColor = "#" + randomColor;
   
   var new_li = document.createElement('li');

   const parent = document.querySelectorAll('section')[2].childNodes[3];
   new_li.append(getElapsedTime() + " spacebar is used");
   parent.appendChild(new_li);

  }if(e.key == "l"){
    console.log('l key');

  const parent = document.querySelectorAll('section')[2].childNodes[3];
  parent.removeChild(parent.lastChild);

  }if(e.key == "s"){
    console.log('s key');
    var parentofnew_row = document.querySelector("section");
    parentofnew_row.removeChild(parentofnew_row.lastChild);
  }else{
    console.log('not right key');
  }
});
  document.querySelector("section").addEventListener("click", function(){
   
   const parent = document.querySelector("section").lastChild;
 
  switch (parent.className) {
    case "displayedsquare green":
      alert("green");
      break;
    case "displayedsquare violet":
      alert("violet");
      break;
    case "displayedsquare orange":
      alert("orange");
      break;
    default:
      test.innerHTML = "";
  }

});

