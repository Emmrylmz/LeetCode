/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.cache_map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.cache_map.has(key)) {
        return -1;
    }
    // Move the accessed key to the end to mark it as recently used
    const value = this.cache_map.get(key);
    this.cache_map.delete(key); // Remove the key
    this.cache_map.set(key, value); // Reinsert it to the end
    return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cache_map.has(key)) {
        // If key already exists, remove it so we can update it at the end
        this.cache_map.delete(key);
    } else if (this.cache_map.size >= this.capacity) {
        // Remove the least recently used item (first item in Map)
        const firstKey = this.cache_map.keys().next().value;
        this.cache_map.delete(firstKey);
    }
    // Insert the key-value pair at the end of the Map to mark it as recently used
    this.cache_map.set(key, value);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
