function solution(sizes) {
    //숫자 위치 바꾸기
    let arr = sizes.map((arr) => {
        // if(arr[0] > arr[1]){
        //     return arr.reverse()
        // }else {
        //     return arr
        // }
        return arr[0] > arr[1] ? arr.reverse() : arr;
    });

    // 가장 큰 수 찾기
    let w = 0;
    let h = 0;
    arr.map((max) => {
        if (max[0] > w) {
            w = max[0];
        }
        if (max[1] > h) {
            h = max[1];
        }
    });
    // for(let i = 0; i < arr.length; i++) {
    //     if(arr[i][0] > a) {
    //         a = arr[i][0]
    //     }
    //     if(arr[i][1] > b) {
    //         b = arr[i][1]
    //     }
    // }

    return w * h;
}
