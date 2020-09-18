let arrowGoDown = document.querySelector('.header-godown')
let goDownPoint = document.querySelector('.thirdSec')

function goTo(e){
    e.preventDefault()
    goDownPoint.scrollIntoView({behavior: "smooth"});
}
arrowGoDown.addEventListener('click', goTo)

let firstSliderContent = document.querySelector('.thirdSec-sliderContent')
let firstSliderItem = document.querySelectorAll('.thirdSec-sliderItem')
let fisrtSliderSwitcher = document.querySelectorAll('.thirdSec-switch')


function setWidth(item, sliderContent){
    let contentWidth = item[0].offsetWidth  * (item.length + 1)
    sliderContent.style.width = contentWidth + "px"
}
let firstLeft = 0
let firstCounter = 0
function firstSlider() {
    if (firstLeft === (Math.round(firstSliderItem[0].offsetWidth)) * 2){
        firstLeft = 0
        firstCounter = 0
        fisrtSliderSwitcher[fisrtSliderSwitcher.length - 1].classList.remove('_active')
        fisrtSliderSwitcher[firstCounter].classList.add('_active')
    }
    else{
        firstLeft = firstLeft + (Math.round(firstSliderItem[0].offsetWidth))
        firstCounter ++
        fisrtSliderSwitcher[firstCounter - 1].classList.remove('_active')
        fisrtSliderSwitcher[firstCounter].classList.add('_active')
    }    
    firstSliderContent.style.left =- firstLeft + 'px'
}


let secondSliderContent = document.querySelector('.fourthSec-sliderContent')
let secondSliderItem = document.querySelectorAll('.fourthSec-sliderItem')
let arrowRight = document.querySelector('.fourthSec-sliderArrowRight')
let arrowLeft = document.querySelector('.fourthSec-sliderArrowLeft')
let secondLeft = 0

function slideLeft(){
    if(secondLeft === 0){
        secondLeft = secondSliderItem[0].offsetWidth * 2
        secondSliderContent.style.left =- secondLeft + "px" 
    }
    else{ 
        secondLeft = secondLeft - secondSliderItem[0].offsetWidth
        secondSliderContent.style.left =- secondLeft + "px" 
    }    
    
}

function slideRight(){
    if(secondLeft === secondSliderItem[0].offsetWidth * 2){
        secondLeft = 0
    }
    else secondLeft = secondLeft + secondSliderItem[0].offsetWidth
    secondSliderContent.style.left =- secondLeft + "px" 
}

let faceNav = document.querySelectorAll('.fourthSec-nav p')
let mainTextItem = document.querySelectorAll('.fourthSec-mainText div')
let underSliderText = document.querySelectorAll('.underSliderText')

for (let i = 0; i < faceNav.length; i++) {

    faceNav[i].addEventListener('click', function(e){
        e.preventDefault()
        for (let k = 0; k < mainTextItem.length; k++) {
            if(k != i){
                mainTextItem[k].className = "mainText"
                faceNav[k].className = "fourthSec-navItem"
                underSliderText[k].className = "underSliderText"
            }
            else{
                mainTextItem[k].classList.add('_active')
                faceNav[k].classList.add('_active')
                underSliderText[k].classList.add('_active')
            } 
        } 
    })
}

let navigation = document.querySelector('.fourthSec-nav')
let navBurger = document.querySelector('.navBurger')
let burgerCounter = 0

function burgerMenu(){
    if (burgerCounter === 0 ) {
        navigation.classList.add('_active')
        navBurger.classList.add('_active')
        document.querySelector('.fourthSec').style.height = "1750px"
        document.querySelector('.fourthSec-mainContent').style.marginTop = "300px"
        burgerCounter++
    }
    else{
        navigation.classList.remove('_active')
        navBurger.classList.remove('_active')
        document.querySelector('.fourthSec').style.height = "1550px"
        document.querySelector('.fourthSec-mainContent').style.marginTop = "0px"
        burgerCounter--
    }
}


navBurger.addEventListener('click', burgerMenu)

arrowLeft.addEventListener('click', slideLeft)
arrowRight.addEventListener('click', slideRight)


setInterval(() => {
    firstSlider()
}, 5000);

setWidth(secondSliderItem, secondSliderContent)
setWidth(firstSliderItem, firstSliderContent)