
// getting data from html to show time and date
const currentDate=document.getElementById("currentyear")
const  lastModified=document.getElementById("lastModified")
const now=new Date()
currentDate.textContent=now.getFullYear()
lastModified.innerHTML=document.lastModified
// make impart