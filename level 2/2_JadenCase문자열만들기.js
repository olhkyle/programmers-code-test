function solution(s) {
    var answer = '';
    s = s.toLowerCase();
    return s.split(' ').map(s => s == '' ? s : s[0].toUpperCase()+s.slice(1)).join(' ')
}

