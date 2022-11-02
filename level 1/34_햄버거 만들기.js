// 통과
function solution(ingredient) {
    var answer = 0;
    // LIFO - stack
    let stack = [];
    for(let i = 0; i < ingredient.length; i++){
        stack.push(ingredient[i]);
        if(stack[stack.length - 1] == 1){
            if(stack.slice(-4).join('') === '1231'){
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                answer++;
            }
        } 
    }
    return answer;
}

// test case #2 - 실패  => 원인 파악중
function solution(ingredient) {
    var answer = 0;
    // LIFO - stack
    let stack = [];
    for(let i = 0; i < ingredient.length; i++){
        stack.push(ingredient[i]);
        if(stack[stack.length - 1] == 1){
            if(stack.slice(-4).join('') === '1231'){
                stack.splice(stack.length - 4, stack.length - 1);
                answer++;
            }
        } 
    }
    return answer;
}