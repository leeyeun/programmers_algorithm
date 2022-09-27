function solution(s) {
    let answer = "";
    let arr = s.split(" ");

    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i].split("");
        let newArr = temp.map((al, j) => {
            if (j % 2 === 0) {
                answer += al.toUpperCase();
            } else {
                answer += al.toLowerCase();
            }
        });
        answer += " ";
    }
    return answer.slice(0, -1);
}
