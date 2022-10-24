// task one
const li = document.body.childNodes[3];


// task two

const ul = document.querySelector("ul").childNodes;

for(const elem of ul) {

   /* for (let index = 0; index < li.childNodes; index++) {
        const element = childNodes[index];
        
        for (let i = 0; i < li.childNodes; i++) {
            const elem = childNodes[i];
            if (element != elem && element.textContent.isEqualNode(elem.textContent)) {
                element.li.removeChild(element);
            }
        }
    }*/
    
    if(elem.nodeType === 1){
         if(elem.textContent == 'Fast and Furious'){
            
            console.log(elem);
    // task three        
            li.prepend(elem);
 // task four
            elem.classList.add("important");
 // task six
            elem.addEventListener('click', clickList= () => {
                alert(" The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family");
            });
        
        }else{
    // task five
            elem.addEventListener('click', clickList= () => {
            alert(elem.textContent);
        });}
    }
}
document.body.addEventListener('keyup', function(e){
    if(e.key == "r"){
      console.log('r key');
    }
});
//task nine
var new_div = document.createElement('div');
var newnode = document.body.insertBefore(new_div, li);


// task ten
const new_select = document.createElement('select');
const optionOne = document.createElement('option');
const textOne = document.createTextNode('important franchises');
optionOne.appendChild(textOne);
const optionTwo = document.createElement('option');
const textTwo = document.createTextNode('normal franchises');
optionTwo.appendChild(textTwo);
new_select.appendChild(optionOne);
new_select.appendChild(optionTwo);
new_div.appendChild(new_select);

// final tasks
const Showlist = (event) => {
    li.style.visibility = 'hidden';
    const ull = document.querySelector('.important');
   
    if(event.target.value == 'important franchises'){
     
     ull.style.visibility = 'visible';
     
    }
    if(event.target.value == 'normal franchises'){
        li.style.visibility = 'visible';
        ull.style.visibility = 'hidden';
    }
 }

new_select.addEventListener('change', Showlist);
