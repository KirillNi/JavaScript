'use strict'

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price * 0.75;
    }
}

let obj1 = new Product('product1', 500);
obj1.make25PercentDiscount();
