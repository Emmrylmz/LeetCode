/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if (points.length === 0) return 0;
    
    // Sort balloons by their end points
    points.sort((a, b) => a[1] - b[1]);
    
    let arrows = 1; // At least one arrow is needed
    let end = points[0][1]; // End of the first balloon
    
    for (let i = 1; i < points.length; i++) {
        // If the current balloon starts after the end of the previous arrow shot, we need a new arrow
        if (points[i][0] > end) {
            arrows++;
            end = points[i][1]; // Shoot the new arrow at the end of this balloon
        }
    }
    
    return arrows;
};
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if (points.length === 0) return 0;
    
    // Sort balloons by their end points
    points.sort((a, b) => a[1] - b[1]);
    
    let arrows = 1; // At least one arrow is needed
    let end = points[0][1]; // End of the first balloon
    
    for (let i = 1; i < points.length; i++) {
        // If the current balloon starts after the end of the previous arrow shot, we need a new arrow
        if (points[i][0] > end) {
            arrows++;
            end = points[i][1]; // Shoot the new arrow at the end of this balloon
        }
    }
    
    return arrows;
};
