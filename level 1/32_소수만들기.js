function solution(nums) {
    var answer = 0;
    for(let i = 0; i < nums.length - 2; i++){
        let first = nums[i]
        for(let j = i + 1; j < nums.length - 1; j++){
            let second = nums[j];
            nums.filter((num, idx) => {
                if(idx > j){
                    if(isPrime(num + first + second)){
                        answer++;
                    }
                }
            })
        }
    }
    return answer;
}


// n이 1을 제외한 나머지 값으로 나눠지면, 소수가 아니다.
const isPrime = (n) => {
    for(let i = 2; i < Math.sqrt(n); i++){
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}