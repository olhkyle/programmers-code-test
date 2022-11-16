function solution(k, m, score) {
    let answer = 0;
    // k : 1~k 점까지의 점수
    
    // m - 한 상자에 포장하는 사과의 갯수
    
    // 사과 한 상자의 가격 = k 중 최소 점수 * m
    
    // [ 2, 2, 3, 3] : 2*4*1
    // [1,1,2] [2,2,2] [4,4,4] [ 4,4,4] : 1 * 3 + 2 * 3 + 4* 3 + 4* 3 = 33
    
    // 1. 오름차순 정렬
    score.sort((x,y) => x-y);
    // console.log(score)
    
    // 2. m의 갯수에 따라 포장할 수 있는 상자의 갯수 파악
    const boxCount = Math.floor(score.length / m);
    
    // 3. 새로운 배열 -> 상자를 못만드는 사과는 제거한다. splice?
    const sliceApple = m * boxCount
    const newScoreArr = score.slice(-sliceApple); // 또는 score.slice(score.length % m )
    console.log(newScoreArr)
    
    if(newScoreArr.length < m){
        return 0;
    }
    // 4. 반복문을 활용해 상자의 갯수만큼 돌고, 반복문 안에서 사과의 가격을 계산 후 최종 배열에 push한다.
    for(let i = 0; i < newScoreArr.length; i++){
        if( i === 0 || i % m === 0 ){
            answer += newScoreArr[i] * m
        }
    }
    return answer;
}