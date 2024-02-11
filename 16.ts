function isValid(s: string): boolean {
    let stack: string[] = [];
    let slen = stack.length

    for(let i = 0; i < slen; i++) {
        if (slen) {
            if (stack[slen - 1] == '(' && s[i] == ')') stack.pop();
            if (stack[slen - 1] == '{' && s[i] == '}') stack.pop();
            if (stack[slen - 1] == '[' && s[i] == ']') stack.pop();
        }
        else stack.push(s[i]);
    }

    return slen === 0;
};