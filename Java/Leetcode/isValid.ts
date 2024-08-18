function isvalid(s: string):boolean{
    const stack: string[] = [];
    const braceMap: {[key:string]:string} = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    for(let i= 0; i <s.length; i++){
        const char = s[i];

        if(braceMap[char]){
            stack.push(braceMap[char])
        } else {
            if(stack.pop() !== char){
                return false;
            }
        }
    }

    return stack.length === 0;
}