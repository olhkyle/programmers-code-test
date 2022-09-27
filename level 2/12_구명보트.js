function solution(people, limit) {
    var answer = 0;
    
    people.sort((x,y) => y-x);
    console.log(people);
    
    // 투포인터를 사용하는 그리디 알고리즘 - 최적 부분구조
    let left = 0;
    let right = people.length - 1;
    for(let i = left, j = right; i <=j; i++){
        if(people[i] + people[j] <= limit) j--;
        answer++;
    } 
    return answer;
}

console.log(solution([70,50,80,50], 100));
/*
[ 80, 70, 50, 50 ]
3
*/


// 무게 순으로 정렬시킨 다음,

// 가장 무거운 사람과 가장 가벼운 사람의 무게 합이 무게 제한보다 낮으면 두 사람이 빠지고 구명보트 개수를 추가하고,

// 그렇지 않으면 가장 무거운 사람만 빠지고 구명보트 개수를 추가하면 됩니다.

