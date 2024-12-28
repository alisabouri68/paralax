window.addEventListener('load',()=>{
const animateTittle = document.querySelectorAll('.parent-span')
animateTittle.forEach(items=>{
    items.classList.add('animate-tittle-1')
       
    })
    document.querySelector('.parent-emoji').classList.add('animate-tittle-2')
    setTimeout(() => {
        document.querySelector('HEADER').style.height = "300px"
        
    }, 3000);
    document.addEventListener('mousemove' , e=>{
        const mouse = document.querySelector('.mouse')
        mouse.style.cssText = "top:"+e.clientY+"px; left: "+e.clientX+"px;"
    })

})