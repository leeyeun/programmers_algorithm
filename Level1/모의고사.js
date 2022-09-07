function solution(answers) {
    var answer = [];

    const num1 = [1, 2, 3, 4, 5];
    const num2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {
        if (num1[i % num1.length] === answers[i]) {
            count[0]++;
        }
        if (num2[i % num2.length] === answers[i]) {
            count[1]++;
        }
        if (num3[i % num3.length] === answers[i]) {
            count[2]++;
        }
    }

    let max = Math.max(...count);
    for (let j = 0; j < count.length; j++) {
        if (count[j] === max) {
            answer.push(j + 1);
        }
    }
    return answer;
}
