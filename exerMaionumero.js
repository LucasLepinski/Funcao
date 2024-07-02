// const prompt = require("prompt-sync")();

const PromptSync = require("prompt-sync");

// function maiorNumeroPossivel(numero) {
//     // Convertendo o número para string e ordenando os dígitos em ordem decrescente
//     let numAleatorio = numero.parseInt()

//     // Juntando os dígitos ordenados para formar o maior número possível
//     let maiorNumero = parseInt(numAleatorio);

//     return maiorNumero;
// }

// // Pedindo ao usuário para digitar um número
// let numero = prompt("Digite um número: ");

// // Chamando a função para obter o maior número possível
// let maior = maiorNumeroPossivel(numero);

// // Exibindo o resultado para o usuário
// console.log(`O maior número possível formado com os dígitos de ${numero} é: ${maior}`);

const prompt = require ("prompt-sync")();

function ehNum(num) {
    return !isNaN(Number(num))
}

function maiorNumero(num) {
    if(ehNum(num)) {
    let array = num.split("")

    for (let i = 0; i < array.length; i ++) {
        for (let j = i + 1; j < array.length; j++) {

            if (array [i] < array [j]) {
                let aux = array[j];
                array[j] = array [i]
                array[i] = aux
            }
        }
    }
    return array.join("");
}

console.log(("numero invalido"));
return false; 
}

const numero = prompt("Digite um numero: ");

let maior = maiorNumero ( numero)

console.log(maior);

