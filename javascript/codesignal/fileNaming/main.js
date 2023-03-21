// The solution function takes an array of strings names as its input and returns a new array of strings with the same values as names, but with duplicate strings renamed to include a count of their occurrences.
// The code uses a Map object to keep track of strings that have already appeared in the input array. When a string appears for the first time, it is added to the result array. If a future element in the array has the same string, the count of this string that was recorded in the Map object is used to append a count to the new name. The new name is checked again in the Map object to ensure there aren't any duplicate copies of that string with the same count in the result array.
// Here is a step-by-step outline of the code's processes:

// Define a function solution that takes an array names as input.
// Define an empty array result to hold the modified names.
// Define a new Map object map to keep track of each string and its count.
// Loop through each element of names.
// If the string at the current index already exists as a key in the Map object, append a count to its name.
// Check if this newly created string already exists in the Map. If it does, increment the count and append it to the name again.
// If the modified string does not exist in the Map, set the number of occurrences of the original string to the modified count + 1, and set this new name to have 1 occurrence.
// Add the new name to the result array.
// If the string at the current index is unique, add it to the result array as-is.
// Return the result array.

function solution(names) {
    let result = [];
    let map = new Map();
    for (let i = 0; i < names.length; i++) {
        if (map.has(names[i])) {
            let count = map.get(names[i]);
            let newName = names[i] + '(' + count + ')';
            while (map.has(newName)) {
                count++;
                newName = names[i] + '(' + count + ')';
            }
            map.set(names[i], count + 1);
            map.set(newName, 1);
            result.push(newName);
        } else {
            map.set(names[i], 1);
            result.push(names[i]);
        }
    }
    return result;
}

const assert = require('assert');
function testSolution() {
    let names = [
        "doc",
        "doc",
        "image",
        "doc(1)",
        "doc"];
    assert.deepStrictEqual(solution(names), [
        "doc",
        "doc(1)",
        "image",
        "doc(1)(1)",
        "doc(2)"]);
    console.log('Test 1: ', solution(names));

    names = [
        "a(1)",
        "a(6)",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a",
        "a"];
    assert.deepStrictEqual(solution(names), [
        "a(1)",
        "a(6)",
        "a",
        "a(2)",
        "a(3)",
        "a(4)",
        "a(5)",
        "a(7)",
        "a(8)",
        "a(9)",
        "a(10)",
        "a(11)"]);
    console.log('Test 2: ', solution(names));

    names = [
        "dd",
        "dd(1)",
        "dd(2)",
        "dd",
        "dd(1)",
        "dd(1)(2)",
        "dd(1)(1)",
        "dd",
        "dd(1)"];
    assert.deepStrictEqual(solution(names), [
        "dd",
        "dd(1)",
        "dd(2)",
        "dd(3)",
        "dd(1)(1)",
        "dd(1)(2)",
        "dd(1)(1)(1)",
        "dd(4)",
        "dd(1)(3)"]);
    console.log('Test 3: ', solution(names));

    names = [
        "a",
        "b",
        "cd",
        "b ",
        "a(3)"];
    assert.deepStrictEqual(solution(names), [
        "a",
        "b",
        "cd",
        "b ",
        "a(3)"]);
    console.log('Test 4: ', solution(names));

    names = [
        "name",
        "name",
        "name(1)",
        "name(3)",
        "name(2)",
        "name(2)"];
    assert.deepStrictEqual(solution(names), [
        "name",
        "name(1)",
        "name(1)(1)",
        "name(3)",
        "name(2)",
        "name(2)(1)"]);
    console.log('Test 5: ', solution(names));

    names = [];
    assert.deepStrictEqual(solution(names), []);
    console.log('Test 6: ', solution(names));
}

testSolution();
