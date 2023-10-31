let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
document.addEventListener("DOMContentLoaded", function () {
    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
  
    // Get the shopping cart and cart items
    const cart = document.getElementById("cart-items");
  
    // Initialize an empty cart array
    const cartItems = [];
  
    // Add a click event listener to each "Add to Cart" button
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", function (event) {
        event.preventDefault();
  
        // Get the item name and price from the data attributes
        const itemName = this.getAttribute("data-name");
        const itemPrice = parseFloat(this.getAttribute("data-price"));
  
        // Create a new cart item object
        const cartItem = {
          name: itemName,
          price: itemPrice,
        };
  
        // Add the item to the cart array
        cartItems.push(cartItem);
  
        // Update the cart display
        updateCartDisplay();
      });
    });
  
    // Function to update the cart display
    function updateCartDisplay() {
      // Clear the current cart display
      cart.innerHTML = "";
  
      // Loop through the cart items and display them
      cartItems.forEach((item) => {
        const cartItemElement = document.createElement("li");
        cartItemElement.textContent = `${item.name}: Rs. ${item.price}`;
        cart.appendChild(cartItemElement);
      });
    }
  });
  
