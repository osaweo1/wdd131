const currentDate=document.getElementById("currentyear")
const  lastModified=document.getElementById("lastModified")
const now=new Date()
currentDate.textContent=now.getFullYear()
lastModified.innerHTML=document.lastModified


const menuButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

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