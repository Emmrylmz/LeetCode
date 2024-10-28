var longestSquareStreak = function(nums) {
    // Create a Set for O(1) lookups
    const numSet = new Set(nums);
    let globalMax = 0;
    
    // Check each number as a potential start of a sequence
    for (const num of nums) {
        let current = num;
        let length = 0;
        
        // Keep checking if the square exists in our set
        while (numSet.has(current)) {
            length++;
            // Next number in sequence would be current squared
            current = current * current;
        }
        
        // Update global max if we found a sequence of length > 1
        if (length > 1) {
            globalMax = Math.max(globalMax, length);
        }
    }
    
    // Return -1 if no valid sequence found, otherwise return the longest sequence
    return globalMax < 2 ? -1 : globalMax;
};