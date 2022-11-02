function solution(babbling) {
    var answer = 0;
    const dup = ["ayaaya", "yeye", "woowoo", "mama"]; // 같은 발음은 연속으로 발음 불가
    while(babbling.length){
        let b = babbling.pop();
        if(dup.some(letter => b.includes(letter))) continue; // babbling 배열의 요소 중에 같은 발음 연속인 단어가 있는 경우 패스
        b = b.replaceAll('aya', '1').replaceAll('ye', '2').replaceAll('woo', '3').replaceAll('ma', '4');
        b = b.replace(/[1234]/g, '');
        if(b.length===0) answer++;
    
    }
    return answer;
}