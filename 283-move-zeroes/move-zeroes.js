/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// let test = [1, 2, 0, 0, 2, 4, 0]
// let test = [1, 0, 2, 0, 2, 4, 0]

var moveZeroes = function (nums) {
    if (nums.length < 2) return nums;
    if (nums.length === 2) {
        if (nums[0] === 0 && nums[1] !== 0) {
            nums[0] = nums[1];
            nums[1] = 0;
        }
        return nums;
    }
    let first = 0;
    let second = 1;

    while (second < nums.length) {
        while (nums[first] !== 0 && second < nums.length - 1) {
            first++;
            second++;
            console.log(first, second);
        }
        if (nums[second] !== 0 && nums[first] === 0) {
            nums[first] = nums[second];
            nums[second] = 0;
            first++;
        } else {
            second++;
        }
    }

    return nums;
}
