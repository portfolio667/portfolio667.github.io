let progrLineOffset = document.querySelector('.fSec-progressLine').offsetTop
let progrLine = document.querySelector('.fSec-progressLine')
let circles = document.querySelectorAll('.fSec-circle')

function progressing(){
    let winScroll = document.documentElement.scrollTop
    if(winScroll >= progrLineOffset+150){
        progrLine.className = 'fSec-progressLine-animate'
        setTimeout(() => {
            circles[0].className = 'fSec-circle fCircle smallC-animate' 
        }, 1200)
        setTimeout(() => {
            circles[1].className = 'fSec-circle sCircle smallC-animate' 
        }, 1700)
        setTimeout(() => {
            circles[2].className = 'fSec-circle tCircle bigC-animate' 
        }, 3200)
        setTimeout(() => {
            circles[3].className = 'fSec-circle foCircle smallC-animate' 
        }, 3800)
        
    }
}

let burger = document.querySelector('.burger')
let navWrapper = document.querySelector('.nav-wrapper')


function burgerMenu(){
    if(!navWrapper.classList.contains('_active')){
        navWrapper.classList.add('_active')
        burger.classList.add('_active')
    }
    else{
        navWrapper.classList.remove('_active')
        burger.classList.remove('_active')
    } 
}

burger.addEventListener('click', burgerMenu)
window.addEventListener('scroll', progressing)
