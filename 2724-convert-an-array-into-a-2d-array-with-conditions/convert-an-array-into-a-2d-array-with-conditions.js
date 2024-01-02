/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const frequencyMap = new Map();
    let outer = []
    nums.forEach(element => {
    frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
  });

    console.log(frequencyMap)
    while(frequencyMap.size){
        let inner = []
        for (const [key, value] of frequencyMap.entries()) {
        inner.push(key)
        if(value === 1 ) {
            frequencyMap.delete(key)
        }
        else frequencyMap.set(key,value-1)
}
    outer.push(inner)
    }
    
    return outer
};