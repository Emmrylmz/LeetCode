/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
 
  if (!ratings || ratings.length === 0) {
    return 0;
  }

  let candies = Array(ratings.length).fill(1);

  // Left to right pass
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  // Right to left pass
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  // Sum up the candies array to get the total
  let totalCandies = candies.reduce((sum, val) => sum + val, 0);

  return totalCandies;
}


