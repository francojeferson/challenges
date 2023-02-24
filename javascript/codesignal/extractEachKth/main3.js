// The optimization in this code consists in incrementing the value of the variable "i" with the value of "k" instead of incrementing 1 each iteration, this way we skip the positions we don't want to add to the filtered array.
// A otimização neste código consiste em incrementar o valor da variável "i" com o valor de "k" ao invés de incrementar 1 a cada iteração, dessa forma pula-se as posições que não desejamos adicionar à array filtrada.

function solution(inputArray, k) {
    let filteredArray = [];

    // iteration of the array starts at 0 and goes up to the size of the array, jumping from k to k
    // iteração do array começa em 0 e vai até o tamanho do array, pulando de k em k
    for (let i = 0; i < inputArray.length; i += k) {
        filteredArray.push(inputArray[i]);
    }

    return filteredArray;
}

module.exports = solution;
