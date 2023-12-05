const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.sg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value===''|| emailInput.value===''){
        msg.classList.add('error');
        msg.innerHTML='Please enter fields';
        setTimeOut(() => msg.remove(),3000);
    }else{
        console.log('success');
    
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));

    userList.appendChild(li);

    //clear fields
    nameInput.value='';
    emailInput.value='';

    }

}
