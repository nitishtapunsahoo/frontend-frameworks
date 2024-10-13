const cartItems = [];
const totalCostElement = document.getElementById('total-cost');
const itemCountElement = document.getElementById('item-count');

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.parentElement;
        const productName = product.querySelector('h2').textContent;
        const productPrice = parseFloat(product.querySelector('p').textContent.substring(1));

        // Add item to cart
        cartItems.push({ name: productName, price: productPrice });
        updateCart();
    });
});

// Function to update the cart display
function updateCart() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = ''; // Clear existing items
    let totalCost = 0;

    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartContainer.appendChild(cartItem);
        totalCost += item.price;
    });

    // Update total cost and item count
    totalCostElement.textContent = totalCost.toFixed(2);
    itemCountElement.textContent = cartItems.length; // Update item count
}
