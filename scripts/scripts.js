//Popup behavior

const openP = document.querySelector('.popUpOpener');
const popup = document.querySelector('.popUp');
const close = document.querySelector('.close');


openP.addEventListener("click" , () => {
    popup.style.display = "block"
});

close.addEventListener("click" , () => {
    popup.style.display = "none"
});


//Form

const form = document.querySelector('form');
const thanks = document.querySelector('.thankyou');
const error = document.querySelector('.error')
const patternText = /^[a-zA-Z1-9]{3,}$/;
const patternEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

form.addEventListener("submit" , (e) => {
    e.preventDefault();

//Form Validation

    const name = document.getElementById('name');
    const last = document.getElementById('last');
    const email = document.getElementById('email');

    let resultName = patternText.test(name.value);
    let resultLast = patternText.test(last.value);
    let resultEmail = patternEmail.test(email.value);

    if (resultName === true && resultLast === true && resultEmail === false){
            error.style.display = 'block';
            error.innerHTML = "Something is wrong with our email"
        }
//Form success
        else if(resultName === true && resultLast === true && resultEmail === true) {
            form.classList.add('hide')
            thanks.classList.remove('hide')
        }
        else {
            error.style.display = 'block';
        }
    });


