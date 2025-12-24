const fisListesiDiv = document.querySelector("#fis-listesi");
const totalSpan = document.querySelector("#toplam-tutar");

let siparisler = JSON.parse(localStorage.getItem("siparisler")) || [];
if (siparisler.length == 0) {
  siparisler = [
    { id: 1, isim: "Tost", fiyat: 20, adet: 3 },
    { id: 2, isim: "Hamburger", fiyat: 50, adet: 2 },
    { id: 3, isim: "Pizza", fiyat: 100, adet: 1 },
  ];
}

const saveCartTotalStorage = () => {
  localStorage.setItem("siparisler", JSON.stringify(siparisler));
};
saveCartTotalStorage();

const hesapla = () => {
  const total = siparisler.reduce((acc, siparis) => {
    return acc + siparis.fiyat * siparis.adet;
  }, 0);
  totalSpan.innerText = total ;
};

const fisListesi = () => {
  const fisHTML = siparisler
    .map((siparisItem) => {
      const { id, isim, fiyat, adet } = siparisItem;
      return `
         <div style="border-bottom: 1px dashed #ccc; padding: 5px;">
         <h3>${isim} :${adet * fiyat}</h3>
         <button class="addBtn" onclick="addItem(${id})">Ekle</button>
          <button class="removeBtn" onclick="removeBtn(${id})">Remove</button>
         </div>
         `;
    })
    .join("");
  fisListesiDiv.innerHTML = fisHTML;
  saveCartTotalStorage();
  hesapla();
};

fisListesi();

const addItem = (id) => {
  const item = siparisler.find((siparis) => siparis.id === id);
  item.adet++;
  fisListesi();
};

const removeBtn = (id) => {
  const item = siparisler.find((siparis) => siparis.id == id);
  if (item.adet > 0) {
    item.adet--;
  }
  fisListesi();
};
