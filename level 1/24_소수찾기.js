function solution(n) {
    var answer = 0;
    for (let i = 2; i <= n; i++){
        let tmp = i;
        let arr = [];
        for (let j = 1; j <= tmp; j++){
            if (tmp % j == 0){
                arr.push(j);
            }
        }
        if (arr.length == 2){
            answer++;
        }
    }
    return answer;
}