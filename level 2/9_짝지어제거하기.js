function solution(s)
{
    var answer = -1;

    let stack = [];
    for (let i = 0; i < s.length; i++){
        if (stack.length === 0 || stack[stack.length - 1] !== s[i]){
            stack.push(s[i]);
        } else if (stack[stack.length - 1] == s[i]){
            stack.pop();
        }
    }
    
    if (stack.length == 0){
        answer = 1;
    } else {
        answer = 0;
    }

    return answer;
}