// Store all products
let products = [];


// Store cart count
let cartCount = 0;


// Get HTML elements
const productContainer =
    document.getElementById("product-container");

const statusText =
    document.getElementById("status");

const searchInput =
    document.getElementById("search");

const categorySelect =
    document.getElementById("category");

const cartCountElement =
    document.getElementById("cart-count");


// =====================================
// AJAX - LOAD PRODUCTS FROM JSON
// =====================================

function loadProducts() {

    // Create XMLHttpRequest object
    const xhr = new XMLHttpRequest();


    // Open AJAX request
    xhr.open(
        "GET",
        "products.json",
        true
    );


    // When response is received
    xhr.onload = function () {

        if (xhr.status === 200) {

            try {

                // Convert JSON text into JavaScript object
                products =
                    JSON.parse(xhr.responseText);


                // Create category options
                createCategories(products);


                // Display products
                displayProducts(products);


                // Update status
                statusText.textContent =
                    `${products.length} products available`;

            }

            catch (error) {

                statusText.textContent =
                    "Error: Invalid JSON data.";
            }

        }

        else {

            statusText.textContent =
                "Unable to load products.";
        }

    };


    // Handle network error
    xhr.onerror = function () {

        statusText.textContent =
            "Network error while loading products.";

    };


    // Send AJAX request
    xhr.send();
}



// =====================================
// CREATE CATEGORY OPTIONS
// =====================================

function createCategories(items) {

    // Get unique categories
    const categories =
        [...new Set(
            items.map(product =>
                product.category
            )
        )];


    // Add categories to select
    categories.forEach(category => {

        const option =
            document.createElement("option");


        option.value = category;

        option.textContent = category;


        categorySelect.appendChild(option);

    });

}



// =====================================
// DISPLAY PRODUCTS
// =====================================

function displayProducts(items) {

    // Clear existing products
    productContainer.innerHTML = "";


    // If no products found
    if (items.length === 0) {

        productContainer.innerHTML =
            `
            <div class="empty">
                😕 No products found.
                Try another search.
            </div>
            `;

        return;
    }


    // Create card for every product
    items.forEach(product => {

        const card =
            document.createElement("article");


        card.className = "card";


        card.innerHTML = `

            <div class="image-box">

                <span class="badge">
                    ${product.badge}
                </span>

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <div class="card-content">

                <span class="category-label">
                    ${product.category}
                </span>


                <h3>
                    ${product.name}
                </h3>


                <p class="description">
                    ${product.description}
                </p>


                <div class="bottom">

                    <span class="price">
                        ₹${product.price.toLocaleString("en-IN")}
                    </span>


                    <button
                        class="add-btn"
                        onclick="addToCart()"
                    >
                        + Add
                    </button>

                </div>

            </div>
        `;


        // Add card to page
        productContainer.appendChild(card);

    });

}



// =====================================
// SEARCH + CATEGORY FILTER
// =====================================

function filterProducts() {

    // Get search text
    const searchTerm =
        searchInput.value.toLowerCase();


    // Get selected category
    const selectedCategory =
        categorySelect.value;


    // Filter products
    const filtered =
        products.filter(product => {

            const matchesSearch =

                product.name
                    .toLowerCase()
                    .includes(searchTerm)

                ||

                product.description
                    .toLowerCase()
                    .includes(searchTerm);


            const matchesCategory =

                selectedCategory === "all"

                ||

                product.category ===
                selectedCategory;


            return (
                matchesSearch &&
                matchesCategory
            );

        });


    // Display filtered products
    displayProducts(filtered);


    // Update status
    statusText.textContent =
        `${filtered.length} product(s) found`;
}



// =====================================
// ADD TO CART
// =====================================

function addToCart() {

    // Increase cart count
    cartCount++;


    // Update cart display
    cartCountElement.textContent =
        cartCount;

}



// =====================================
// EVENT LISTENERS
// =====================================

// Search while typing
searchInput.addEventListener(
    "input",
    filterProducts
);


// Filter when category changes
categorySelect.addEventListener(
    "change",
    filterProducts
);


// =====================================
// START AJAX REQUEST
// =====================================

loadProducts();