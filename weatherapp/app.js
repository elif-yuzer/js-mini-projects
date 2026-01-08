const apiKey = "335fade5f264c4558b904e7aca3e64de";
const weatherResult = document.querySelector(".weather-result");
const locateBtn = document.getElementById("location-btn");
const langEnBtn = document.getElementById("lang-en");
const langNoBtn = document.getElementById("lang-no");
const searchInput = document.querySelector("#city-input");
const searchForm = document.querySelector("form");
const cardContainer=document.querySelector(".card")


let currentLang = "en";
let lastCity = "Istanbul";
const getWeather = async (cityName) => {
  const apiUrl = ` https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}&units=metric&lang=${currentLang}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      throw new Error("Sehir bulunamadı");
    }
    lastCity = cityName;
    addUI(data);
    console.log(data);
  } catch (error) { alert("Şehir bulunamadı, lütfen tekrar deneyin!");}
};

const addUI = (data) => {
  const { name, main, weather, wind } = data;
  const cityName = name;
  console.log(cityName);
  const temp = Math.round(main.temp);
  console.log(temp);
  const weatherIcon = weather[0].icon;
  console.log(weatherIcon);
  const humidityState = main.humidity;
  const windState = Math.round(wind.speed);
  const description = weather[0].description;

   

  

  weatherResult.innerHTML = `
<div class="weather">
        <img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="icon" style="width: 8rem;" /> 
        <p>${name}</p>
        <p style="font-size: 0.9rem; text-transform: capitalize;">${description}</p>
        
        <div class="temp-container">
            <span class="temp">${temp}</span>
            <img src="./image/wi-celsius.svg" alt="°C" class="celsius-icon" />
        </div>
    </div>

    <div class="details">
        <div class="col">
            <img src="./image/weather.png" alt="" width="40px" height="40px" />
            <div>
                <p class="humidity">${humidityState}%</p>
    
            </div>
        </div>
        <div class="col">
            <img src="./image/icons8-wind-48.png" alt="" width="40px" height="40px" />
            <div>
                <p class="wind">${windState} km/h</p>
               
            </div>
        </div>
    </div>
    `;
     let isNight=weather[0].icon.includes("n")
  console.log(isNight);
   if(isNight==true){
   cardContainer.classList.add("night-mod")

  }else{
     cardContainer.classList.remove("night-mod")
  }

};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const tiklanan = searchInput.value;
  console.log(tiklanan);
  if (tiklanan) {
    getWeather(tiklanan);
    searchInput.value = "";
  } else {
    alert("Lütfen bir şehir ismi girin!");
  }
});

const changeLanguage = (lang) => {
  currentLang = lang;
  if (lang == "en") {
    langEnBtn.classList.add("active");
    langNoBtn.classList.remove("active");
  } else {
    langNoBtn.classList.add("active");
    langEnBtn.classList.remove("active");
  }
  getWeather(lastCity);
};

langEnBtn.addEventListener("click", () => {
  changeLanguage("en");
    weatherResult.innerHTML=""
 
});
langNoBtn.addEventListener("click", () => {
  changeLanguage("no");
  weatherResult.innerHTML=""
});




getWeather("Istanbul");


