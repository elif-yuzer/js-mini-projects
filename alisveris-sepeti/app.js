const cartBtn=document.querySelector("#cart-btn")
const modalContainer=document.getElementById("modal-container")
const closeBtn=document.querySelector("#close-btn")
const checkoutBtn=document.getElementById("checkout-btn")

cartBtn.addEventListener("click",()=>{
    modalContainer.classList.toggle("show")
})
closeBtn.addEventListener("click",()=>{
    modalContainer.classList.remove("show")
})

modalContainer.addEventListener("click",(e)=>{
    const tiklanan=e.target
    if(tiklanan===modalContainer){
        tiklanan.classList.remove("show")
    }
})