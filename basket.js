'use strict'

let openBasketBtn = document.querySelector('.cartIconWrap');
let basketEl = document.querySelector('.basket');
let basketCounterEl = document.querySelector('.cartIconWrap span');
let basketTotalEl = document.querySelector('.basketTotal');
let basketTotalValueEl = document.querySelector('.basketTotalValue');

let featuredItems = document.querySelectorAll('.featuredItem');
let addToCartBtns = document.querySelectorAll('.featuredItem button');

openBasketBtn.addEventListener('click', function () {
    basketEl.classList.toggle('hidden');
});

let basket = {};

addToCartBtns.forEach(function (button) {
    button.addEventListener('click', addedProductHandler);
});

function addedProductHandler(event) {
    let productId = event.currentTarget.getAttribute('data-productId');
    let name = featuredItems[productId].getElementsByClassName('featuredName')[0].innerText;
    let price = Number(featuredItems[productId].getElementsByClassName('featuredPrice')[0].innerText.slice(1));
    addProductIntoBasket(productId, name, price);
}

function addProductIntoBasket(productId, name, price) {
    addProductToObject(productId);
    increaseProductsCount();
    renderProductInBasket(productId, name, price);
    calculateAndRenderTotalBasketSum(price);
}

function addProductToObject(productId) {
    if (!(productId in basket)) {
        basket[productId] = 1;
    } else {
        basket[productId]++;
    }
}

function increaseProductsCount() {
    basketCounterEl.textContent++;
}

function renderProductInBasket(productId, name, price) {
    let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`);
    if (productExist) {
        increaseProductCount(productId);
        recalculateSumForProduct(productId, price);
    } else {
        renderNewProductInBasket(productId, name, price);
    }
}

function calculateAndRenderTotalBasketSum(price) {
    let totalSum = 0;
    for (let productId in basket) {
        totalSum += basket[productId] * price;
    }
    basketTotalValueEl.textContent = totalSum.toFixed(2);
}

function increaseProductsCount() {
    basketCounterEl.textContent++;
}

function increaseProductCount(productId) {
    let productCountEl = document.querySelector(`.productCount[data-productId="${productId}"]`);
    productCountEl.textContent++;
}

function recalculateSumForProduct(productId, price) {
    const productTotalRowEl = document.querySelector(`.productTotalRow[data-productId="${productId}"]`);
    let totalPriceForRow = (basket[productId] * price).toFixed(2);
    productTotalRowEl.textContent = totalPriceForRow;
}

function renderNewProductInBasket(productId, name, price) {
    let productRow = `
        <div class="basketRow">
            <div>${name}</div>
            <div>
                <span class="productCount" data-productId="${productId}">1</span> шт.
            </div>
            <div>$${price}</div>
            <div>
                $<span class="productTotalRow" data-productId="${productId}">${price}</span>
            </div>
        </div>
    `;
    basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}
