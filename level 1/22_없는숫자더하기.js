function solution(numbers) {
    var answer = -1;
    let sum = 0;
    numbers.sort((x,y)=> x-y);
    for (let i = 0; i < 10; i++){
        if(numbers.indexOf(i) == -1){
            sum += i;
        }
    }
    
    answer = sum;
    return answer;
}