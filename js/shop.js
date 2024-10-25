// Updated product data with sale and rating information
const products = [
    {id: 1, title: 'Pure Honey', category: 'honey', price: 230, oldPrice: 250, sale: true, rating: 4.5, image: '/images/product/product-1jpg.jpg'},
    {id: 2, title: 'Organic Honey', category: 'organic', price: 250, sale: false, rating: 4.0, image: '/images/product/product-1jpg.jpg'},
    {id: 3, title: 'Honey with Ginger', category: 'honey', price: 210, oldPrice: 230, sale: true, rating: 4.2, image: '/images/product/product-1jpg.jpg'},
    {id: 4, title: 'Herbal Tea', category: 'beverages', price: 180, sale: false, rating: 3.8, image: '/images/product/product-1jpg.jpg'},
    {id: 5, title: 'Cinnamon Sticks', category: 'spices', price: 120, sale: false, rating: 4.1, image: '/images/product/product-1jpg.jpg'},
    {id: 6, title: 'Organic Almonds', category: 'organic', price: 300, sale: false, rating: 4.7, image: '/images/product/product-1jpg.jpg'},
    {id: 7, title: 'Mixed Nuts', category: 'snacks', price: 350, sale: true, oldPrice: 380, rating: 4.9, image: '/images/product/product-1jpg.jpg'},
    {id: 8, title: 'Chips', category: 'snacks', price: 150, sale: false, rating: 3.5, image: '/images/product/product-1jpg.jpg'}
];

// Function to render products based on the selected category
function renderProducts(filteredProducts) {
    const productGrid = document.getElementById('product_grid');
    productGrid.innerHTML = ''; // Clear existing products

    filteredProducts.forEach(product => {
        const saleBadge = product.sale ? `<span class="sale_badge">Sale</span>` : '';
        const oldPrice = product.oldPrice ? `<p class="old_price">$${product.oldPrice}</p>` : '';
        const rating = product.rating ? `<div class="rating">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</div>` : '';

        const productItem = `
            <div class="product_item">
                <div class="product_image">
                    <img src="${product.image}" alt="${product.title}">
                    ${saleBadge}
                    <button class="wishlist"><i class="fa-solid fa-heart"></i></button>
                </div>
                <div class="product_info">
                    <h3 class="product_title">${product.title}</h3>
                    <div class="main_price">
                        ${oldPrice}
                        <p class="n_price">$${product.price}</p>
                    </div>
                    ${rating}
                    <div class="product_actions">
                        <button class="add_to_cart"><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        productGrid.insertAdjacentHTML('beforeend', productItem);
    });
}

// Function to filter products by category
function filterProducts(category) {
    const filteredProducts = category === 'sale'
        ? products.filter(product => product.sale)
        : products.filter(product => product.category === category);
    renderProducts(filteredProducts);
}

// Example product data for top-selling products
const topSellingProducts = [
    {id: 1, title: 'Organic Honey', price: 250, oldPrice: 300, sale: true, rating: 4.7, image: '/images/product/product-1jpg.jpg'},
    {id: 2, title: 'Mixed Nuts', price: 350, oldPrice: 400, sale: true, rating: 4.9, image: '/images/product/product-1jpg.jpg'},
    {id: 3, title: 'Herbal Tea', price: 180, oldPrice: 200, sale: false, rating: 3.8, image: '/images/product/product-1jpg.jpg'},
    {id: 4, title: 'Pure Honey', price: 230, oldPrice: 250, sale: true, rating: 4.5, image: '/images/product/product-1jpg.jpg'},
    {id: 5, title: 'Organic Almonds', price: 300, oldPrice: 350, sale: false, rating: 4.7, image: '/images/product/product-1jpg.jpg'},
    {id: 6, title: 'Cinnamon Sticks', price: 120, sale: false, rating: 4.1, image: '/images/product/product-1jpg.jpg'},
    {id: 7, title: 'Chips', price: 150, sale: false, rating: 3.5, image: '/images/product/product-1jpg.jpg'},
    {id: 8, title: 'Honey with Ginger', price: 210, oldPrice: 230, sale: true, rating: 4.2, image: '/images/product/product-1jpg.jpg'}
];

// Function to render top selling products
function renderTopSellingProducts() {
    const topSellingSlider = document.getElementById('top_selling_slider');
    topSellingSlider.innerHTML = ''; // Clear existing products

    topSellingProducts.forEach(product => {
        const saleBadge = product.sale ? `<span class="sale_badge">Sale</span>` : '';
        const oldPrice = product.oldPrice ? `<p class="old_price">$${product.oldPrice}</p>` : '';
        const rating = product.rating ? `<div class="rating">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</div>` : '';

        const productItem = `
            <div class="product_item">
                <div class="product_image">
                    <img src="${product.image}" alt="${product.title}">
                    ${saleBadge}
                    <button class="wishlist"><i class="fa-solid fa-heart"></i></button>
                </div>
                <div class="product_info">
                    <h3 class="product_title">${product.title}</h3>
                    <div class="main_price">
                        ${oldPrice}
                        <p class="n_price">$${product.price}</p>
                    </div>
                    ${rating}
                    <div class="product_actions">
                        <button class="add_to_cart"><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        topSellingSlider.insertAdjacentHTML('beforeend', productItem);
    });

    // Initialize Owl Carousel
    $('#top_selling_slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 },
            1200: { items: 4 }
        }
    });
}

// Call the functions to render products and top-selling products on window load
window.onload = function() {
    renderProducts(products); // Show all products by default
    renderTopSellingProducts(); // Show top-selling products
};
