let petButton = document.querySelectorAll('.petButton')

function clearInput(){
let inputs = document.querySelectorAll('input')
for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = ''
}
}

function petFilter(e){
    for (let i = 0; i < petButton.length; i++) {
        petButton[i].addEventListener('click', function(e){
            e.preventDefault()
            petButton[0].className = 'petButton'
            petButton[1].className = 'petButton'
            petButton[i].className = 'petButton-activate'
            if (petButton[i].id == 'dog') {
                document.querySelector('.dogs').style.display = 'grid';
                document.querySelector('.cats').style.display = 'none';
                document.querySelector('#count').textContent  = document.querySelectorAll('.dogs .thirdSec-petBorder').length;
            }
            if (petButton[i].id == 'cat') {
                document.querySelector('.dogs').style.display = 'none'
                document.querySelector('.cats').style.display = 'grid'
                document.querySelector('#count').textContent  = document.querySelectorAll('.cats .thirdSec-petBorder').length;
            }
        })
    }
}



petFilter()
clearInput()