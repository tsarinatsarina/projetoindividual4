
class propriedadesCss {
    constructor() {
        this.lista = [];
    }

    adicionarElemento(item) {
        this.lista.push(item);
    }

    ordernarElementos() {
        this.lista.sort();
    }

    mostrarElementos() {
        return this.lista;
    }
}

module.exports = propriedadesCss;
