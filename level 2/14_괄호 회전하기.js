function solution(s) {
    let answer = 0;
    const strArr = s.split('');
    const obj = {
        ')' : '(',
        ']' : '[',
        '}' : '{',
    }
    const isValid = strArr => {
        const stack = [];
        for(let i = 0; i < strArr.length; i++){
            const curr = strArr[i];
            if(obj[curr] === undefined) stack.push(curr);
            else{
                if(stack[stack.length - 1] !== obj[curr]) return false;
                stack.pop();
            }
        }
        if(stack.length) return false;
        return true;
    }
    
    for(let i = 0; i < strArr.length; i++){
        if(isValid(strArr))answer++;
        strArr.push(strArr.shift());
    }
    
    
    return answer;
}