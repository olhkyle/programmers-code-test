function solution(s){
    var answer = true;
    s = s.toLowerCase();
    let pCount = 0;
    let yCount = 0;
    
    if(!s.includes('p') && !s.includes('y')){
        answer = true;
    }
    
    for (let i = 0; i < s.length; i++){
        if (s[i] == 'p'){
            pCount++;
        }
        
        if (s[i] == 'y'){
            yCount++;
        }
    }
    if (pCount == yCount){
        answer = true;
    } else {
        answer = false;
    }
    

    return answer;
}