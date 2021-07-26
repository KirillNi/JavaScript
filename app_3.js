'use strict'

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

// let productsSale = [];
// products.forEach(function (newPrice) {
//     productsSale.push(newPrice.price * 0.85);
// });

// console.log(productsSale)

products.forEach(function (newPrice) {
    newPrice.price = newPrice.price * 0.85;
});

console.log(products);
