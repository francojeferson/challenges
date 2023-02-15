function solution(nums) {
    var max = 0;

    for (var i = 1; i < nums.length; i++) {
        var diff = Math.abs(nums[i] - nums[i - 1]);
        max = (diff > max) ? diff : max;
    }

    return max;
}

module.exports = solution;
