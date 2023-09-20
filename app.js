// Importa as bibliotecas readline-sync e chalk.
import rl from 'readline-sync';
import chalk from 'chalk';

// Cria uma classe PropriedadesCss para gerenciar as propriedades CSS.
class PropriedadesCss {
    constructor() {
        // Inicializa uma lista vazia para armazenar as propriedades.
        this.lista = [];
    }

    // Método para adicionar uma propriedade à lista.
    adicionarElemento(item) {
        this.lista.push(item);
    }

    // Método para ordenar as propriedades na lista em ordem alfabética.
    ordernarElementos() {
        this.lista.sort();
    }

    // Método para retornar a lista de propriedades.
    mostrarElementos() {
        return this.lista;
    }
}

// Cria uma instância da classe PropriedadesCss.
const ordenacaoPropriedades = new PropriedadesCss();

// Exibe uma mensagem de boas-vindas usando a biblioteca chalk.
console.log(chalk.blue("Bem-vindo à Ferramenta de Ordenação de Propriedades CSS!"));

// Entra em um loop onde o usuário pode inserir propriedades CSS.
while (true) {
    // Solicita ao usuário que insira uma propriedade ou "SAIR" para sair.
    const propriedade = rl.question("Digite uma propriedade (ou 'SAIR' para sair): ");
    
    // Verifica se o usuário deseja sair do programa.
    if (propriedade.toUpperCase() === "SAIR") {
        break;
    }
    
    // Adiciona a propriedade à lista.
    ordenacaoPropriedades.adicionarElemento(propriedade);
}

// Ordena as propriedades na lista.
ordenacaoPropriedades.ordernarElementos();

// Exibe as propriedades ordenadas usando a biblioteca chalk.
console.log(chalk.green("Propriedades ordenadas:"));
ordenacaoPropriedades.mostrarElementos().forEach((propriedade) => {
    console.log(propriedade);
});




