let childBtn = document.querySelector('.accordion-link > .for-child');
let familyBtn = document.querySelector('.accordion-link > .for-family');
let adultdBtn = document.querySelector('.accordion-link > .for-adult');

let childExp = document.querySelector('#for-child');
let familyExp = document.querySelector('#for-family');
let adultdExp = document.querySelector('#for-adult');


childBtn.addEventListener('click',function(e){

    childBtn.classList.add('active');
    familyBtn.classList.remove('active');
    adultdBtn.classList.remove('active');

    childExp.classList.remove('display-none');
    childExp.classList.add('display-block');
    familyExp.classList.remove('display-block');
    familyExp.classList.add('display-none');
    adultdExp.classList.remove('display-block');
    adultdExp.classList.add('display-none');
    e.preventDefault();
});


familyBtn.addEventListener('click',function(e){
    
    childBtn.classList.remove('active');
    familyBtn.classList.add('active');
    adultdBtn.classList.remove('active');

    childExp.classList.remove('display-block');
    childExp.classList.add('display-none');
    familyExp.classList.remove('display-none');
    familyExp.classList.add('display-block');
    adultdExp.classList.remove('display-block');
    adultdExp.classList.add('display-none');


    e.preventDefault();
});



adultdBtn.addEventListener('click',function(e){
    
    childBtn.classList.remove('active');
    familyBtn.classList.remove('active');
    adultdBtn.classList.add('active');

    childExp.classList.remove('display-block');
    childExp.classList.add('display-none');
    familyExp.classList.remove('display-block');
    familyExp.classList.add('display-none');
    adultdExp.classList.remove('display-none');
    adultdExp.classList.add('display-block');
    e.preventDefault();
});


// making frequently answer question
document.querySelector('.faq-container').addEventListener('click',function(e){
    if(e.target.classList.contains('open-answer')){
        // let explane = e.target
        const question = e.target.parentElement;
        const explane = e.target.parentElement.nextElementSibling;
        explane.classList.toggle('faq-hide');
        question.classList.toggle('bg-primary');
        e.target.classList.toggle('txt-white');
    }
    
});