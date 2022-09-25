function solution(n, arr1, arr2) {
    var answer = [];
    let a = [];
    let b = [];
    
    for (let i = 0; i < n; i++){
        a.push(arr1[i].toString(2));
        b.push(arr2[i].toString(2));
    }
    
    for (let i = 0; i < n; i++){
        if (a[i].length < n){
            a[i] = '0'.repeat(n-a[i].length) + a[i]; 
        } else if(a[i] === '1'){
            a[i] = '0'.repeat(n-1) + '1';
        }
        
        if (b[i].length < n){
            b[i] = '0'.repeat(n-b[i].length) + b[i]; 
        } else if(b[i] === '1'){
            b[i] = '0'.repeat(n-1) + '1';
        }
    }
    
    for (let i = 0; i < n; i++){
        let str = '';
        for (let j = 0; j < n; j++){
            if (a[i][j] + b[i][j] >= 1){
                str += '#';
            } else {
                str += ' ';
            }
        }
        answer.push(str);
    }
    
    return answer;
}