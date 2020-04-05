let sliderItemWidth = Math.round(((window.innerWidth / 3) / 10) - 0.5) * 10;
let sliderWidth
let sliderItem = document.querySelectorAll('.slider-item')
let sliderContent =  document.querySelector('.slider-content')

let switcher = document.querySelectorAll('.fourthsec-switch div')

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
	console.log(target)
	target.scrollIntoView({block: "center", behavior: "smooth"})
}

document.querySelectorAll('.header-navigation-list a')[0].addEventListener('click', function(){
    scrollTo(event, '.secSec')
})
document.querySelectorAll('.header-navigation-list a')[1].addEventListener('click', function(){
    scrollTo(event, '.thirdSec')
})
document.querySelectorAll('.header-navigation-list a')[2].addEventListener('click', function(){
    scrollTo(event, '.fourthSec')
})

function switching(num){
    switch (num) {
        case 0:
            switcher[1].className = 'non-active'
            switcher[0].className = 'active'
            break;
        case sliderItemWidth:
            switcher[1].className = 'active'
            switcher[0].className = 'non-active'
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
    if (right ==  (sliderItem.length - 3) * sliderItemWidth){
        right = 0
    }
    else right += sliderItemWidth
    sliderContent.style.right = right + 'px'
    switching(right)
}
function leftSlide(e){
    e.preventDefault()
    if (right ==  0){
        right = (sliderItem.length - 3) * sliderItemWidth
    }
    else right -= sliderItemWidth
    sliderContent.style.right = right + 'px'
    switching(right)
}


function slide(){
    rightArr.addEventListener('click', rightSlide)
    leftArr.addEventListener('click', leftSlide)
}


clearInp()
slide()
setWidth()