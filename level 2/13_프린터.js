Array.prototype.front = function() {
    return this.length == 0 ? undefined : this[0];
}

function solution(priorities, location) {
    var answer = 0;
    
    
    // index를 저장하는 큐
    let vq = [];
    
    // 우선순위를 저장하는 큐
    let pq = [];
    for(let i = 0; i < priorities.length; i++){
        vq.push(i);
        pq.push(priorities[i]);
    }
    
    // 몇 번째로 인쇄할지 결정하는 변수
    let count = 0; 
    
    while(1){
        if(pq.front() === Math.max(...pq)){
            count++;
            
            if(vq.front() == location){
                answer = count;
                break;
            }
            // vq 배열의 제일 앞에 있는 index가 출력해야 할 문서의 위치와 같지 않은 경우 그냥 출력함.
            else{
                vq.shift();
                pq.shift();
            }
        } else{
            vq.push(vq.shift());
            pq.push(pq.shift());
        }
    }
    return answer;
}