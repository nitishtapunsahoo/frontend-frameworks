const plants = [
    { id: 1, name: "Succulent", price: 10, img: "plant1.jpg" },
    { id: 2, name: "Fern", price: 15, img: "plant2.jpg" },
    { id: 3, name: "Cactus", price: 12, img: "plant3.jpg" },
    { id: 4, name: "Orchid", price: 20, img: "plant4.jpg" },
    { id: 5, name: "Bamboo", price: 18, img: "plant5.jpg" },
    { id: 6, name: "Fiddle Leaf Fig", price: 25, img: "plant6.jpg" },
];

let cart = [];

function renderProducts() {
    const productListing = document.getElementById('product-listing');
    products.forEach(plant => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <img src="${plant.img}" alt="${plant.name}">
            <h3>${plant.name}</h3>
            <p>Price: $${plant.price}</p>
            <button onclick="addToCart(${plant.id})">Add to Cart</button>
        `;

        productListing.appendChild(productDiv);
    });
}

function addToCart(plantId) {
    const plant = plants.find(p => p.id === plantId);
    cart.push(plant);
    document.getElementById('cart-count').innerText = cart.length;
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    let totalCost = 0;
    cart.forEach(plant => {
        totalCost += plant.price;
        const cartItemDiv = document.createElement('div');
        cartItemDiv.innerHTML = `
            <p>${plant.name} - $${plant.price}</p>
            <button onclick="removeFromCart(${plant.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
    });
    document.getElementById('total-cost').innerText = `$${totalCost}`;
}

function removeFromCart(plantId) {
    cart = cart.filter(p => p.id !== plantId);
    renderCart();
}

// Call the function to render products on product listing page
if (document.getElementById('product-listing')) {
    renderProducts();
}

// Call the function to render cart on cart page
if (document.getElementById('cart-items')) {
    renderCart();
}
