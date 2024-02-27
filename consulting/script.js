let title=document.querySelector(".title")
title.style.visibility="hidden"
window.addEventListener("scroll" , ()=>{
    if (document.body.scrollTop>50) {
title.style.display="block"
       console.log(scroll); 
    } else {
title.style.visibility="hidden"
        
    }
})