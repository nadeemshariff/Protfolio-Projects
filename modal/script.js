// Get modal elements
const modal = document.getElementById("cartModal");
const openCartBtn = document.getElementById("openCartBtn");
const closeBtn = document.getElementsByClassName("close-btn")[0];
const cartItemsContainer = document.querySelector(".cart-items");
const cartTotal = document.getElementById("cartTotal");

// Sample cart data
let cart = [
    { id: 1, name: "Item 1", price: 29.99, quantity: 1 },
    { id: 2, name: "Item 2", price: 19.99, quantity: 2 },
];

// Function to open modal
openCartBtn.onclick = function() {
    modal.style.display = "block";
    renderCartItems();
    updateCartTotal();
};

// Function to close modal
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// Close modal if clicked outside of content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Render cart items
function renderCartItems() {
    cartItemsContainer.innerHTML = "";
    cart.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");
        itemDiv.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)} x ${item.quantity}</span>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });
}

// Update cart total
function updateCartTotal() {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    cartTotal.innerText = total.toFixed(2);
}
