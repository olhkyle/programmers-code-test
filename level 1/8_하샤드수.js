function solution(x) {
    var answer = true;
    let sum = 0;
    let arr = x.toString().split('').map(item => +item);
    
    for (let i = 0; i <arr.length; i++){
        sum += arr[i];
    }
    
    if ( x % sum == 0){
        answer = true;
    } else{
        answer = false;
    }
    return answer;
}