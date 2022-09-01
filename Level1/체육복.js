function solution(n, lost, reserve) {
    //처음 가능한 학생수 = n - lost.length
    var answer = n - lost.length;
    //여분의 옷을 가지고 온 아이가 옷을 잃어버렸을 때
    let realLost = lost.filter((e) => !reserve.includes(e));
    let realReserve = reserve.filter((i) => !lost.includes(i));
    answer += lost.length - realLost.length;
    //정렬
    realLost.sort((a, b) => a - b);

    realLost.forEach((e) => {
        //여분이 없는 경우
        if (realReserve.length === 0) {
            return;
        }
        //자신보다 왼쪽에 있는 경우
        if (realReserve.includes(e - 1)) {
            realReserve = realReserve.filter((i) => i !== e - 1);
            answer++;
        }
        //자신보다 오른쪽에 있는 경우
        else if (realReserve.includes(e + 1)) {
            realReserve = realReserve.filter((i) => i !== e + 1);
            answer++;
        }
    });
    return answer;
}
