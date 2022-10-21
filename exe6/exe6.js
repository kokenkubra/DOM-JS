const inputFirstname = document.querySelectorAll('section')[0].childNodes[1];
const spanFirstname = document.querySelectorAll('section')[0].lastChild;
console.log(spanFirstname);
spanFirstname.insertAdjacentText('event');
console.log(spanFirstname);
/*inputFirstname.addEventListener("keyup", (event) => {
   /* if (event.isComposing || event.keyCode === 229) {
      return;
    }*/
    // do something
   /* spanFirstname.insertAdjacentText('event');
    console.log(spanFirstname);
  });
  $/*/
