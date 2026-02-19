const currentDate=document.getElementById("currentyear")
const  lastModified=document.getElementById("lastModified")

const menuButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

const now=new Date()
// console.log(now)
currentDate.innerHTML=now.getFullYear()

lastModified.innerHTML=document.lastModified


// object
const nigeria = {
  capital: "Abuja",
  largestCity: "Lagos",
  Government: "Federal presidential republic.",
  population: "200+ million (most populous in Africa, 6th globally)",
  LandArea: "~923,769 sq km, bordered by Niger, Chad, Cameroon, and the Atlantic",
  language: "English (official), with 500+ indigenous languages; major ones include Hausa, Yoruba, and Igbo"
};

// ARRAY
const factsArray = [
  `Capital: ${nigeria.capital}`,
  `Largest City: ${nigeria.largestCity}`,
  `Population: ${nigeria.population}`,
  `Official Language: ${nigeria.language}`
];

// DISPLAY FACTS
const factsContainer = document.querySelector(".factsContainer");
if (factsContainer) {
  factsArray.forEach(fact => {
    const div = document.createElement("div");
    div.textContent = fact;
    // console.log(fact)
    factsContainer.appendChild(div);
  });
}


// WEATHER FUNCTION
function getWeather() {
  let temp = 32; // example temperature
  let message;
  if (temp > 30) {
    message = `It is hot today in ${nigeria.capital}: ${temp}°C ☀`;
  } else {
    message = `Weather is mild in ${nigeria.capital}: ${temp}°C`;
  }
  localStorage.setItem("weather", message);
  document.querySelector("#weatherOutput").textContent = message;
}

const weatherBtn = document.querySelector("#weatherBtn");
if (weatherBtn) {
  weatherBtn.addEventListener("click", getWeather);
}


// Toggle mobile menu on click
menuButton.addEventListener("click", () => {
  nav.classList.add("open");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("open");
});



navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open"); // closes menu after clicking
  });
});