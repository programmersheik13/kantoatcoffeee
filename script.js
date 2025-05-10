// Toggle Search Bar
document.getElementById('search-btn').addEventListener('click', function () {
    document.querySelector('.search-form').classList.toggle('active');
});

// Toggle Cart
document.getElementById('cart-btn').addEventListener('click', function () {
    document.querySelector('.cart-items-container').classList.toggle('active');
});

// Toggle Navbar
document.getElementById('menu-btn').addEventListener('click', function () {
    document.querySelector('.new-navbar').classList.toggle('active');
});  

// JavaScript to handle 'Add to Cart' functionality

document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.querySelector('.cart-items-container');
    const cartIcon = document.getElementById('cart-btn');
    const checkoutButton = document.querySelector('.checkout-btn');
    let cartCount = 0;

    // Function to update the cart icon count
    function updateCartIcon() {
        cartIcon.setAttribute('data-count', cartCount);
        cartIcon.classList.add('active');
    }

    // Function to add item to the cart
    function addToCart(itemName, itemPrice, itemImage) {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <span class="fas fa-times"></span>
            <img src="${itemImage}" alt="${itemName}">
            <div class="content">
                <h3>${itemName}</h3>
                <div class="price">${itemPrice}</div>
            </div>
        `;

        // Add event listener to remove item from cart
        cartItem.querySelector('.fa-times').addEventListener('click', () => {
            cartItem.remove();
            cartCount--;
            updateCartIcon();
        });

        cartContainer.appendChild(cartItem);
        cartCount++;
        updateCartIcon();
    }

    // Add event listeners to all 'Add to Cart' buttons
    const addToCartButtons = document.querySelectorAll('.btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();

            const itemBox = button.closest('.box');
            const itemName = itemBox.querySelector('h3').textContent;
            const itemPrice = itemBox.querySelector('.price').textContent.trim();
            const itemImage = itemBox.querySelector('img').src;

            addToCart(itemName, itemPrice, itemImage);
        });
    });

    // Add event listener to the checkout button
    checkoutButton.addEventListener('click', () => {
        alert('Proceeding to checkout!');
        // Additional checkout logic can be added here
    });
});