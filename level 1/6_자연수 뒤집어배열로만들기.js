function solution(n) {
    var answer = [];
    let arr = n.toString().split('').reverse();
    answer = arr.map(i => +i);
    
    return answer;
}