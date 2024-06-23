const hamburger=document.querySelector(".hamburger"),
      menu=document.querySelector(".menu"),
      close=document.querySelector(".menu_close");

hamburger.addEventListener('click',()=>{
    menu.classList.add('active');
});

close.addEventListener('click',()=>{
    menu.classList.remove('active');
});


const skills_number=document.querySelectorAll(".skills_number"),
      lines=document.querySelectorAll(".skills_line-number");
    
skills_number.forEach((item,i)=>{
    lines[i].style.width=item.innerHTML
});