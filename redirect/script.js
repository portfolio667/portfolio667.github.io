let loader = document.querySelectorAll('.loading')
let i = 0

function loading(){
        setInterval(function(){
            if(i >= loader.length){
                i = 0
            }
            loader[i].classList.toggle('active')
            i++
        }, 200)
}

loading()