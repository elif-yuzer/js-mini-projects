const filterBtns = document.querySelectorAll(".filter-btn");
const emailList = document.getElementById("email-list");
const emailBilgileri = [
  { id: 1, icerik: "Raporlar Hazır mı?", durum: "unread" },
  { id: 2, icerik: "Toplantı Notları", durum: "read" },
  { id: 3, icerik: "Haftasonu Planı", durum: "unread" },
  { id: 4, icerik: "Amazon Kargo Takip", durum: "read" },
  { id: 5, icerik: "Stajyer Başvurusu", durum: "read" }
];

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

const addUII = (emailBilgileri) => {
  const { id, icerik, durum } = emailBilgileri;
  const li = document.createElement("li");

  li.classList.add("email", durum);
  li.textContent = icerik;
  li.dataset.id = id;
  emailList.appendChild(li);
};
emailBilgileri.forEach((email)=>{
  addUII(email)
})
