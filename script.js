function showSidebar(){
    const a = document.querySelector(".sidebar");
    a.style.display = "flex";
}

function closeSidebar(){
    const a = document.querySelector(".sidebar");
    a.style.display = "none";
}

//faq-section
const accordians = document.querySelectorAll(".accordian");

accordians.forEach(accordian => {
  const icon = accordian.querySelector(".icon");
  const answer = accordian.querySelector(".answer");
  accordian.addEventListener("click",()=>{
    icon.classList.toggle("active");
    answer.classList.toggle("active");
  })

})