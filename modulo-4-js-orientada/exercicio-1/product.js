class Product{
    constructor(name, description, price){
        this.name = name
        this.description = description
        this. price = price
        this.inStock = 0
    }

    addToStock(quantity){
        this.inStock += quantity

    }
    calculateDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }
}

const wath = new Product ("relogio de pulso", "...", 80)
wath.addToStock(99)
const priceWithDiscount = wath.calculateDiscount(15)

console.log(wath)
console.log(priceWithDiscount)