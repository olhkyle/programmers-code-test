function solution(n) {
    var answer = 0;
    let arr = [];
    for (let i = 1; i < n; i++){
        if (n % i == 1){
            arr.push(i);
        }
    }
    
    arr.sort((x,y)=> x-y);
    answer = arr.shift();
    return answer;
}