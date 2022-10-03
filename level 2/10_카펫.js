function solution(brown, yellow) {
    let total = brown + yellow;
    

    // 전체 너비의 높이는 최소 3부터 시작
    for(let height = 3; height <= brown; height++){
        if(total % height !== 0){
            continue;
        }
        let width = total / height;
        // 노란색 너비
        if((height - 2) * (width - 2) == yellow){
            return [width,height];
        }
    }
  
}