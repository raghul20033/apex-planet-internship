const allProducts = [
  { name: "Apple", price: 2, category: "fruit" },
  { name: "Banana", price: 1, category: "fruit" },
  { name: "Orange", price: 3, category: "fruit" },
  { name: "Carrot", price: 2, category: "vegetable" },
  { name: "Broccoli", price: 4, category: "vegetable" },
  { name: "Cucumber", price: 1.5, category: "vegetable" },
  { name: "Grapes", price: 3.5, category: "fruit" },
  { name: "Tomato", price: 2.2, category: "vegetable" },
  { name: "Lemon", price: 1.8, category: "fruit" },
  { name: "Cookies", price: 2.5, category: "snack" },
  { name: "Chips", price: 1.2, category: "snack" },
  { name: "Soda", price: 1.5, category: "drink" },
  { name: "Water", price: 0.8, category: "drink" },
  { name: "Juice", price: 2.9, category: "drink" },
  { name: "Peas", price: 2.3, category: "vegetable" },
];

let displayedProducts = [...allProducts];

function displayProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";
  displayedProducts.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h2>${p.name}</h2><p>Price: $${p.price.toFixed(2)}</p><p>Category: ${p.category}</p>`;
    container.appendChild(div);
  });
}

function sortProducts() {
  const sortBy = document.getElementById("sort").value;
  displayedProducts.sort((a, b) => {
    if (sortBy === "price") return a.price - b.price;
    return a.name.localeCompare(b.name);
  });
  displayProducts();
}

function filterProducts() {
  const category = document.getElementById("category").value;
  displayedProducts = category === "all" ? [...allProducts] : allProducts.filter(p => p.category === category);
  sortProducts();
}

window.onload = () => {
  sortProducts();
};
