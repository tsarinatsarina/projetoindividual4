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

import rl from 'readline-sync';
import chalk from 'chalk';
import PropriedadesCss from './propriedades';

const ordenacaoPropriedades = new PropriedadesCss();

console.log(chalk.blue("Bem-vindo à Ferramenta de Ordenação de Propriedades CSS!"));

while (true) {
    const propriedade = rl.question("Digite uma propriedade (ou 'SAIR' para sair): ");
    if (propriedade.toUpperCase() === "SAIR") {
        break;
    }
    ordenacaoPropriedades.adicionarElemento(propriedade);
}

ordenacaoPropriedades.ordernarElementos();

console.log(chalk.green("Propriedades ordenadas:"));
ordenacaoPropriedades.mostrarElementos().forEach((propriedade) => {
    console.log(propriedade);
});




