A modern web application that displays real-time weather data based on user input (city name) or current geolocation, featuring multi-language support (English/Norwegian).
[🇹🇷 Türkçe README için tıklayınız](./README.tr.md)
![Project Status](https://img.shields.io/badge/Status-Completed-success)
![Languages](https://img.shields.io/badge/Languages-HTML%20%7C%20CSS%20%7C%20JS-blue)
![API](https://img.shields.io/badge/API-OpenWeatherMap-orange)

## 🚀 Features

- **City Search:** Fetches real-time weather data for any city worldwide.
- **Geolocation:** Automatically detects the user's location (via browser permissions) to show local weather.
- **Multi-Language Support:** Interface and weather descriptions toggle between English (EN) and Norwegian (NO).
- **Dynamic UI:** Icons and text update dynamically based on API data.
- **Error Handling:** User-friendly error messages for invalid city names or API issues.

## 🛠️ Tech Stack

- **HTML5 & CSS3:** Semantic structure and modern design using Flexbox/Grid.
- **Vanilla JavaScript (ES6+):**
  - `Async/Await` for asynchronous API handling.
  - DOM Manipulation & Selection.
  - Event Listeners.
  - Fetch API integration.
- **OpenWeatherMap API:** Source for real-time meteorological data.

---

## 🧠 Learning Journey & Key Challenges

This project was built to reinforce core JavaScript concepts. Here are the key technical challenges I faced and the lessons learned:

### 1. DOM Manipulation & Selectors

- **Challenge:** The search form and buttons were disappearing when updating the UI with `innerHTML`.
- **Solution:** Learned to target a specific child container (`.weather-result`) for updates instead of overwriting the main parent container (`.card`).
- **Key Takeaway:** Understanding the DOM tree structure and parent-child relationships is crucial for dynamic updates.

### 2. Variable Naming & Scope

- **Challenge:** The code broke because I named a DOM element `weather`, which conflicted with the `weather` array coming from the API response during destructuring.
- **Solution:** Adopted a stricter naming convention (e.g., adding suffixes like `weatherResult`, `cardContainer`) to prevent scope conflicts.

### 3. CSS Flexbox Layouts

- **Challenge:** Aligning the temperature value and the Celsius icon side-by-side proved difficult within a column layout.
- **Solution:** Implemented a "Nested Flex" structure, wrapping these specific elements in a `temp-container` with `flex-direction: row`.

### 4. API Logic & Error Handling

- **Challenge:** My initial error handling logic (`if (response.ok)`) was throwing errors even on successful requests.
- **Solution:** Corrected the logic to `if (!response.ok)` to properly catch 404/500 errors.

### 5. `null` References & Selectors

- **Challenge:** Encountered `Uncaught TypeError: Cannot read properties of null` often.
- **Solution:** Mastered the difference between ID selectors (`#`) and Class selectors (`.`) in `querySelector`. I learned that the JavaScript selector must match the HTML attribute exactly.

---

## 📸 Screenshots

_(Add your screenshot here: e.g., ![Screenshot](./image/js-weatherapp-.gif))_

## 💻 How to Run

1.  Clone or download the repository.
2.  Open `index.html` in your browser.
3.  Enter a city name or click the location pin icon!

---

_Developer Note: This project documents my journey in mastering frontend development, focusing on API integration and clean JavaScript logic._
