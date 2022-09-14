function solution(n) {
    var answer = 0;
    for (let i = 0; i <= n; i++) {
        if (i * i == n) {
            return (answer = Math.pow(i + 1, 2));
        } else {
            answer = -1;
        }
    }
    return answer;
}
