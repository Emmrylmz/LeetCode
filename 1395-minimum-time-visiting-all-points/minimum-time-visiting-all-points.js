/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
    let global_max = 0
    for (let i = 1; i < points.length; i++) {
        let direction_x = Math.abs(points[i - 1][0] - points[i][0])
        let direction_y = Math.abs(points[i - 1][1] - points[i][1])
        global_max += Math.max(direction_x, direction_y)
    }
    return global_max
};