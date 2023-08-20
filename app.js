let accordion = document.querySelector(".accordion"); 
let accordionItem = document.querySelectorAll(".accordion-item"); 
let title = document.querySelectorAll(".title"); 

title.forEach(item=>{
    item.addEventListener("click", ()=>{
        accordionItem.forEach(item=>{
            item.classList.remove("active")
        })
        item.parentElement.classList.toggle("active");
    })
});

document.querySelector(".accordion-item").classList.add("active")