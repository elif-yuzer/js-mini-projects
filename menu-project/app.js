const themetoggleBtn = document.getElementById("theme-toggle");

const filterBtns = document.querySelectorAll(".filter-btn");
const menuListDom = document.querySelector("#menu-list");

const savetoLocalStorage = () => {
  localStorage.setItem("menuList", JSON.stringify(menuList));
};

let menuList = JSON.parse(localStorage.getItem("menuList"));
if (!menuList) {
  menuList = [
    {
      id: 1,
      title: "Lentil Soup",
      category: "soup",
      price: 200,
      img: "./images/soup.jpg",
      desc: "Warm strained lentil soup.",
    },
    {
      id: 2,
      title: "Tomato Soup",
      category: "soup",
      price: 150,
      img: "./images/soup.jpg",
      desc: "Served with grated cheese.",
    },
    {
      id: 3,
      title: "Mushroom Soup",
      category: "soup",
      price: 150,
      img: "./images/soup.jpg",
      desc: "Creamy mushroom soup.",
    },
    {
      id: 4,
      title: "Chicken Kebab",
      category: "main",
      price: 300,
      img: "./images/maindishes.jpg",
      desc: "Served with special sauce",
    },
    {
      id: 5,
      title: "Tandoori",
      category: "main",
      price: 400,
      img: "./images/maindishes.jpg",
      desc: "Served with fresh salad",
    },
    {
      id: 6,
      title: "Hamburger menu",
      category: "fastfood",
      price: 250,
      img: "./images/fastfood.jpg",
      desc: "Served with a drink.",
    },

    {
      id: 7,
      title: "Pizza",
      category: "fastfood",
      price: 280,
      img: "./images/fastfood.jpg",
      desc: "Thin crust mixed pizza",
    },
    {
      id: 8,
      title: "Tacos",
      category: "wraps",
      price: 220,
      img: "./images/fastfood.jpg",
      desc: "Spicy mexican tacos.",
    },
    {
      id: 9,
      title: "Brownie",
      category: "dessert",
      price: 220,
      img: "./images/desserts.jpg",
      desc: "Delicious chocolate brownie.",
    },
    {
      id: 10,
      title: "Hot & Cold Drinks",
      category: "baverage",
      price: 220,
      img: "./images/baverage.jpg",
      desc: "Tea, coffee, and soft drinks.",
    },
  ];
  savetoLocalStorage();
}

const addUI = (menuInfo) => {
  const { id, title, category, price, img, desc } = menuInfo;

  const li = document.createElement("li");
  li.classList.add("menu-card", category);
  li.dataset.id = id;
  li.innerHTML = `<div class="card-image">
  <img src="${img}" alt="${title}" />
  </div>
  <div class="card-info">
  <div class="info-header">
  <h3>${title}</h3>
  <small>${price} TL</small>
  </div>
  <p class="desc">${desc}</p>
  </div>`;
  menuListDom.appendChild(li);
};

menuList.forEach((menu) => {
  addUI(menu);
  console.log(menu);
});

//!filtering

filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    filterBtns.forEach((btn) => btn.classList.remove("active"));
    const tiklanan = e.target;
    const kategori = tiklanan.dataset.id;
    menuListDom.innerHTML = "";
    if (kategori == "all") {
      menuList.forEach((menu) => {
        addUI(menu);
      });
    } else {
      const filteringMenu = menuList.filter(
        (menu) => menu.category == kategori
      );
      filteringMenu.forEach((menu)=>{
        addUI(menu)
      })
      
    }
  });
});
const themeToggleBtn=document.querySelector("#theme-toggle")
const themeIcon=document.querySelector("img")

themeToggleBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode")
    if(document.body.classList.contains("dark-mode")){
        themeIcon.src="./icon-sun.svg"
    }else{
        themeIcon.src="./icon-moon.svg"
    }
})