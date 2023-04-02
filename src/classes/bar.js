class Bar {
    constructor(barName, caixa) {
        this.barName = barName
        this.caixa = caixa
        this.products = []
    }

    debitar(valor) {
        this.caixa += valor
    }

    creditar(valor) {
        this.caixa -= valor
    }

    addProduct(product) {
        this.products.push(product)
        return product
    }

}
export { Bar }
