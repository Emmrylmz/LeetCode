/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval)
    const sorted = intervals.sort((a, b) => a[0] - b[0]);
    let current_state = intervals[0]
    let next = 1
    let out = []
    while (next < sorted.length) {
        if (current_state[1] >= sorted[next][0]) {
            current_state = [current_state[0], Math.max(sorted[next][1], current_state[1])]
            next === sorted.length - 1 && out.push(current_state)
        } else {
            console.log(current_state)
            out.push(current_state)
            current_state = sorted[next]
        }
        next++

    }
    if (sorted[sorted.length - 1] === current_state) {
        out.push(current_state)
    }
    return out
};