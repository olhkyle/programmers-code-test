function solution(n) {
    var answer = 0;
    let arr = n.toString().split('').sort((x,y)=>y-x);
    answer = +arr.join('')
    
    
    return answer;
}