let button= document.getElementById('btn')
let para = document.getElementById('p1')

button.addEventListener('click',()=>{
    para.classList.toggle('show')
    
    if(para.classList.contains('show')){
        button.textContent='Read less..'
    }
    else{
        button.textContent='Read More..'
    }
})

