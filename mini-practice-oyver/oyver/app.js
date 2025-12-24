let adaylar = JSON.parse(localStorage.getItem("adaylar")) || [];

if (adaylar.length == 0) {
  adaylar = [
    { id: 1, isim: "Ali", oy: 0 },
    { id: 2, isim: "Ayşe", oy: 0 },
    { id: 3, isim: "Mehmet", oy: 0 },
  ];
}

const kutu = document.querySelector("#adaylar");

const saveToLocalStorage = () => {
  localStorage.setItem("adaylar", JSON.stringify(adaylar));
};

const addUI = () => {
    kutu.innerHTML=""

  adaylar.forEach((aday) => {
    

    kutu.innerHTML += `
     <div class="aday-kutusu">
    <h3>${aday.isim} - Oy: ${aday.oy}</h3>
    <button class="oyBtn" onclick="oyVer(${aday.id})">Oy Ver (+1)</button>
    </div>
    `;
  });
};

const oyVer=(id)=>{
  const bulunanAday=adaylar.find((kisi)=>kisi.id===id)
  bulunanAday.oy++
  saveToLocalStorage()
  addUI()

}
addUI()