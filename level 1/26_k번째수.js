function solution(array, commands) {
    var answer = [];
    
    for (let i = 0; i < commands.length; i++){
        let newArr = array.slice(commands[i][0]-1, commands[i][1]);
        newArr.sort((x,y) => x-y);
        answer.push(newArr[commands[i][2]-1]);

    }
    
    return answer;
}

let str = 'one2three';
let answer = str;
let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
for(let i = 0; i < numbers.length; i++){
    let arr = answer.split(numbers[i])
    console.log(arr);
    // answer = arr.join(i);
}
console.log(answer);

let arr = str.split('one');
console.log(arr);
console.log(arr.join(1));