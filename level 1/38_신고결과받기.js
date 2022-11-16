function solution(id_list, report, k) {
    var answer = [];
    
    // 신고당한 횟수
    const idOfDeclaration = {};
    
    // 유저가 신고한 아이디
    const resultOfDeclaration = {}
    
    id_list.forEach(id => {
        idOfDeclaration[id] = 0
        resultOfDeclaration[id] = [];
    })
    

    for(let i = 0; i < report.length; i++){
        const arr = report[i].split(' ');
        const [user, declaredUser] = arr

        if(report[i] !== report[i+1]){
             // 한 유저를 여러 번 신고한 대상을 resultOfDeclaration에 넣을 필요가 없다.
            // 또, 한 유저를 여러 번 신고한 경우 신고 횟수는 1회로 처리한다.
            if(!resultOfDeclaration[user].includes(declaredUser)){
                resultOfDeclaration[user].push(declaredUser)     
                idOfDeclaration[declaredUser] = (idOfDeclaration[declaredUser] || 0) + 1;
            }
        }
    }
    
    // console.log(resultOfDeclaration)
    // console.log(idOfDeclaration)
    
    const blockedUser = [];
    for (let key in idOfDeclaration){
        if (idOfDeclaration[key] >= k){
            blockedUser.push(key)
        }
    }
    // console.log(blockedUser)
    
    for (let key in resultOfDeclaration){
        const target = resultOfDeclaration[key]
        let add = 0;
        for(let id of target){
            if(blockedUser.includes(id)){
                add++;
            }
        }
        answer.push(add)
    }
    
    return answer;
}