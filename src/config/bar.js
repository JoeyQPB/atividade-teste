import { Bar } from "../classes/bar.js";
import { Product } from "../classes/products.js";
import { GenerateNumbers } from "../utils/generateRandom.js";

// create bar
const barDoLeo = new Bar("Bar do Leo", 0);

// instance of GenerateNumbers
const randomNum = new GenerateNumbers()

// create products
const cerveja = new Product(barDoLeo, 1, "Cerveja", randomNum.price(5, 15), randomNum.quantity(50, 100));
const pinga = new Product(barDoLeo, 2, "Pinga", randomNum.price(5, 10), randomNum.quantity(5, 15));
const vodka = new Product(barDoLeo, 3, "Vodka", randomNum.price(40, 160), randomNum.quantity(10, 20));
const wiskhey = new Product(barDoLeo, 4, "Wiskhey", randomNum.price(100, 250), randomNum.quantity(5, 15));
const vinho = new Product(barDoLeo, 5, "Vinho", randomNum.price(40, 1000), randomNum.quantity(8, 15));
const gin = new Product(barDoLeo, 6, "Gin", randomNum.price(80, 160), randomNum.quantity(5, 15));
const tequila = new Product(barDoLeo, 7, "Tequila", randomNum.price(100, 120), randomNum.quantity(5, 10));
const campari = new Product(barDoLeo, 8, "Campari", randomNum.price(40, 60), randomNum.quantity(5, 10));
const montila = new Product(barDoLeo, 9, "Montila", randomNum.price(20, 35), randomNum.quantity(20, 40));
const corote = new Product(barDoLeo, 10, "Corote", randomNum.price(5, 10), randomNum.quantity(10, 15));

export { barDoLeo }