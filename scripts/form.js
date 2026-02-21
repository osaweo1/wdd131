const products = [
    { id: "p1", name: "Smart Thermostat" },
    { id: "p2", name: "Wireless Headphones" },
    { id: "p3", name: "Gaming Laptop" },
    { id: "p4", name: "Bluetooth Speaker" },
    { id: "p5", name: "4K Monitor" }
];

// Populate Select Options
document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("product");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;   // id used for value
        option.textContent = product.name; // name used for display
        select.appendChild(option);
    });

    // Display review count (if exists)
    const count = localStorage.getItem("reviewCount") || 0;
    const display = document.getElementById("reviewCountDisplay");
    if (display) {
        display.textContent = `Total Reviews Submitted: ${count}`;
    }
});