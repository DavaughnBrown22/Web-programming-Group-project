// Add ids to existing grid divs so the javascript can find them
document.querySelector('#Gaming .grid').id = 'gamingGrid';
document.querySelector('#Entertainment .grid').id = 'entertainmentGrid';
document.querySelector('#Retail .grid').id = 'retailGrid';

// Array to store all the giftcard product details
const products = [
    // Gaming Gift Cards
    {category: "Gaming", name: "$10 Playstation Gift Card", price: 1576.00, description: "PlayStation Network $10 gift card", image: "../Assets/Playstation4 Giftcard 10.jpg"},
    {category: "Gaming", name: "$25 Playstation Gift Card", price: 3950.15, description: "PlayStation Network $25 gift card", image: "../Assets/Playstation4 Giftcard 25.jpg"},
    {category: "Gaming", name: "$50 Playstation Gift Card", price: 7880.30, description: "PlayStation Network $50 gift card", image: "../Assets/Playstation4 Giftcard 50.jpg"},
    {category: "Gaming", name: "$75 Playstation Gift Card", price: 11820.44, description: "PlayStation Network $75 gift card", image: "../Assets/Playstation4 Giftcard 75.jpg"},
    {category: "Gaming", name: "$100 Playstation Gift Card", price: 15760.59, description: "PlayStation Network $100 gift card", image: "../Assets/Playstation4 Giftcard 100.jpg"},
    {category: "Gaming", name: "$150 Playstation Gift Card", price: 23640.89, description: "PlayStation Network $150 gift card", image: "../Assets/Playstation4 Giftcard 150.jpg"},
    {category: "Gaming", name: "$200 Playstation Gift Card", price: 31521.18, description: "PlayStation Network $200 gift card", image: "../Assets/Playstation4 Giftcard 200.jpg"},
    {category: "Gaming", name: "$250 Playstation Gift Card", price: 39401.48, description: "PlayStation Network $250 gift card", image: "../Assets/Playstation4 Giftcard 250.jpg"},
    {category: "Gaming", name: "$10 Xbox Gift Card", price: 1576.06, description: "Xbox Network $10 gift card", image: "../Assets/Xbox Giftcard 10.jpg"},
    {category: "Gaming", name: "$15 Xbox Gift Card", price: 2364.09, description: "Xbox Network $15 gift card", image: "../Assets/Xbox Giftcard 15.jpg"},
    {category: "Gaming", name: "$20 Xbox Gift Card", price: 3152.12, description: "Xbox Network $20 gift card", image: "../Assets/Xbox Giftcard 20.jpg"},
    {category: "Gaming", name: "$25 Xbox Gift Card", price: 3940.15, description: "Xbox Network $25 gift card", image: "../Assets/Xbox Giftcard 25.jpg"},
    {category: "Gaming", name: "$30 Xbox Gift Card", price: 4728.18, description: "Xbox Network $30 gift card", image: "../Assets/Xbox Giftcard 30.jpg"},
    {category: "Gaming", name: "$40 Xbox Gift Card", price: 6304.24, description: "Xbox Network $40 gift card", image: "../Assets/Xbox Giftcard 40.jpg"},
    {category: "Gaming", name: "$50 Xbox Gift Card", price: 7852.69, description: "Xbox Network $50 gift card", image: "../Assets/Xbox Giftcard 50.jpg"},
    {category: "Gaming", name: "$60 Xbox Gift Card", price: 9423.23, description: "Xbox Network $60 gift card", image: "../Assets/Xbox Giftcard 60.jpg"},
    {category: "Gaming", name: "$70 Xbox Gift Card", price: 11032.41, description: "Xbox Network $70 gift card", image: "../Assets/Xbox Giftcard 70.jpg"},
    {category: "Gaming", name: "$100 Xbox Gift Card", price: 15760.59, description: "Xbox Network $100 gift card", image: "../Assets/Xbox Giftcard 100.jpg"},
    // Entertainment Gift Cards
    {category: "Entertainment", name: "$15 Apple Gift Card", price: 2366.81, description: "Apple $15 gift card", image: "../Assets/Applie Giftcard.jpg"},
    {category: "Entertainment", name: "$25 Apple Gift Card", price: 3926.35, description: "Apple $25 gift card", image: "../Assets/Applie Giftcard.jpg"},
    {category: "Entertainment", name: "$50 Apple Gift Card", price: 7852.60, description: "Apple $50 gift card", image: "../Assets/Applie Giftcard.jpg"},
    {category: "Entertainment", name: "$75 Apple Gift Card", price: 11820.44, description: "Apple $75 gift card", image: "../Assets/Applie Giftcard.jpg"},
    {category: "Entertainment", name: "$100 Apple Gift Card", price: 15760.59, description: "Apple $100 gift card", image: "../Assets/Applie Giftcard.jpg"},
    {category: "Entertainment", name: "$200 Apple Gift Card", price: 31521.18, description: "Apple $200 gift card", image: "../Assets/Applie Giftcard.jpg"},
    {category: "Entertainment", name: "$300 Apple Gift Card", price: 29945.12, description: "Apple $300 gift card", image: "../Assets/Applie Giftcard.jpg"},
    {category: "Entertainment", name: "$400 Apple Gift Card", price: 63042.36, description: "Apple $400 gift card", image: "../Assets/Applie Giftcard.jpg"},
    {category: "Entertainment", name: "$500 Apple Gift Card", price: 78802.95, description: "Apple $500 gift card", image: "../Assets/Applie Giftcard.jpg"},
    {category: "Entertainment", name: "$15 Netflix Gift Card", price: 2355.81, description: "Netflix $15 gift card", image: "../Assets/Netflix giftcards.jpg"},
    {category: "Entertainment", name: "$25 Netflix Gift Card", price: 3926.35, description: "Netflix $25 gift card", image: "../Assets/Netflix giftcards.jpg"},
    {category: "Entertainment", name: "$50 Netflix Gift Card", price: 7852.69, description: "Netflix $50 gift card", image: "../Assets/Netflix giftcards.jpg"},
    {category: "Entertainment", name: "$100 Netflix Gift Card", price: 15705.39, description: "Netflix $100 gift card", image: "../Assets/Netflix giftcards.jpg"},
    // Retail Gift Cards
    {category: "Retail", name: "$15 Starbucks Gift Card", price: 2364.00, description: "Starbucks $15 gift card", image: "../Assets/Starbucks gift card.jpg"},
    {category: "Retail", name: "$25 Starbucks Gift Card", price: 3940.15, description: "Starbucks $25 gift card", image: "../Assets/Starbucks gift card.jpg"},
    {category: "Retail", name: "$50 Starbucks Gift Card", price: 7880.00, description: "Starbucks $50 gift card", image: "../Assets/Starbucks gift card.jpg"},
    {category: "Retail", name: "$75 Starbucks Gift Card", price: 11820.44, description: "Starbucks $75 gift card", image: "../Assets/Starbucks gift card.jpg"},
    {category: "Retail", name: "$100 Starbucks Gift Card", price: 15760.59, description: "Starbucks $100 gift card", image: "../Assets/Starbucks gift card.jpg"},
    {category: "Retail", name: "$150 Starbucks Gift Card", price: 23558.08, description: "Starbucks $150 gift card", image: "../Assets/Starbucks gift card.jpg"},
    {category: "Retail", name: "$200 Starbucks Gift Card", price: 31521.18, description: "Starbucks $200 gift card", image: "../Assets/Starbucks gift card.jpg"},
    {category: "Retail", name: "$250 Starbucks Gift Card", price: 39263.47, description: "Starbucks $250 gift card", image: "../Assets/Starbucks gift card.jpg"},
    {category: "Retail", name: "$25 Amazon Gift Card", price: 3926.35, description: "Amazon $25 gift card", image: "../Assets/Amazon giftcards.webp"},
    {category: "Retail", name: "$50 Amazon Gift Card", price: 7852.69, description: "Amazon $50 gift card", image: "../Assets/Amazon giftcards.webp"},
    {category: "Retail", name: "$75 Amazon Gift Card", price: 11779.04, description: "Amazon $75 gift card", image: "../Assets/Amazon giftcards.webp"},
    {category: "Retail", name: "$100 Amazon Gift Card", price: 15705.39, description: "Amazon $100 gift card", image: "../Assets/Amazon giftcards.webp"},
    {category: "Retail", name: "$150 Amazon Gift Card", price: 23558.08, description: "Amazon $150 gift card", image: "../Assets/Amazon giftcards.webp"},
    {category: "Retail", name: "$200 Amazon Gift Card", price: 31410.78, description: "Amazon $200 gift card", image: "../Assets/Amazon giftcards.webp"}
];

