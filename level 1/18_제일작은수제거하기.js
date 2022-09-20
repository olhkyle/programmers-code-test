function solution(arr) {
    var answer = [];
    if (arr.length == 1){
        answer.push(-1);
    } else{
        let a = Math.min(...arr);
        answer = arr.filter(item => item !== a);
    }
    return answer;
}