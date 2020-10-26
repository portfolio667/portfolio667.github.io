let sliderItemWidth = Math.round(((window.innerWidth) / 10) - 0.45) * 10;
let sliderWidth
let sliderItem = document.querySelectorAll('.slider-item')
let sliderContent =  document.querySelector('.slider-content')

let downArr = document.querySelector('#down-arrow')
let secondSec = document.querySelector('.secSec')
let secondSecTxt = document.querySelector('.secSec-mainText')

let switcher = document.querySelectorAll('.switchers div')

let rightArr = document.querySelector('.rightArr')
let leftArr = document.querySelector('.leftArr')
let right = 0



function clearInp(){
    let areasArr = []
    let all = []
    let inputs = document.querySelectorAll('input') 
    let areas = document.querySelectorAll('textarea')
    for (let i = 0; i < inputs.length; i++) {
        all[i] = inputs[i]
        for (let j = 0; j < areas.length; j++) {
            areasArr[j] = areas[j]
        }
    }
    all = all.concat(areasArr)
    for (let i = 0; i < all.length; i++) {
        all[i].value = '' 
    }
}

function scrollTo(e,toWhat){
	e.preventDefault()
	target = document.querySelector(toWhat)
	target.scrollIntoView({block: "center", behavior: "smooth"})
}

document.querySelectorAll('.nav a')[0].addEventListener('click', function(){
    scrollTo(event, '.secSec')
})
document.querySelectorAll('.nav a')[1].addEventListener('click', function(){
    scrollTo(event, '.thirdSec')
})
document.querySelectorAll('.nav a')[2].addEventListener('click', function(){
    scrollTo(event, '.fourthSec')
})


function switching(num){
    switch (num) {
        case 0:
            for (let i = 0; i < switcher.length; i++) {
                const el = switcher[i];
                el.className = 'non-active'
            }
            switcher[0].className = 'active'
            break;
        case sliderItemWidth:
            for (let i = 0; i < switcher.length; i++) {
                const el = switcher[i];
                el.className = 'non-active'
            }
            switcher[1].className = 'active'
            break;    
        case sliderItemWidth*2:
            for (let i = 0; i < switcher.length; i++) {
                const el = switcher[i];
                el.className = 'non-active'
            }
            switcher[2].className = 'active'
            break; 
        case sliderItemWidth*3:
                for (let i = 0; i < switcher.length; i++) {
                    const el = switcher[i];
                    el.className = 'non-active'
                }
                switcher[3].className = 'active'
            break;                      
        default:
            break;
    }
}

function setWidth(){
    for (let i = 0; i < sliderItem.length; i++) {
        sliderItem[i].style.width = sliderItemWidth + 'px'
    }
    sliderWidth = sliderItemWidth * sliderItem.length
    sliderContent.style.width = sliderWidth + 'px'
}

function rightSlide(e){
    e.preventDefault()
    if (right ==  (sliderItem.length - 1) * sliderItemWidth){
        right = 0
    }
    else right += sliderItemWidth
    sliderContent.style.right = right + 'px'
    switching(right)
}
function leftSlide(e){
    e.preventDefault()
    if (right ==  0){
        right = (sliderItem.length - 1) * sliderItemWidth
    }
    else right -= sliderItemWidth
    sliderContent.style.right = right + 'px'
    switching(right)
}


function slide(){
    rightArr.addEventListener('click', rightSlide)
    leftArr.addEventListener('click', leftSlide)
}
function skills(e){
    e.preventDefault()
    if (secondSec.className == 'openSec mobile') {
        secondSec.className = 'closeSec mobile'
        downArr.style.transform = 'none'
    }
    else{ 
        secondSec.className = 'openSec mobile'
        downArr.style.transform = 'scale(1, -1)'
    }    
}

let burgerElem = document.querySelector('.burger__menu')
let nav = document.querySelector('.nav')
function burger(){
    if(nav.className == 'nav nav-nonactive'){
        burgerElem.classList.toggle('active')
        nav.className = 'nav nav-active'
        document.querySelector('.header-maintext').style.opacity = '0'
    }
    else if (nav.className == 'nav nav-active'){
        nav.className = 'nav nav-nonactive'
        burgerElem.classList.remove('active')
        document.querySelector('.header').className = 'header'
        document.querySelector('.header-maintext').style.opacity = '1'
    }
}


// popup
let popupButton = document.querySelector('.header-start')
let popup = document.querySelector('.popup')
let popupClose = document.querySelector('.popup__close')
function popupFunc(){
    if(!popup.classList.contains('_active')){
        popup.classList.add('_active')
    }
}
function popupCloseFunc(){
    if(popup.classList.contains('_active')){
        popup.classList.remove('_active')
    }
        
}

popupClose.addEventListener('click', popupCloseFunc)
popupButton.addEventListener('click', popupFunc)
burgerElem.addEventListener('click', burger)
downArr.addEventListener('click', skills)
clearInp()
slide()
setWidth()

