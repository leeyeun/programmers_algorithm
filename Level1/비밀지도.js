function solution(n, arr1, arr2) {
    var answer = [];

    for (let i = 0; i < n; i++) {
        let newArr = (arr1[i] | arr2[i]).toString(2);
        let line = [];
        for (let j = newArr.length - n; j < newArr.length; j++) {
            if (newArr[j] === "1") {
                line.push("#");
            } else {
                line.push(" ");
            }
        }
        answer.push(line.join(""));
    }
    return answer;
}
