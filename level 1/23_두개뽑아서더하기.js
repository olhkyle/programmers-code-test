function solution(numbers) {
    var answer = [];
    
    let tmp = [];
    for (let i = 0; i < numbers.length; i++){
        for (let j = i+1; j < numbers.length; j++){
            tmp.push(numbers[i] + numbers[j]);
        }
    }
    let newSet = new Set(tmp);
    answer = Array.from(newSet);
    answer.sort((x,y) => x-y);
    
    
    return answer;
}