function solution(s) {
    var answer = '';
    let arr = s.split(' ').map(item => +item);
    arr.sort((x,y)=> x-y);
    answer += arr.shift() + ' ' + arr.pop();
    return answer;
}