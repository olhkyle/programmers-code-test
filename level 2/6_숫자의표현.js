function solution(n) {
    var answer = 0;
    let arr = [];
    for (let i = 1; i <= n; i++){
        if (n % i == 0 && i % 2 == 1){
            arr.push(i);
        }
    }
    
    answer = arr.length;
    return answer;
}