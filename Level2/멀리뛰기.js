function solution(n) {
    let arr = [1, 2];
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[arr.length - 1];
}
