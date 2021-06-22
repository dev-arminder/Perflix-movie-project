// making fomr working 
const createAccountBtn = document.querySelector('.create-account-btn');
const signInBtn = document.querySelector('.sign-in-btn');
const createAccountInfo = document.querySelector('#create-account-info');
const signInInfo = document.querySelector('#sign-in-info');

// console.log(createAccountBtn,createAccountInfo);
// console.log(signInBtn,signInInfo);

createAccountBtn.addEventListener('click', function () {
    createAccountBtn.classList.add('active');
    createAccountInfo.classList.add('display-block');
    createAccountInfo.classList.remove('display-none');

    signInBtn.classList.remove('active');
    signInInfo.classList.remove('display-block');
    signInInfo.classList.add('display-none');
});

signInBtn.addEventListener('click', function () {
    createAccountBtn.classList.remove('active');
    createAccountInfo.classList.add('display-none');
    createAccountInfo.classList.remove('display-block');
    
    signInBtn.classList.add('active');
    signInInfo.classList.add('display-block');
    signInInfo.classList.remove('display-none');
});