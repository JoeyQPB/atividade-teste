export const compareCrescente = (a, b) => {
    if (a.valor < b.valor) {
        return -1;
    } else if (a.valor > b.valor) {
        return 1;
    } else {
        return 0;
    }
}