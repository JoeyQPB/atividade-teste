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
        let valorTotal = 0
        for (let i = 0; i < this.balanco.length; i++) {
            if (this.balanco[i].Cliente === cliente) {
                valorTotal += this.balanco[i].valor
            }
        }
        return `[>] O valor total do cliente ${cliente} foi de ${valorTotal.toFixed(2)} `;
    }

}
export { Bar }
