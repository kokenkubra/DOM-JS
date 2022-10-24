// first task
const inputFirstname = document.querySelector('#firstname');
const spanFirstname = document.querySelector('#display-firstname');


const copiename = () => {
   
    spanFirstname.textContent = inputFirstname.value;
    console.log(spanFirstname.textContent);

}

inputFirstname.addEventListener('keyup', copiename);

// second task
const inputAge = document.querySelector('#age');
const sectionCondition = document.querySelector('#a-hard-truth');

const ageCondition = () => {
    if (inputAge.value >= 18) {
        sectionCondition.style.visibility = "visible";
    }else{
        sectionCondition.style.visibility = "hidden";
    }

}
inputAge.addEventListener('keyup', ageCondition);

// third task

const inputPass = document.querySelector('#pwd');
const inputSecPass = document.querySelector('#pwd-confirm');

const tooshort = () => {
    if(inputPass.value.length  <= 6){
        inputPass.style.backgroundDark = 'red';
        console.log('hello');}
        else{
            inputPass.style.backgroundColor = 'white';
        }
}
const passMatch = () =>{
    if(inputPass.value == inputSecPass.value){
        inputSecPass.style.backgroundColor = 'green';
    }else{inputSecPass.style.backgroundColor = 'red';}

}

inputPass.addEventListener('keyup', tooshort);
inputSecPass.addEventListener('keyup', passMatch);

// fourth task

const select = document.querySelector('#toggle-darkmode');
const dark = select.childNodes[0];
const light = select.childNodes[1];

const ColorMode = (event) => {
   if(event.target.value == 'dark'){
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
   }
   if(event.target.value == 'light'){
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
   }
}

select.addEventListener('change', ColorMode)