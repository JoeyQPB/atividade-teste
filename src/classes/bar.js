class Bar {
    constructor(barName, caixa) {
        this.barName = barName
        this.caixa = caixa
        this.products = []
        this.balanco = []
    }

    debitar(valor) {
        const caixa = this.caixa += valor
        this.caixa = parseFloat(caixa.toFixed(2))
    }

    creditar(valor) {
        this.caixa -= valor
    }

    addProduct(product) {
        this.products.push(product)
        return product
    }

    sell(product, quantidade, client) {
        for (let i = 0; i < this.products.length; i++) {
            if (product === this.products[i].nome) {
                if (this.products[i].quantidade < quantidade) {
                    console.log(`[X] O cliente ${client}, teve sua compra cancelada, pois não temos estoques para a venda de ${quantidade + " " + product}`)
                    return
                }
                this.products[i].quantidade -= quantidade
                this.debitar(this.products[i].preco * quantidade)
                this.updateBalanco(this.products[i], quantidade, client)
            }
        }
    }

    updateBalanco(product, quantidade, client) {
        const newRegister = {
            Cliente: client,
            item: product.nome,
            unidades: quantidade,
            valor: parseFloat((product.preco * quantidade).toFixed(2))
        }
        this.balanco.push(newRegister)
    }

    gerarComanda(cliente) {
        let valorTotal = 0;
        for (let i = 0; i < this.balanco.length; i++) {
            if (this.balanco[i].Cliente === cliente) {
                valorTotal += this.balanco[i].valor
            }
        }

        let reais = []
        let centavos = []

        valorTotal = valorTotal.toFixed(2)
        const partes = valorTotal.toString().split('.');

        for (let i = 0; i < partes.length; i++) {
            if (partes[i].length > 5) return "MUITO MONEY"
            for (let j = 0; j < partes.length; j++) {
                if (i === 1) {
                    const partesCents = partes[i].split("").reverse()
                    for (let k = 0; k < partes[i].length; k++) {
                        centavos.push(partesCents[k])
                    }
                }

                if (i === 0) {
                    const reaisInvertidos = partes[i].split('').reverse()
                    for (let k = 0; k < partes[i].length; k++) {
                        if (reais.length === reaisInvertidos.length) break
                        reais.push(reaisInvertidos[k])
                    }
                }

            }
        }

        const conta = {
            dezenas_de_milhar: reais[4] || 0,
            unidades_de_milhar: reais[3] || 0,
            unidades_de_cententa: reais[2] || 0,
            unidades_de_dezena: reais[1] || 0,
            unidades: reais[0] || 0,
            dezenas_de_cents: centavos[1] || 0,
            unidades_de_cents: centavos[0] || 0,
        }
        return `[>] O valor total do cliente ${cliente} foi de ${valorTotal},
            dezenas de milhar: ${conta.dezenas_de_milhar},
            unidades de milhar: ${conta.unidades_de_milhar},
            unidades de cententa: ${conta.unidades_de_cententa},
            unidades de dezena: ${conta.unidades_de_dezena},
            unidades: ${conta.unidades},
            dezenas de cents: ${conta.dezenas_de_cents},
            unidades de cents: ${conta.unidades_de_cents}`;
    }

}
export { Bar }
