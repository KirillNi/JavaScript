'use strict'

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function() {
    this.price = this.price * 0.75;
};

let obj1 = new Product('product1', 500);
obj1.make25PercentDiscount();
