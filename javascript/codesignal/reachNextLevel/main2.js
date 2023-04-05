// This code defines a function called "solution" that takes in three parameters: "experience", "threshold", and "reward". The function checks if the sum of "experience" and "reward" is greater than or equal to "threshold". If it is, the function returns true. If it is not, the function returns false. Essentially, this code checks whether a player has earned enough experience points to receive a certain reward based on a given threshold.

const solution = (experience, threshold, reward) => experience + reward >= threshold;

const assert = require('assert');
function testSolution() {
    try {
        let experience = 10;
        let threshold = 15;
        let reward = 5;
        assert.equal(solution(experience, threshold, reward), true);
        console.log('Test 1: ', solution(experience, threshold, reward));

        experience = 10;
        threshold = 15;
        reward = 4;
        assert.equal(solution(experience, threshold, reward), false);
        console.log('Test 2: ', solution(experience, threshold, reward));

        experience = 3;
        threshold = 6;
        reward = 4;
        assert.equal(solution(experience, threshold, reward), true);
        console.log('Test 3: ', solution(experience, threshold, reward));

        experience = 84;
        threshold = 135;
        reward = 36;
        assert.equal(solution(experience, threshold, reward), false);
        console.log('Test 4: ', solution(experience, threshold, reward));

        experience = 74;
        threshold = 170;
        reward = 58;
        assert.equal(solution(experience, threshold, reward), false);
        console.log('Test 5: ', solution(experience, threshold, reward));

        experience = 80;
        threshold = 199;
        reward = 15;
        assert.equal(solution(experience, threshold, reward), false);
        console.log('Test 6: ', solution(experience, threshold, reward));

        experience = 97;
        threshold = 57;
        reward = 7;
        assert.equal(solution(experience, threshold, reward), true);
        console.log('Test 7: ', solution(experience, threshold, reward));

        experience = 235;
        threshold = 293;
        reward = 4;
        assert.equal(solution(experience, threshold, reward), false);
        console.log('Test 8: ', solution(experience, threshold, reward));

        experience = 222;
        threshold = 137;
        reward = 58;
        assert.equal(solution(experience, threshold, reward), true);
        console.log('Test 9: ', solution(experience, threshold, reward));

        experience = 16;
        threshold = 23;
        reward = 16;
        assert.equal(solution(experience, threshold, reward), true);
        console.log('Test 10: ', solution(experience, threshold, reward));
    } catch (e) {
        console.log(e.name, e.message);
    }
}

testSolution();
