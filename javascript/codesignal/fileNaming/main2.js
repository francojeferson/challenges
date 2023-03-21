// This code defines a function named solution that takes an array names as an argument. It returns a new array with the same elements as names, but with duplicates renamed to avoid collisions.
// The reduce method is used to iterate over the input array, using an empty array as the starting value for the result parameter. For each element of names, the function checks if result already contains that name using the includes method. If it does not, the name is simply added to the result array.
// If result does include the current element, a counter named k is initialized as 1, and a while loop is used to increment k until the name ${each}(${k}) is not already in result. Once a unique name has been found, this new name is pushed to the result array.
// Once all elements of names have been processed, the resulting array is returned.

// solution by tom_p24
function solution(names) {
    return names.reduce((result, each) => {
        if (!result.includes(each)) result.push(each);
        else {
            k = 1;
            while (result.includes(`${each}(${k})`)) k++;
            result.push(`${each}(${k})`);
        }

        return result;
    }, []);

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
