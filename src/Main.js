import express from "express"
import { barDoLeo } from "./config/bar.js"
import { compareCrescente } from "./utils/compare.js"
const app = express()

// vendas
//c1
barDoLeo.sell("Cerveja", 10, "Joey")
barDoLeo.sell("Gin", 1, "Joey")
barDoLeo.sell("Cerveja", 10, "Joey")

//c2
barDoLeo.sell("Wiskhey", 5, "Vitor")
barDoLeo.sell("Corote", 2, "Vitor")

//c3
barDoLeo.sell("Tequila", 1, "Kendy")
barDoLeo.sell("Campari", 1000, "Kendy")
barDoLeo.sell("Vodka", 2, "Kendy")

//c4
barDoLeo.sell("Vinho", 1, "Rebeca")
barDoLeo.sell("Cerveja", 2, "Rebeca")
barDoLeo.sell("Vodka", 1, "Rebeca")

//c5
barDoLeo.sell("Montila", 2, "Sophia")
barDoLeo.sell("Cerveja", 2, "Sophia")

//c6
barDoLeo.sell("Pinga", 2, "Thaise")
barDoLeo.sell("Pinga", 2, "Thaise")

//c7
barDoLeo.sell("Montila", 3, "Arthur")
barDoLeo.sell("Corote", 1, "Arthur")

//c8
barDoLeo.sell("Cerveja", 4, "Gustavo")
barDoLeo.sell("Montila", 1, "Gustavo")

//c9
barDoLeo.sell("Campari", 3, "Mitsu")
barDoLeo.sell("Voddka", 1, "Mitsu")
barDoLeo.sell("Vinho", 1, "Mitsu")

//c10
barDoLeo.sell("Wiskhey", 1, "Jhon")
barDoLeo.sell("Pinga", 1000, "Jhon")
barDoLeo.sell("Montila", 1000, "Jhon")

// Apresentando o bar 
console.log(barDoLeo)

// big o notaion and sort
const sortBalancoCres = (balanco) => {
    let i, j;
    let temp;
    for (i = 0; i < balanco.length - 1; i++) {
        for (j = i + 1; j < balanco.length; j++) {
            if (compareCrescente(balanco[i], balanco[j]) > 0) {
                temp = balanco[i];
                balanco[i] = balanco[j];
                balanco[j] = temp;
            }
        }
    }
    return balanco
}

// imprimir o balanço ordenado por ordem crescente de valor
console.log({ Balanco_Crescente: sortBalancoCres(barDoLeo.balanco) })

// Gerando comandas
console.log(barDoLeo.gerarComanda("Vitor"))
console.log(barDoLeo.gerarComanda("Joey"))
console.log(barDoLeo.gerarComanda("Kendy"))
console.log(barDoLeo.gerarComanda("Rebeca"))
console.log(barDoLeo.gerarComanda("Sophia"))
console.log(barDoLeo.gerarComanda("Gustavo"))
console.log(barDoLeo.gerarComanda("Thaise"))
console.log(barDoLeo.gerarComanda("Arthur"))
console.log(barDoLeo.gerarComanda("Jhon"))
console.log(barDoLeo.gerarComanda("Mitsu"))

export { app }