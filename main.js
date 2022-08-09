/* Declaración de variables */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartMenu = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container')

/* Desktop menu */
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    if (!shoppingCartMenu.classList.contains('inactive')) {
        shoppingCartMenu.classList.toggle('inactive')
    }
}

/* Mobile menu */
burgerMenu.addEventListener('click', toggleBurgerMenu);

function toggleBurgerMenu() {
    mobileMenu.classList.toggle('inactive');
    if (!shoppingCartMenu.classList.contains('inactive')) {
        shoppingCartMenu.classList.toggle('inactive');
    }
}

/* Shopping cart menu */
shoppingCart.addEventListener('click', toggleShoppingCart);

function toggleShoppingCart() {
    shoppingCartMenu.classList.toggle('inactive');
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.toggle('inactive');
    }
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.toggle('inactive');
    }
}

/* Emulando una API para añadir los artículos a la venta */
const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Motorcycle',
    price: 3000,
    image: 'https://img.remediosdigitales.com/cb4ef1/honda_cbr/450_1000.jpg'
});
productList.push({
    name: 'Laptop',
    price: 500,
    image: 'https://static.acer.com/up/Resource/Acer/Laptops/Porsche_Design_Acer_Book_RS/Images/20220612/Porsche-Design-Acer-Book-RS-AP714-51-modelpreview.png'
});

/* 
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
 */
for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info')

    const description = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$'+product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
    
    const productFigure = document.createElement('figure');
    const productAddToCart = document.createElement('img');
    productAddToCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    productAddToCart.setAttribute('alt', 'Add to cart');

    /* Creando la estructura HTML con appendChild */
    cardContainer.appendChild(productCard);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    productInfo.appendChild(description)
    description.appendChild(productPrice);
    description.appendChild(productName);
    productInfo.appendChild(productFigure);
    productFigure.appendChild(productAddToCart);
}