function solution(n) {
    var answer = 0;
    let number = Math.sqrt(n);
    if (Number.isInteger(number)){
        answer = Math.pow(number+1,2);
    }else{
        answer = -1;
    }
    
    return answer;
}