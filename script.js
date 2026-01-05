document.addEventListener('DOMContentLoaded', () => {
    // --- Render Categories ---
    const categoryGrid = document.getElementById('category-grid');
    if (categories && categoryGrid) {
        categories.forEach(cat => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.innerHTML = `
                <img src="${cat.image}" alt="${cat.name}">
                <div class="category-label">${cat.name}</div>
            `;
            categoryGrid.appendChild(card);
        });
    }

    // --- Render Products ---
    const productGrid = document.getElementById('product-grid');
    if (products && productGrid) {
        products.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-image-wrapper">
                    ${prod.tag ? `<span class="product-tag">${prod.tag}</span>` : ''}
                    <img src="${prod.image}" alt="${prod.title}">
                </div>
                <div class="product-info">
                    <div class="product-cat">${prod.category}</div>
                    <h3>${prod.title}</h3>
                    <div class="product-colors" style="display: flex; gap: 5px; margin-bottom: 5px;">
                        ${prod.colors ? prod.colors.map(c =>
                `<span style="width: 12px; height: 12px; border-radius: 50%; background-color: ${c.toLowerCase()}; border: 1px solid #ccc; display: inline-block;"></span>`
            ).join('') : ''}
                    </div>
                    <div class="product-price">${prod.price.toFixed(2)} د.ت</div>
                </div>
            `;

            // Allow Add to Cart interaction
            card.addEventListener('click', () => {
                addToCart();
            });

            productGrid.appendChild(card);
        });
    }

    // --- Cart Logic ---
    let cartCount = 0;
    const cartCountEl = document.querySelector('.cart-count');

    function addToCart() {
        cartCount++;
        cartCountEl.textContent = cartCount;

        // Simple visual feedback
        const btn = document.querySelector('.fa-shopping-bag');
        btn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 200);
    }

    // --- Hero Carousel Logic ---
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    const totalSlides = slides.length;

    function nextSlide() {
        // Remove active class from current
        slides[currentSlide].classList.remove('active');

        // Update index
        currentSlide = (currentSlide + 1) % totalSlides;

        // Add active class to new
        slides[currentSlide].classList.add('active');
    }

    // Auto-advance every 5 seconds
    setInterval(nextSlide, 5000);
});
