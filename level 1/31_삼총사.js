function solution(number) {
    var answer = 0;
    let arr = [];
    // n개 중에 3개 뽑기
    for(let i = 0; i < number.length; i++){
        let first = number[i];
        for(let j = i + 1; j < number.length; j++){
            let second = number[j];
            let sum = first + second;
            number.filter((item, idx) => {
                if(item + sum == 0 && idx > j){
                    answer++;
                    arr.push([first,second,item]);
                }
            })
        }
    }
    console.log(arr);
    
    return answer;
}