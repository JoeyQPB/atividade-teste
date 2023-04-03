class GenerateNumbers {
    price(max, min) {
        const randomNumer = Math.random() * (max - min + 1) + min;
        return Number(randomNumer.toFixed(1) + '9');
    }

    quantity(max, min) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}

export { GenerateNumbers }
