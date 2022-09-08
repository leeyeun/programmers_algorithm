function solution(number, k) {
    var answer = "";
    let arr = [];
    for (let i = 0; i < number.length; i++) {
        //k가 0보다 크고 arr배열의 마지막 인덱스 값이 number값보다 작으면
        while (k > 0 && arr[arr.length - 1] < number[i]) {
            //arr의 마지막 값을 뺍니다.
            arr.pop();
            // k에 -1를 해줍니다.
            k--;
        }
        //while에 들어가지 않으면 number값을 push
        arr.push(number[i]);
    }
    //k가 남아있으면 뒤에서부터 제거해줍니다.
    arr.splice(arr.length - k, k);
    //arr 배열을 문자열로 바꿉니다
    answer = arr.join("");
    return answer;
}
