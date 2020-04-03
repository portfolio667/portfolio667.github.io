let sliderDiv = document.querySelector('.house-slider-content')
let rightArrow = document.querySelector('.rightArrow')
let leftArrow = document.querySelector('.leftArrow')
let inputs = document.querySelectorAll('input')
let map = document.querySelector('.map')
let right = 0;

function clearInp(){
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = ''
    }
}

function slideRight(e){
    e.preventDefault()
    if (right == 360 * 3){
        right = 0
    }
    else right += 360
    sliderDiv.style.right = right + 'px' 
}
function slideLeft(e){
    e.preventDefault()
    if (right == 0){
        right = 360 * 3
    }
    else right -= 360
    sliderDiv.style.right = right + 'px' 
}
function maps(){
    map.addEventListener('click', function(){
        map.children[0].removeAttribute('style')
        title.style.display = 'none'
    })    
    let title = document.createElement('div')
    title.className = 'mapTitle'
    title.textContent = 'Кликните для активации'
    map.appendChild(title)
    map.addEventListener('mousemove', function(){
        title.style.display = 'block'
        if(event.offsetY > 10) title.style.top = event.offsetY + 20 + 'px'
        if(event.offsetX > 10) title.style.left = event.offsetX + 20 + 'px'
    })
    map.addEventListener('mouseleave', function(){
        title.style.display = 'none'
        map.children[0].setAttribute('style', 'pointer-events: none;')
    })
}    
leftArrow.addEventListener('click', slideLeft)
rightArrow.addEventListener('click', slideRight)
clearInp()
maps()