// Save to localStorage
localStorage.setItem('AllProducts', JSON.stringify(products));

// Clear existing hardcoded cards and render from array
document.getElementById('gamingGrid').innerHTML = '';
document.getElementById('entertainmentGrid').innerHTML = '';
document.getElementById('retailGrid').innerHTML = '';

products.forEach(product => { // Loop through each product in the products array
    let grid = document.getElementById(product.category.toLowerCase() + 'Grid'); // basically finds and tells the code where to put the product 
    if (!grid) return; // safety check to make sure the grid exists before trying to add products to it

    // builds the html card and adds it to the grid 
    grid.innerHTML += ` 
        <div class="GiftCard">
            <img src="${product.image}" alt="${product.name}"> 
            <div class="Information">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="Price">$${product.price.toFixed(2)} JMD</p>
                <button class="Add-to-Cart" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
            </div>
        </div>
    `;
});

// Add to Cart
document.addEventListener('click', function(clicked) {
    if (clicked.target.classList.contains('Add-to-Cart')) {
        let cart = JSON.parse(localStorage.getItem('gf_cart')) || [];
        cart.push({
            name: clicked.target.getAttribute('data-name'),
            price: parseFloat(clicked.target.getAttribute('data-price'))
        });
        localStorage.setItem('gf_cart', JSON.stringify(cart));
        alert("Item added to cart!");
    }
});
