function solution(s) {
    var answer = [];
    let count = 0;
    let zeroCount = 0;
    let c;
    while(s != '1'){
        for (let i = 0; i < s.length; i++){
            if (s[i] == '0'){
                zeroCount++;
            }
        }
        s = s.split('').filter(item => item !== '0').join('');
        s = s.length.toString(2);
        count++;
    }
    
    answer.push(count, zeroCount);
    
    return answer;
}