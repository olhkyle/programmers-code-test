function solution(food) {
    var answer = '';
    const newFood = []
    food.forEach((f, idx) => {
        if(idx > 0 && f % 2 !== 0){
            f--;
            newFood.push(f);
        } else {
            newFood.push(f);
        }
    })
    const strArr = [];
    newFood.forEach((item, idx) => {
        if(idx > 0){
            for (let i = 0; i < item / 2; i++){
                strArr.push(idx);
            }
        }
    })
    
    answer += strArr.join('') + '0' + strArr.reverse().join('');
    
    return answer;
}