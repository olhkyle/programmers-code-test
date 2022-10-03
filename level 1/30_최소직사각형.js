// 완전 탐색

function solution(sizes) {
    var answer = 0;
    
    for(let i = 0; i < sizes.length; i++){
        if(sizes[i][0] < sizes[i][1]){
            sizes[i].reverse();
        }
    }
    
    let firstArr = []
    let secondArr = [];
    for(let i = 0; i < sizes.length; i++){
        firstArr.push(sizes[i][0]);
        secondArr.push(sizes[i][1]);
    }
    
    return Math.max(...firstArr) * Math.max(...secondArr);

    
}