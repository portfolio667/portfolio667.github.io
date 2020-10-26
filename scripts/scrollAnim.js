const animItems = document.querySelectorAll('.animItems')

if (animItems.length > 0) {
    window.addEventListener('scroll', scrollAnim)
    function scrollAnim(){
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 4

            let animStartPoint = window.innerHeight - animItemHeight / animStart
            if (animItemHeight > window.innerHeight) {
                animStartPoint = window.innerHeight - window.innerHeight / animStart
            }
            if ((pageYOffset > animItemOffset - animStartPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_activeAnim')
            }
            else{
                if (!animItem.classList.contains("anim-not-repeat")) {
                    animItem.classList.remove('_activeAnim')    
                }
                    
            }
        }
    }
}
function offset(el){
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}    
}
scrollAnim()
