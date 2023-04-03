import { Bar } from "./bar.js";

class Product extends Bar {
    constructor(bar, id, name, price, quantity) {
        super(bar.barName, bar.caixa)
        this.bar = bar
        this.name = name
        this.price = price
        this.quantity = quantity
        this.id = id
        this.bar.addProduct({ _id: this.id, nome: this.name, preco: this.price, quantidade: this.quantity });
    }
}

export { Product }