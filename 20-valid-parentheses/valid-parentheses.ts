function isValid(s: string): boolean {
    if (s.length % 2 !== 0) return false; // Odd length strings can't be balanced
    
    const map = new Map<string, string>([
        [")", "("],
        ["]", "["],
        ["}", "{"],
    ]);

    const stack: string[] = [];

    for (const el of s) {
        if (map.has(el)) {
            // If el is a closing bracket, check for matching opening bracket
            const last = stack.pop();
            if (map.get(el) !== last) return false; // Return false if brackets don't match
        } else {
            // If el is an opening bracket, push to the stack
            stack.push(el);
        }
    }

    // If the stack is empty, all brackets were matched; otherwise, it's invalid
    return stack.length === 0;
}