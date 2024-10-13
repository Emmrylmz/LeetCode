/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0
    const map = new Map()
    const set = [...new Set(nums)]
    const sorted = set.sort((a, b) => a - b)

    let i = 0
    let j = 1
    let k = 1
    let max_size = 0
    const length = nums.length - 1
    while (j <= length) {
        if (!map.has(sorted[i])) {
            map.set(sorted[i], [])
        }
        if (sorted[j] - k === sorted[i]) {
            map.get(sorted[i]).push(sorted[j])
            max_size = Math.max(max_size, map.get(sorted[i]).length)
            j++
            k++

        }
        else {
            i = j
            j = i + 1
            k = 1
        }
    }
    return max_size + 1
};

[0,1,1,2]