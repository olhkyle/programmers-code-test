// 시간 초과 -> 제곱근 판별을 통해 줄일 수 있다.
function solution(n) {
    var answer = 0;
    for (let i = 2; i <= n; i++){
        let tmp = i;
        let arr = [];
        for (let j = 1; j <= tmp; j++){
            if (tmp % j == 0){
                arr.push(j);
            }
        }
        if (arr.length == 2){
            answer++;
        }
    }
    return answer;
}


// 소수인지 판별하는 함수
const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n) {
  var answer = 0;
  for(let i = 2; i <= n; i++){
      if(isPrime(i) == true){
          answer ++;
      }
  }
  
  return answer;
}