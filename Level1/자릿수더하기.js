function solution(n) {
    let answer = 0;
    let arr = n.toString().split("");

    for (let i = 0; i < arr.length; i++) {
        answer += parseInt(arr[i]);
    }

    return answer;
}

function solution(n) {
    return String(n)
        .split("")
        .reduce((acc, cur) => acc + parseInt(cur), 0);
}
