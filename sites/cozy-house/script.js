let width_slider = document.querySelector('.slider-content')
let pet = document.querySelectorAll('.slider-pets')
let l_arr = document.querySelector('.l_arrow') 
let r_arr = document.querySelector('.r_arrow') 
let right = 0;


function scrollTo(e,toWhat){
	e.preventDefault()
	target = document.querySelector(toWhat)
	console.log(target)
	target.scrollIntoView({block: "center", behavior: "smooth"})
}

const sliderLeft = () => {
	if (right === 0) {
		right = 660
	}
	else right = right - 330
	width_slider.style.right = right + 'px';
}

const sliderRight = () => {
	if (right === 660) {
		right = 0
	}
	else right = right + 330
	width_slider.style.right = right + 'px';
}
l_arr.addEventListener('click', sliderLeft)
r_arr.addEventListener('click', sliderRight)
for (var i = 0; i < pet.length; i++) {
	pet[i].addEventListener('mousemove', function(){
	this.querySelector('a').style.background = '#f1cdb3'
})
	pet[i].addEventListener('mouseout', function(){
	this.querySelector('a').style.background = '#fafafa'
	})
}
document.querySelector('#butAbout').addEventListener('click', function()
	{
		scrollTo(event,'.about')
	})
document.querySelector('#butOur').addEventListener('click', function()
	{
		scrollTo(event,'.pets')
	})
document.querySelector('#butHelp').addEventListener('click', function()
	{
		scrollTo(event,'.help')
	})
document.querySelector('#butCont').addEventListener('click', function()
	{
		scrollTo(event,'.footer')
	})
// document.addEventListener('mousemove', parallax)