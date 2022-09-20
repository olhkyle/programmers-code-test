function solution(phone_number) {
    var answer = '';
    let a = phone_number.slice(0, phone_number.length - 4);
    let star = ''
    for (let i = 0; i < a.length; i++){
        star += '*';
    }
    answer = star + phone_number.slice(a.length);
    
    return answer;
}