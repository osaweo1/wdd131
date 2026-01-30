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


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
    {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl:
      "images/saltlake.jpg",
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
      "images/ghana.jpg",
    }
  // Add more temple objects here...
];

const templelist=document.querySelector(".gallery")

function displayTemple(temples){
    templelist.innerHTML=""
    temples.forEach(temple=>{
        const templeCard=document.createElement("figure")
        templeCard.classList.add('temple-card')
        const templeCaption=document.createElement("figcaption")
        const templeImage=document.createElement("img")
        templeImage.src = temple.imageUrl;
        templeImage.alt = `Image of ${temple.templeName}`;
        templeImage.loading = "lazy";
        templeCaption.innerHTML=`
        <h2>${temple.templeName}</h2>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Size: ${temple.area}</p>
        `
        templeCard.appendChild(templeCaption)
        templeCard.appendChild(templeImage)
        console.log(templeCard)
        templelist.appendChild(templeCard)
    })
    
}

document.querySelectorAll("nav a").forEach(link=>{
    link.addEventListener("click", event=>{
        event.preventDefault()
        const filter=event.target.dataset.filter
        console.log(filter)
        let filtered=temples
        if(filter==='old'){
            filtered=temples.filter(newfilter=> new Date(newfilter.dedicated).getFullYear()<1900)
        }else if (filter==='new') {
            filtered=temples.filter(newfilter=> new Date(newfilter.dedicated).getFullYear()>2000)
        }else if(filter==='large') {
            filtered=temples.filter(newfilter=>newfilter.area>90000)
        }else if(filter==="small"){
            filtered=temples.filter(newfilter=>newfilter.area<10000)
        }
        displayTemple(filtered)

    })
})

displayTemple(temples)

