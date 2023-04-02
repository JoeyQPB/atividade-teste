import express from "express"
import { barDoLeo } from "./config/bar.js"
import { Product } from "./classes/products.js"
import { GenerateNumbers } from "./utils/generateRandom.js"
const app = express()

// instance of GenerateNumbers
const randomNum = new GenerateNumbers()

// create products
const cerveja = new Product(barDoLeo, "Cerveja", randomNum.price(5, 15), randomNum.quantity(50, 100));
const pinga = new Product(barDoLeo, "Pinga", randomNum.price(5, 10), randomNum.quantity(5, 15));
const vodka = new Product(barDoLeo, "Vodka", randomNum.price(40, 160), randomNum.quantity(10, 20));
const wiskhey = new Product(barDoLeo, "Wiskhey", randomNum.price(100, 250), randomNum.quantity(5, 15));
const vinho = new Product(barDoLeo, "Vinho", randomNum.price(40, 1000), randomNum.quantity(8, 15));
const gin = new Product(barDoLeo, "Gin", randomNum.price(80, 160), randomNum.quantity(5, 15));
const tequila = new Product(barDoLeo, "Tequila", randomNum.price(100, 120), randomNum.quantity(5, 10));
const campari = new Product(barDoLeo, "Campari", randomNum.price(40, 60), randomNum.quantity(5, 10));
const montila = new Product(barDoLeo, "Montila", randomNum.price(20, 35), randomNum.quantity(20, 40));
const corote = new Product(barDoLeo, "Corote", randomNum.price(5, 10), randomNum.quantity(10, 15));

// MAIN
// big o notaion
// gerar no console

console.log(barDoLeo)
const array = barDoLeo.products

export { app }