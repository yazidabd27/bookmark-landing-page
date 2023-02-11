// features

const features=document.querySelectorAll('#features ul li');
const tabs=document.querySelectorAll('#features .tab');

features.forEach(feature=>{
    feature.addEventListener('click', switchActiveState);
    feature.addEventListener('click', switchTabs);
})

function switchActiveState(){
    features.forEach(feature=>{
        feature.classList.remove('active')
    })
    this.classList.add('active')
}

function switchTabs(){
    tabs.forEach(tab=>{
        tab.classList.add('d-none');
    })
    document.querySelector(this.dataset.tab).classList.remove('d-none')
}

//questinos

const questions=document.querySelectorAll('.question-title');
const answers=document.querySelectorAll('.answer');

questions.forEach((question, index)=>{
    question.onclick=()=>{
        if(question.classList.contains('droped')){
            question.classList.remove('droped');
            answers[index].classList.add('d-none');
        }else{
            question.classList.add('droped');
            answers[index].classList.remove('d-none');
        }
    }
})


// navbar

const burgerIcon=document.querySelector('.burger-icon');
const closeIcon=document.querySelector('.close-icon');
const navBar=document.querySelector('header nav');

burgerIcon.onclick=()=>{
    navBar.classList.add('show');
}

closeIcon.onclick=()=>{
    navBar.classList.remove('show');
}

// input

const email=document.querySelector('#contact .email');
const textInput=document.querySelector('#contact .email input');
const form=document.querySelector('#contact form');

form.onsubmit=()=>{
    let clientEmail=textInput.value;
    let emailRe=/\w+@\w+\.\w+/;
    if(!emailRe.test(clientEmail)){
        email.classList.add('error');
        console.log(emailRe.test(clientEmail))
        return false
    }
}
