/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
     let grid = new Array(m).fill(null).map(() => new Array(n).fill(null).map(() =>
        new Array(maxMove + 1).fill(-1)))

    const mod = 1e9 + 7

    function helper(moves, x, y) {
        if (x < 0 || x >= m || y < 0 || y >= n) return 1

        if (moves <= 0) return 0

        if (grid[x][y][moves] !== -1) {
            return grid[x][y][moves]
        }

        let result = 0

        result = (result + helper(moves - 1, x + 1, y)) % mod
        result = (result + helper(moves - 1, x - 1, y)) % mod
        result = (result + helper(moves - 1, x, y + 1)) % mod
        result = (result + helper(moves - 1, x, y - 1)) % mod

        grid[x][y][moves] = result

        return result

    }

    return helper(maxMove, startRow, startColumn)
}