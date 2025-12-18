const filterBtns = document.querySelectorAll(".filter-btn");
const emailList = document.getElementById("email-list");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    filterBtns.forEach((item) => item.classList.remove("active"));
    const tiklanan = e.target;
    tiklanan.classList.add("active");

    const kategori = tiklanan.dataset.id;
    console.log(kategori);
    const emailler = emailList.children;
    // console.log( typeof emailler);
    Array.from(emailler).forEach((email) => {
      const okunduMu = email.classList.contains("read");
      //   console.log(okunan);
      switch (kategori) {
        case "All":
          email.style.display = "flex";
          break;
        case "Read":
          if (okunduMu) {
            email.style.display = "flex";
          } else {
            email.style.display = "none";
          }
          break;
        case "Unread":
          if (!okunduMu) {
            email.style.display = "flex";
          } else {
            email.style.display = "none";
          }
          break;
      }
    });
  });
});
