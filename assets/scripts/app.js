
const emoji =document.querySelector('.parent-emoji')
window.addEventListener('load',()=>{
const animateTittle = document.querySelectorAll('.parent-span')
animateTittle.forEach(items=>{
    items.classList.add('animate-tittle-1')
       
    })
    emoji.classList.add('animate-tittle-2')
    setTimeout(() => {
        document.querySelector('HEADER').style.maxHeight = "200px"
        emoji.classList.add ("emojiend")
        
    }, 3000);
    document.addEventListener('mousemove' , e=>{
        const mouse = document.querySelector('.mouse')
        mouse.style.cssText = "top:"+e.clientY+"px; left: "+e.clientX+"px;"
    })

})