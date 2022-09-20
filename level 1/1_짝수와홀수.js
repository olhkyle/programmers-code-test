function solution(num) {
    var answer = '';
    if(num < 0){
        num *= -1;
    }
    
    if (num % 2 == 0){
        answer = 'Even';
    } else if(num % 2 == 1){
        answer = 'Odd';
    }
    return answer;
}