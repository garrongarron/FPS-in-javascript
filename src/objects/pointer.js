let pointer = document.createElement('div')
pointer.classList.add('pointer','hide')

document.body.appendChild(pointer)

document.addEventListener('keydown',(e)=>{
    if(e.keyCode == 69){
        pointer.classList.remove('hide')
    }
})
document.addEventListener('keyup',(e)=>{
    if(e.keyCode == 69){
        pointer.classList.add('hide')
    }
})