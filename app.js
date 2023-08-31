
const rl = require('readline-sync');
const chalk = require('chalk');
const propriedadesCss = require('./propriedades');

const ordenacaoPropriedades = new propriedadesCss();

console.log(chalk.blue("Bem-vindo à Ferramenta de Ordenação de Propriedades CSS!"));

while (true) {
    const propriedade = rl.question("Digite uma propriedade (ou 'SAIR' para sair): ");
    if (propriedade.toUpperCase() === "SAIR") {
        break;
    }
    listaPropriedades.adicionarElemento(propriedade);
}

ordenacaoPropriedades.ordernarElementos();

console.log(chalk.green("Propriedades ordenadas:"));
listaPropriedades.mostrarElementos().forEach((propriedade) => {
    console.log(propriedade);
});
