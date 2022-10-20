const btn =document.querySelector(".footer-btn button")
btn.addEventListener("click", () =>{
    document.querySelector(".modal").style.display = "block"
})
const close =document.querySelector(".modal--bg__sq--color")
close.addEventListener("click", () =>{
    document.querySelector(".modal").style.display = "none"
})