// In this solution we used a "for" loop to iterate over the input array instead of using the array's filter method. This reduced the complexity from O(n) to O(1), since the loop will loop over exactly the number of elements in the input array.
// Nesta solução, usamos um loop "for" para iterar sobre o array de entrada ao invés de usar o método filter do array. Isso reduziu a complexidade de O(n) para O(1), pois o loop percorrerá exatamente o número de elementos no array de entrada.

function solution(inputArray, k) {
    let filteredArray = [];

    for (let i = 0; i < inputArray.length; i++) {
        if ((i + 1) % k !== 0) {
            filteredArray.push(inputArray[i]);
        }
    }

    return filteredArray;
}

module.exports = solution;
