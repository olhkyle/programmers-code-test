function solution(num) {
    var answer = 0;
    let count = 0;
    if (num == 1){
        answer = 0;
    } else{
        while (num != 1){
            if (num % 2 == 0){
                num /= 2;
                count++;
            } else {
                num = num * 3 + 1;
                count++;
            }

            if (count == 500){
                return -1;
                break;
            }
        }
    }
    
    answer = count;

    return answer;
}