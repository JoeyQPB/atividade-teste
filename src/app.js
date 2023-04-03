import express from "express"
import { barDoLeo } from "./config/bar.js"
import { compareCrescente, compareDecrescente } from "./utils/compare.js"
const app = express()

// vendas
barDoLeo.sell("Cerveja", 10, "Joey")
barDoLeo.sell("Wiskhey", 5, "Vitor")
barDoLeo.sell("Tequila", 1, "Kendy")
barDoLeo.sell("Gin", 1, "Joey")
barDoLeo.sell("Corote", 2, "Vitor")
barDoLeo.sell("Campari", 1000, "Kendy")
barDoLeo.sell("Cerveja", 10, "Joey")
barDoLeo.sell("Wiskhey", 5, "Vitor")
barDoLeo.sell("Tequila", 1, "Kendy")
barDoLeo.sell("Gin", 1, "Joey")
barDoLeo.sell("Corote", 2, "Vitor")
barDoLeo.sell("Campari", 1000, "Kendy")
barDoLeo.sell("Cerveja", 10, "Joey")
barDoLeo.sell("Wiskhey", 5, "Vitor")
barDoLeo.sell("Tequila", 1, "Kendy")
barDoLeo.sell("Gin", 1, "Joey")
barDoLeo.sell("Corote", 2, "Vitor")
barDoLeo.sell("Campari", 1000, "Kendy")

// MAIN

// Apresentando o BAR DO LEO
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

function sortBalancoDesc(balanco) {
    let i, j;
    let temp;
    for (i = 0; i < balanco.length - 1; i++) {
        for (j = i + 1; j < balanco.length; j++) {
            if (compareDecrescente(balanco[i], balanco[j]) > 0) {
                temp = balanco[i];
                balanco[i] = balanco[j];
                balanco[j] = temp;
            }
        }
    }
    return balanco;
}

// imprimir o balanço ordenado por ordem crescente de valor
console.log({ Balanco_Crescente: sortBalancoCres(barDoLeo.balanco) })
console.log({ Balanco_Decrescente: sortBalancoDesc(barDoLeo.balanco) })


// Gerando comandas
console.log(barDoLeo.gerarComanda("Vitor"))
console.log(barDoLeo.gerarComanda("Joey"))
console.log(barDoLeo.gerarComanda("Kendy"))


export { app }