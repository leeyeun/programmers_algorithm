function solution(nums) {
    let maxLength = nums.length / 2;

    let arr = nums.filter((element, index) => {
        return nums.indexOf(element) === index;
    });

    return arr.length > maxLength ? maxLength : arr.length;
}
