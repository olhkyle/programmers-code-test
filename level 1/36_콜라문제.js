function solution(a, b, n) {
    let answer = 0;
    
    while(n >= a){
        const remain = n % a; // 빈병 제공 후 받을 수 있는 콜라를 제외한 나머지 빈병의 수 
        n = Math.floor(n / a) * b; 
        answer += n;
        n += remain;
    }
    
    
    return answer;
}