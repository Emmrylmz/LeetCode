function isValid(s: string): boolean {
    if (s.length % 2 != 0) return false
    const map = new Map<string, string>([
        ["]", "["],
        [")", "("],
        ["}", "{"],
    ])
    const stack = []
    let bool = false
    const splittedString = s.split("")
    for (const el of splittedString) {
        if ([...map.keys()].indexOf(el) === -1) {
            stack.push(el)
            bool = false
        }
        else {
            if (stack.length > (s.length - stack.length)) return false
            const last = stack.pop()
            map.get(el) === last ? bool = true : bool = false
            if (bool === false) break
            console.log(bool)
        }
    }
    return bool
};