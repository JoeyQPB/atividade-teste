import { Bar } from "./bar.js";
import { v4 as uuidv4 } from 'uuid';

class Product extends Bar {
    constructor(bar, name, price, quantity) {
        super(bar.barName, bar.caixa)
        this.bar = bar
        this.name = name
        this.price = price
        this.quantity = quantity
        this.id = uuidv4()
        this.bar.addProduct({ _id: this.id, nome: this.name, preco: this.price, quantidade: this.quantity });
    }
}

export { Product }