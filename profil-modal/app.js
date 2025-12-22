const editBtn = document.querySelector("#edit-btn");
const modalContainer = document.querySelector("#modal-container");
editBtn.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

const closeBtn = document.querySelector("#close-btn");
const cancelBtn = document.querySelector("#cancel-btn");

closeBtn.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});
cancelBtn.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});

modalContainer.addEventListener("click",(e)=>{
    const tiklanan=e.target
    if(tiklanan===modalContainer)
        modalContainer.classList.remove("show")
})
