/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {

    function checkNeighbor(x,y, board) {
    let aliveN = 0;
    let deadN = 0;

    const maxX = board[0].length - 1;
    const maxY = board.length - 1;

    const neighbors = [
        [0, 1], [1, 0], [-1, 0], [0, -1],
        [-1, -1], [1, 1], [-1, 1], [1, -1]
    ];

     for (const [dx, dy] of neighbors) {
        const newX = x + dx;
        const newY = y + dy;
        if ((0 <= newX && newX <= maxX) && (0 <= newY && newY <= maxY)) {
        let neighborValue = board[newY][newX];
        aliveN += neighborValue === 1 ? 1 : 0; 
        deadN += neighborValue === 0 ? 1 : 0;
        }
    }

  return {
    alive: aliveN,
    dead: deadN
  };
}
   const updates = [];
   
    for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
        const neighborState = checkNeighbor(j, i, board);
        const newValue = (board[i][j] === 1) ? (neighborState.alive === 2 || neighborState.alive === 3) ? 1 : 0
                                             : (neighborState.alive === 3) ? 1 : 0;
        updates.push({ x: j, y: i, value: newValue });
    }
}

for (const update of updates) {
    board[update.y][update.x] = update.value;
}

};