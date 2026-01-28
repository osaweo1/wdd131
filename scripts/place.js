const currentDate=document.getElementById("currentyear")
const  lastModified=document.getElementById("lastModified")
let temperature=document.getElementById("temperature").textContent 
let windSpeed=document.getElementById("windspeed").textContent 
console.log(temperature)
const now=new Date()
currentDate.textContent=now.getFullYear()
lastModified.innerHTML=document.lastModified


function calculateWindChill(temp, speed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

const windChillSpan = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
  windChillSpan.textContent =
    calculateWindChill(temperature, windSpeed) + " °C";
} else {
  windChillSpan.textContent = "N/A";
}