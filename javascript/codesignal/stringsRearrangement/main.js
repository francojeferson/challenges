// This function checks whether a given set of words can be made into a string of words, where each word is only one letter different from the previous word. For example, the input sets "cat", "cot", "cog", "dog" can be transformed into a string: "cat" -> "cot" -> "cog" -> "dog". The function uses the depth-first search (DFS) algorithm to traverse all possible paths between words. If the algorithm finds a path that connects all the words, the function returns true; otherwise, false.
// Esta função verifica se um dado conjunto de palavras pode ser transformado em uma cadeia de palavras, onde cada palavra seja apenas uma letra diferente da palavra anterior. Por exemplo, os conjuntos de entrada "cat", "cot", "cog", "dog" podem ser transformados em uma cadeia: "cat" -> "cot" -> "cog" -> "dog". A função usa o algoritmo de busca em profundidade (DFS) para percorrer todos os possíveis caminhos entre as palavras. Se o algoritmo encontrar um caminho que conecta todas as palavras, a função retornará true; caso contrário, false.

function solution(inputArray) {
    const n = inputArray.length;
    const m = inputArray[0].length;
    const g = Array(n).fill(0).map(() => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i != j) {
                let diff = 0;
                for (let k = 0; k < m; k++) {
                    if (inputArray[i][k] != inputArray[j][k]) {
                        diff++;
                    }
                }
                if (diff == 1) {
                    g[i][j] = 1;
                }
            }
        }
    }
    const used = Array(n).fill(false);
    const path = [];
    const dfs = (v) => {
        used[v] = true;
        path.push(v);
        if (path.length == n) {
            return true;
        }
        for (let i = 0; i < n; i++) {
            if (g[v][i] && !used[i]) {
                if (dfs(i)) {
                    return true;
                }
            }
        }
        used[v] = false;
        path.pop();
        return false;
    };
    for (let i = 0; i < n; i++) {
        if (dfs(i)) {
            return true;
        }
    }
    return false;
}

// unit test
// teste unitário
const assert = require('assert');

function testSolution() {
    let inputArray = [
        "aba",
        "bbb",
        "bab"];
    assert.equal(solution(inputArray), false);
    console.log('Test 1: ', solution(inputArray));

    inputArray = [
        "ab",
        "bb",
        "aa"];
    assert.equal(solution(inputArray), true);
    console.log('Test 2: ', solution(inputArray));

    inputArray = [
        "q",
        "q"];
    assert.equal(solution(inputArray), false);
    console.log('Test 3: ', solution(inputArray));

    inputArray = [
        "zzzzab",
        "zzzzbb",
        "zzzzaa"];
    assert.equal(solution(inputArray), true);
    console.log('Test 4: ', solution(inputArray));

    inputArray = [
        "ab",
        "ad",
        "ef",
        "eg"];
    assert.equal(solution(inputArray), false);
    console.log('Test 5: ', solution(inputArray));

    inputArray = [
        "abc",
        "bef",
        "bcc",
        "bec",
        "bbc",
        "bdc"];
    assert.equal(solution(inputArray), true);
    console.log('Test 6: ', solution(inputArray));

    inputArray = [
        "abc",
        "abx",
        "axx",
        "abc"];
    assert.equal(solution(inputArray), false);
    console.log('Test 7: ', solution(inputArray));

    inputArray = [
        "abc",
        "abx",
        "axx",
        "abx",
        "abc"];
    assert.equal(solution(inputArray), true);
    console.log('Test 8: ', solution(inputArray));

    inputArray = [
        "f",
        "g",
        "a",
        "h"];
    assert.equal(solution(inputArray), true);
    console.log('Test 9: ', solution(inputArray));

    inputArray = [
        "ff",
        "gf",
        "af",
        "ar",
        "hf"];
    assert.equal(solution(inputArray), true);
    console.log('Test 10: ', solution(inputArray));

    inputArray = [
        "a",
        "b",
        "c"];
    assert.equal(solution(inputArray), true);
    console.log('Test 11: ', solution(inputArray));
}

testSolution();
